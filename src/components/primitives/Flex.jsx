import React from 'react'
import PropTypes from 'prop-types'

import Box from './Box'

const Flex = ({
  is,
  children,
  inline,
  inlineFlex,
  col,
  reverse,
  wrap,
  wrapReverse,
  ...rest
}) => {
  const el = is === 'div' && (inline || inlineFlex) ? 'span' : is

  const flex = [true]

  if (col) {
    flex.push(reverse ? 'col-reverse' : 'col')
  } else if (reverse) {
    flex.push('row-reverse')
  }

  if (wrap || wrapReverse) {
    flex.push(wrap ? 'wrap' : 'wrap-reverse')
  }

  return (
    <Box is={el} flex={flex} inlineFlex={inline || inlineFlex} {...rest}>
      {children}
    </Box>
  )
}

Flex.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  inline: PropTypes.bool,
  inlineFlex: PropTypes.bool,
  col: PropTypes.bool,
  reverse: PropTypes.bool,
  wrap: PropTypes.bool,
  wrapReverse: PropTypes.bool,
}

Flex.defaultProps = {
  is: 'div',
  children: undefined,
  inline: false,
  inlineFlex: false,
  col: false,
  reverse: false,
  wrap: false,
  wrapReverse: false,
}

export default Flex
