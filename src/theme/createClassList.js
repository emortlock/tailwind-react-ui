import merge from 'lodash.merge'
import defaultTheme from './defaultTheme'

const mapObject = (obj, prefix) =>
  Object.keys(obj).map(key => `${prefix}-${obj[key]}`)

const mapArray = (arr, prefix) => arr.map(value => `${prefix}-${value}`)

const reduceMultiplePrefixes = (obj, prefixes) =>
  Object.keys(obj).reduce(
    (arr, key) =>
      typeof obj[key] === 'object'
        ? [...arr, ...reduceMultiplePrefixes(obj[key], prefixes)]
        : [...arr, ...prefixes.map(prefix => `${prefix}-${obj[key]}`)],
    [],
  )

export default (projectTheme = {}) => {
  const theme = merge(defaultTheme, projectTheme)

  return [
    theme.radius,
    ...reduceMultiplePrefixes(theme.spacing, [
      'mb',
      'mr',
      '-ml',
      '-mr',
      'p-',
      'pl-',
      'px-',
      'py-',
    ]),
    ...mapObject(theme.container, 'max-w'),
    ...mapArray(theme.text.size.body, 'text'),
    ...mapArray(theme.text.size.title, 'text'),
    ...mapObject(theme.text.family, 'font'),
    ...reduceMultiplePrefixes(theme.baseColors, [
      'background-color',
      'border-color',
      'text',
    ]),
    ...reduceMultiplePrefixes(theme.textColors, [
      'background-color',
      'border-color',
      'text',
    ]),
  ].filter((className, index, self) => self.indexOf(className) === index)
}
