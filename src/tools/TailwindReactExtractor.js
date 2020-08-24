import debug from 'debug'
import { tailwindProps, propVariants, getColorShade } from '../utils'

const log = debug('tailwind-react:extractor')

const propRegex = {
  /** Detects `<Box select="none" />` */
  singleValue: prop =>
    new RegExp(
      `${prop}(?:-[A-Za-z]+)?=[\`"'{\\s]+[\\w\\/\\-]+\\s*[\`"'}]+`,
      'g',
    ),
  /** Detects `<Box flex />` */
  booleanValue: prop => new RegExp(`\\s${prop}(?:-[A-Za-z]+)?(?:\\s+|>)`, 'g'),
  /** Detects `<Box cursor={disabled ? 'default' : 'pointer'} />` & `<Box cursor={disabled || 'pointer'} />` */
  conditionalValue: prop =>
    new RegExp(
      `${prop}(?:-[A-Za-z]+)?={[\\w\\s\\?!:"'\`]+(?:\\?|\\|)+[\\w\\s\\?!:"'\`]+}`,
      'g',
    ),
  /** Detects `<Box m={{ x: 'auto' }} />` */
  objectValue: prop =>
    new RegExp(`${prop}(?:-[A-Za-z]+)?={{\\s*[\\w\\s:\\-\\/'"\`,]+\\s*}}`, 'g'),
  /** Detects `<Box flex={flex={[true, wrap && 'wrap', col ? 'col' : 'row']} />` */
  arrayValue: prop => new RegExp(`${prop}(?:-[A-Za-z]+)?=?={\\[[^\\]]+]`, 'g'),
  className: /className=[`"'{\s]+[\w\s/-]+\s*[`"'}]+/g,
}

const transformations = {
  'w-auto': ['flex-1'],
  focusable: ['focus:outline-none', 'focus:shadow-outline'],
}

export default class TailwindReactExtractor {
  static extract(content) {
    let classNames = []

    log('Starting extract')

    tailwindProps.forEach(prop => {
      try {
        let matches = []

        // Single Value
        const singleValueMatches =
          content.match(propRegex.singleValue(prop)) || []
        matches = matches.concat(singleValueMatches)

        if (singleValueMatches.length)
          log('  - single prop value matches:', singleValueMatches)

        // Boolean
        const booleanMatches = content.match(propRegex.booleanValue(prop)) || []
        matches = matches.concat(booleanMatches)

        if (booleanMatches.length) {
          log('  - boolean prop value matches:', booleanMatches)
        }

        // Objects
        let objMatches = content.match(propRegex.objectValue(prop)) || []

        if (objMatches.length) {
          log('  - object prop value matches', objMatches)

          objMatches = objMatches.reduce(
            (array, match) => [
              ...array,
              ...match
                .replace(/\s/g, '')
                .replace(`${prop}=`, '')
                .replace(/[{}'"]/g, '')
                .split(',')
                .map(objProp => {
                  const classFragments = objProp.split(':')
                  const key = classFragments[0]
                  return key.length === 1
                    ? `${prop}${key}-${classFragments[1]}`
                    : `${prop}${key === 'def' ? '' : `-${classFragments[0]}`}-${
                        classFragments[1]
                      }`
                }),
            ],
            [],
          )
          matches = matches.concat(objMatches)
        }

        // Conditionals
        const conditionalMatches =
          content.match(propRegex.conditionalValue(prop)) || []

        if (conditionalMatches.length) {
          log('  - conditional prop value matches:', conditionalMatches)

          conditionalMatches.forEach(propAndValue => {
            const propName = propAndValue.match(/[A-Za-z]+(?==)/g)[0]
            let conditionalValues = propAndValue.match(/{.+(?=}\s*)/g) || []

            if (!conditionalValues[0]) {
              matches = matches.push(propName)
              return
            }

            if (conditionalValues[0].indexOf('?') === -1) {
              conditionalValues = conditionalValues[0]
                .replace(/`'"/, '')
                .split(/\s+\|\|\s+/)
            } else {
              conditionalValues = conditionalValues[0]
                .replace(/{[a-zA-Z]+\s+\?\s+/, '')
                .split(/\s+:\s+/)
            }

            matches = matches.concat([
              propName, // Insert prop name on its own for `<Box flex={!isFixed} />`
              ...conditionalValues.map(
                value => `${propName}-${value.replace(/["']/g, '')}`, // TODO: filter `opacity-undefined` & similar?
              ),
            ])
          })
        }

        // Arrays
        const arrayMatches = content.match(propRegex.arrayValue(prop)) || []

        if (arrayMatches.length) {
          log('  - array prop value matches:', arrayMatches)

          arrayMatches.forEach(propAndValue => {
            const propName = propAndValue.match(/[A-Za-z]+(?==)/g)[0]
            const arrayValues = propAndValue.replace(propName, '')

            matches = matches.concat([
              propName,
              ...(arrayValues.match(/[\w-]+/g) || []).map(
                value => `${propName}-${value}`,
              ),
            ])
          })
        }

        // Format matches found
        classNames = classNames.concat(
          matches
            // Remove defaults
            .filter(
              (className, index, array) => array.indexOf(className) === index,
            )
            // Remove any special characters, e.g. string wrappers
            .map(match =>
              match
                .replace(/[\s"'{}>]/g, '')
                .replace('=', '-')
                .replace(/[A-Z]/g, '-$&')
                .toLowerCase(),
            )
            // Add variant classes
            .reduce((classes, match) => {
              let className = [match]
              propVariants.forEach(variant => {
                if (match.includes(`-${variant}`)) {
                  className = match.replace(`-${variant}`, '')
                  className =
                    variant === 'hocus'
                      ? [`hover:${className}`, `focus:${className}`]
                      : [`${variant}:${className}`]
                }
              })

              if (
                (prop === 'bg' || prop === 'text') &&
                className[0].indexOf(':') === -1
              ) {
                // TODO: Determine if prop value is a colour
                const baseColor = className[0].replace(`${prop}-`, '')
                const highlightColor = getColorShade(baseColor)

                className = [
                  match,
                  `hover:${prop}-${baseColor}`,
                  `focus:${prop}-${baseColor}`,
                  `hover:${prop}-${highlightColor}`,
                  `focus:${prop}-${highlightColor}`,
                ]

                if (prop === 'bg') {
                  className.push(
                    `hover:${prop}-${getColorShade(baseColor, '100')}`,
                    `focus:${prop}-${getColorShade(baseColor, '100')}`,
                  )
                }
              }

              return [...classes, ...className]
            }, [])
            // Transform helper props into underlying tailwind class
            .reduce((classes, match) => {
              if (match.indexOf(':') !== -1) {
                const classFragments = match.split(':')

                return [
                  ...classes,
                  ...(transformations[classFragments[1]]
                    ? `${classFragments[0]}:${
                        transformations[classFragments[1]]
                      }`
                    : [match]),
                ]
              }

              return [...classes, ...(transformations[match] || [match])]
            }, []),
        )
      } catch (err) {
        throw err
      }
    })

    // Manual classNames check
    const classNameMatches = content.match(propRegex.className) || []

    if (classNameMatches.length) {
      log('  - className prop value matches:', classNameMatches)

      classNameMatches.forEach(className => {
        classNames = classNames.concat(
          className.replace('className=', '').match(/[\w-/:]+(?<!:)/g) || [],
        )
      })
    }

    classNames = classNames.filter(
      (className, index, array) => array.indexOf(className) === index,
    )

    if (classNames.length) {
      log('Finished and found:', classNames)
    }

    return classNames
  }
}
