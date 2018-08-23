import PropTypes from 'prop-types'

import tailwindProps, { propDetails } from './tailwindProps'

const isBoolValid = prop => {
  const propInfo =
    prop.indexOf('-') === -1
      ? propDetails[prop]
      : propDetails[prop.substring(0, prop.indexOf('-'))]

  return propInfo && propInfo.allowBool
}

const isNumberValid = prop => {
  const propInfo =
    prop.indexOf('-') === -1
      ? propDetails[prop]
      : propDetails[prop.substring(0, prop.indexOf('-'))]

  return propInfo && propInfo.allowNumber
}

export default tailwindProps.reduce((propTypes, prop) => {
  const allowBool = isBoolValid(prop)
  const allowNumber = isNumberValid(prop)

  const validPropTypes = [PropTypes.string]
  if (!allowNumber) validPropTypes.push(PropTypes.arrayOf(PropTypes.string))
  if (allowBool) validPropTypes.push(PropTypes.bool)
  if (allowNumber) validPropTypes.push(PropTypes.number)

  return {
    ...propTypes,
    [prop]: PropTypes.oneOfType(validPropTypes),
  }
}, {})
