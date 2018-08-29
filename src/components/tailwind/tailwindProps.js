import PropTypes from 'prop-types'

/* eslint-disable react/destructuring-assignment */
/* TODO:
 *   .truncate
 *   .inline-flex
 *   style & decoration
 *   shape option for rounded?
 *   min/max support for height/width
 */
export const propTypes = {
  absolute: PropTypes.bool,
  align: PropTypes.string,
  appearance: PropTypes.oneOf(['none']),
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array,
  ]),
  break: PropTypes.oneOf(['words', 'normal']),
  content: PropTypes.string,
  flex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.number,
    PropTypes.array,
  ]),
  font: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  h: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.string,
  justify: PropTypes.string,
  leading: PropTypes.string,
  m: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  nm: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
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
  underline: PropTypes.bool,
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
