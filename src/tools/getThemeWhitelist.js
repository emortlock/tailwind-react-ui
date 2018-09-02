import merge from 'lodash.merge'
import { defaultTheme } from '../components/theme'

const mapObject = (obj, prefix) =>
  Object.keys(obj).map(key => `${prefix}-${obj[key]}`)

const mapArray = (arr, prefix) => arr.map(value => `${prefix}-${value}`)

const reduceMultiple = (obj, prefixes, suffixes) =>
  Object.keys(obj).reduce((arr, key) => {
    if (typeof obj[key] === 'object') {
      return [...arr, ...reduceMultiple(obj[key], prefixes)]
    }

    if (suffixes) {
      const baseClass =
        obj[key].indexOf('-') !== -1 ? obj[key].split('-')[0] : obj[key]
      return [
        ...arr,
        ...prefixes.reduce(
          (classes, prefix) => [
            ...classes,
            ...suffixes
              .map(suffix => (suffix !== '' ? `-${suffix}` : ''))
              .map(suffix => `${prefix}-${baseClass}${suffix}`),
          ],
          [],
        ),
      ]
    }

    return [...arr, ...prefixes.map(prefix => `${prefix}-${obj[key]}`)]
  }, [])

const colorPrefixes = [
  'bg',
  'border',
  'text',
  'hover:bg',
  'hover:border',
  'hover:text',
  'focus:bg',
  'focus:border',
  'focus:text',
]

const colorSuffixes = [
  'darkest',
  'darker',
  'dark',
  '',
  'light',
  'lighter',
  'lightest',
]

export default (projectTheme = {}) => {
  const theme = merge(defaultTheme, projectTheme)

  return [
    theme.radius,
    ...reduceMultiple(theme.spacing, [
      'mt',
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
    ...reduceMultiple(theme.brandColors, colorPrefixes, colorSuffixes),
    ...reduceMultiple(theme.textColors, colorPrefixes),
  ].filter((className, index, self) => self.indexOf(className) === index)
}
