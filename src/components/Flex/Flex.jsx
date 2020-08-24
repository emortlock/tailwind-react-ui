import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../Box'

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

  return (
    <Box
      is={el}
      flex={[
        true,
        col && !reverse && 'col',
        reverse && (col ? 'col-reverse' : 'row-reverse'),
        wrap && 'wrap',
        wrapReverse && 'wrap-reverse',
      ].filter(Boolean)}
      inlineFlex={inline || inlineFlex}
      {...rest}
    >
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
