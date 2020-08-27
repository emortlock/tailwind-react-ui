import debug from 'debug'
import { tailwindProps, propVariants, helperPropsMap } from '../utils'

const log = debug('tailwind-react:extractor')

const propRegex = {
  /** Detects `<Box select="none" />` */
  singleValue: (prop: string) =>
    new RegExp(
      `${prop}(?:-[A-Za-z]+)?=[\`"'{\\s]+[\\w\\/\\-]+\\s*[\`"'}]+`,
      'g',
    ),
  /** Detects `<Box flex />` */
  booleanValue: (prop: string) =>
    new RegExp(`\\s${prop}(?:-[A-Za-z]+)?(?:\\s+|>)`, 'g'),
  /** Detects `<Box cursor={disabled ? 'default' : 'pointer'} />` & `<Box cursor={disabled || 'pointer'} />` */
  conditionalValue: (prop: string) =>
    new RegExp(
      `${prop}(?:-[A-Za-z]+)?={[\\w\\s\\?!:"'\`]+(?:\\?|\\|)+[\\w\\s\\?!:"'\`]+}`,
      'g',
    ),
  /** Detects `<Box m={{ x: 'auto' }} />` */
  objectValue: (prop: string) =>
    new RegExp(`${prop}(?:-[A-Za-z]+)?={{\\s*[\\w\\s:\\-\\/'"\`,]+\\s*}}`, 'g'),
  /** Detects `<Box flex={flex={[true, wrap && 'wrap', col ? 'col' : 'row']} />` */
  arrayValue: (prop: string) =>
    new RegExp(`${prop}(?:-[A-Za-z]+)?={\\s*\\[[^\\]]+]`, 'g'),
  className: /className=[`"'{\s]+[\w\s/-]+\s*[`"'}]+/g,
}

const searchTerms = [...tailwindProps, ...Object.keys(helperPropsMap)]

const transformations: Record<string, string[]> = {
  ...helperPropsMap,
}

export default (content: string) => {
  let classNames: string[] = []

  log('Starting extract')

  searchTerms.forEach((prop) => {
    try {
      let matches: string[] = []

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

        matches = matches.concat(
          objMatches.reduce(
            (array, match) => [
              ...array,
              ...match
                .replace(/\s/g, '')
                .replace(`${prop}=`, '')
                .replace(/[{}'"]/g, '')
                .split(',')
                .map((objProp) => {
                  const classFragments = objProp.split(':')
                  const key = classFragments[0]
                  return key.length === 1
                    ? `${prop}${key}-${classFragments[1]}`
                    : `${prop}${key === 'def' ? '' : `-${classFragments[0]}`}-${
                        classFragments[1]
                      }`
                }),
            ],
            [] as string[],
          ),
        )
      }

      // Conditionals
      const conditionalMatches =
        content.match(propRegex.conditionalValue(prop)) || []

      if (conditionalMatches.length) {
        log('  - conditional prop value matches:', conditionalMatches)

        conditionalMatches.forEach((propAndValue) => {
          const propName = propAndValue.match(/[A-Za-z]+(?==)/g)?.[0] ?? ''
          let conditionalValues = propAndValue.match(/{.+(?=}\s*)/g) || []

          if (!conditionalValues[0]) {
            matches.push(propName)
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
              (value) => `${propName}-${value.replace(/["']/g, '')}`, // TODO: filter `opacity-undefined` & similar?
            ),
          ])
        })
      }

      // Arrays
      const arrayMatches = content.match(propRegex.arrayValue(prop)) || []

      if (arrayMatches.length) {
        log('  - array prop value matches:', arrayMatches)

        arrayMatches.forEach((propAndValue) => {
          const propName = propAndValue.match(/[A-Za-z]+(?==)/g)?.[0] ?? ''
          const arrayValues = propAndValue.replace(propName, '')

          matches = matches.concat([
            propName,
            ...(arrayValues.match(/[\w-]+/g) || []).map(
              (value) => `${propName}-${value}`,
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
          .map((match) => match.replace(/[\s"'{}>]/g, ''))
          // Add variant classes
          .reduce((classes, match) => {
            let className = [match]

            propVariants.forEach((variant) => {
              if (match.includes(`-${variant}`)) {
                const propName = match.replace(`-${variant}`, '')
                className =
                  variant === 'hocus'
                    ? [`hover:${propName}`, `focus:${propName}`]
                    : [`${variant}:${propName}`]
              }
            })

            return [...classes, ...className]
          }, [] as string[])
          // Transform helper props into underlying tailwind class
          .reduce((classes, match) => {
            let transformation = transformations[match]
            if (transformation) {
              return [...classes, ...transformation]
            }

            let propName = match

            if (match.indexOf(':') !== -1) {
              const classFragments = match.split(':')
              propName = classFragments[1]
            }

            transformation = transformations[propName]
            if (transformation) {
              return [
                ...classes,
                ...transformation.map((t) => match.replace(propName, t)),
              ]
            }

            if (match.indexOf('=') !== -1) {
              const classFragments = match.split('=')
              propName = classFragments[0]
            }

            transformation = transformations[propName]
            if (transformation) {
              return [
                ...classes,
                ...transformation.map((t) => match.replace(propName, t)),
              ]
            }

            return [...classes, match]
          }, [] as string[])
          // Apply final transformations to mimic tailwind class naming conventions
          .map((match) =>
            match.replace('=', '-').replace(/[A-Z]/g, '-$&').toLowerCase(),
          ),
      )
    } catch (err) {
      throw err
    }
  })

  // Manual classNames check
  const classNameMatches = content.match(propRegex.className) || []

  if (classNameMatches.length) {
    log('  - className prop value matches:', classNameMatches)

    classNameMatches.forEach((className) => {
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
