import mergeWith from 'lodash.mergewith'

import { getAsArray } from '../utils'
import tailwindProps from './tailwindProps'

const mergeToArray = ['text', 'font', 'bg', 'border', 'flex', 'rounded']

const mergeProps = (value, userValue, key) => {
  if (mergeToArray.includes(key)) {
    return [...getAsArray(value), ...getAsArray(userValue)].filter(
      (val, i, source) => !!val && source.indexOf(val) === i,
    )
  }
  return undefined
}

export default (style, userProps) => {
  const userStyle = Object.keys(userProps).reduce((styleProps, prop) => {
    if (!tailwindProps.includes(prop)) return styleProps

    return {
      ...styleProps,
      [prop]: userProps[prop],
    }
  }, {})

  return mergeWith(style, userStyle, mergeProps)
}
