import PropTypes from 'prop-types'

import tailwindProps, { propDetails } from './tailwindProps'

const getPropInfo = prop => {
  const propInfo =
    prop.indexOf('-') === -1
      ? propDetails[prop]
      : propDetails[prop.substring(0, prop.indexOf('-'))]

  return propInfo
}

const spacingObjectPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
])
const spacingObjectKeys = ['t', 'r', 'b', 'l', 'x', 'y']

export default tailwindProps.reduce((propTypes, prop) => {
  const propInfo = getPropInfo(prop)

  if (!propInfo) return propTypes

  const validPropTypes = [PropTypes.string]
  if (!propInfo.allowNumber)
    validPropTypes.push(PropTypes.arrayOf(PropTypes.string))
  if (propInfo.allowBool) validPropTypes.push(PropTypes.bool)
  if (propInfo.allowNumber) validPropTypes.push(PropTypes.number)
  if (propInfo.spacing) {
    validPropTypes.push(
      PropTypes.shape(
        spacingObjectKeys.reduce(
          (shape, key) => ({ ...shape, [key]: spacingObjectPropType }),
          {},
        ),
      ),
    )
  }

  return {
    ...propTypes,
    [prop]: PropTypes.oneOfType(validPropTypes),
  }
}, {})
