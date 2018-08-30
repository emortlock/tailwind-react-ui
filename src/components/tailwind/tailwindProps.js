/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types'

export const propTypes = {
  absolute: PropTypes.bool,
  align: PropTypes.string,
  appearance: PropTypes.oneOf(['none']),
  block: PropTypes.bool,
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  break: PropTypes.oneOf(['words', 'normal']),
  capitalize: PropTypes.bool,
  content: PropTypes.string,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
  ]),
  font: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  hidden: PropTypes.bool,
  inlineBlock: PropTypes.bool,
  inlineFlex: PropTypes.bool,
  italic: PropTypes.bool,
  items: PropTypes.string,
  justify: PropTypes.string,
  leading: PropTypes.string,
  lineThrough: PropTypes.bool,
  lowercase: PropTypes.bool,
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  maxH: PropTypes.string,
  maxW: PropTypes.string,
  nm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  normalCase: PropTypes.bool,
  noUnderline: PropTypes.bool,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  outline: PropTypes.oneOf(['none']),
  overflow: PropTypes.string,
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  pin: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  resize: PropTypes.oneOfType([
    PropTypes.oneOf(['none', 'y', 'x']),
    PropTypes.bool,
  ]),
  roman: PropTypes.bool,
  rounded: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  select: PropTypes.oneOf(['none', 'text']),
  self: PropTypes.oneOfType([PropTypes.string]),
  shadow: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  tracking: PropTypes.string,
  truncate: PropTypes.bool,
  underline: PropTypes.bool,
  uppercase: PropTypes.bool,
  visuallyHidden: PropTypes.bool,
  visuallyHiddenFocusable: PropTypes.bool,
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  whitespace: PropTypes.string,
}

export const variants = ['hover', 'focus', 'hocus', 'sm', 'md', 'lg', 'xl']

export default [
  ...Object.keys(propTypes),
  ...variants.reduce(
    (variantProps, variant) => [
      ...variantProps,
      ...Object.keys(propTypes).map(prop => `${prop}-${variant}`),
    ],
    [],
  ),
]
