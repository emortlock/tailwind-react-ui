import merge from 'lodash.merge'
import defaultConfig from './defaultConfig'

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

export default (projectConfig = {}) => {
  const config = merge(defaultConfig, projectConfig)

  return [
    config.radius,
    ...reduceMultiplePrefixes(config.spacing, [
      'mb',
      'mr',
      '-ml',
      '-mr',
      'p-',
      'pl-',
      'px-',
      'py-',
    ]),
    ...mapObject(config.container, 'max-w'),
    ...mapArray(config.text.size.body, 'text'),
    ...mapArray(config.text.size.title, 'text'),
    ...mapObject(config.text.family, 'font'),
    ...reduceMultiplePrefixes(config.baseColors, [
      'background-color',
      'border-color',
      'text',
    ]),
    ...reduceMultiplePrefixes(config.textColors, [
      'background-color',
      'border-color',
      'text',
    ]),
  ].filter((className, index, self) => self.indexOf(className) === index)
}
