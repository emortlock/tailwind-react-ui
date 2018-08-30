/* eslint-disable react/destructuring-assignment */
import paramCase from 'param-case'

import tailwindPropToClassName from './tailwindPropToClassName'
import tailwindProps, { variants as tailwindVariants } from './tailwindProps'

const hasUpperCase = str => str.toLowerCase() !== str

export default (props, { ignore = [] } = {}) =>
  !!props &&
  Object.keys(props).reduce((twClasses, key) => {
    if (ignore.includes(key) || !props[key]) return twClasses

    let type = key.indexOf('-') > 0 ? key.substring(0, key.indexOf('-')) : key
    const variant =
      key.indexOf('-') > 0 ? key.substring(key.indexOf('-') + 1) : key

    if (!tailwindProps.includes(type)) return twClasses

    if (hasUpperCase(type)) {
      type = paramCase(type)
    }

    if (tailwindVariants.includes(variant)) {
      if (variant === 'hocus') {
        return [
          ...twClasses,
          tailwindPropToClassName(`hover:${type}`, props[key]),
          tailwindPropToClassName(`focus:${type}`, props[key]),
        ]
      }

      return [
        ...twClasses,
        tailwindPropToClassName(`${variant}:${type}`, props[key]),
      ]
    }

    return [...twClasses, tailwindPropToClassName(type, props[key])]
  }, [])
