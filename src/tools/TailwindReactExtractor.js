/* eslint-disable no-useless-escape */
import {
  tailwindProps,
  propVariants,
  getColorShade,
} from '../components/tailwind'

export const classRegex = /[A-Za-z0-9-_:\/]+/g

// TODO: Array values
const propRegex = {
  singleValue: prop =>
    new RegExp(
      `[ \n\r\t]${prop}(?:-[A-Za-z]+)?=["'{}][A-Za-z0-9-_:\/]+["'}]`,
      'g',
    ),
  booleanValue: prop =>
    new RegExp(`[ \n\r\t]${prop}(?:-[A-Za-z]+)?(?:[ \n\r]|>)`, 'g'),
  objectValue: prop =>
    new RegExp(
      `[ \n\r\t]${prop}(?:-[A-Za-z]+)?={{ ?[A-Za-z0-9-_:\/ '",]+ ?}}`,
      'g',
    ),
}

const transformations = {
  'w-auto': 'flex-1',
}

export default class TailwindReactExtractor {
  static extract(content) {
    let classNames = []

    tailwindProps.forEach(prop => {
      let matches = [
        ...(content.match(propRegex.singleValue(prop)) || []),
        ...(content.match(propRegex.booleanValue(prop)) || []),
      ]

      let objMatches = content.match(propRegex.objectValue(prop)) || []

      if (objMatches.length) {
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

      classNames = classNames
        .concat(
          matches
            .map(match =>
              match
                .replace(/[\s"'{}>]/g, '')
                .replace('=', '-')
                .replace(/[A-Z]/g, '-$&')
                .toLowerCase(),
            )
            .reduce((classes, match) => {
              let className = [match]
              propVariants.forEach(variant => {
                if (match.includes(variant)) {
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
                    `hover:${prop}-${getColorShade(baseColor, 'lightest')}`,
                    `focus:${prop}-${getColorShade(baseColor, 'lightest')}`,
                  )
                }
              }

              return [...classes, ...className]
            }, []),
        )
        .map(className => {
          if (className.indexOf(':') !== -1) {
            const classFragments = className.split(':')

            return transformations[classFragments[1]]
              ? `${classFragments[0]}:${transformations[classFragments[1]]}`
              : className
          }

          return transformations[className] || className
        })
    })

    return [...classNames, ...(content.match(classRegex) || [])].filter(
      (className, index, array) => array.indexOf(className) === index,
    )
  }
}
