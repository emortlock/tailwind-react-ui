import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'

const getWidthProps = width => {
  if (typeof width === 'object') {
    return Object.keys(width).reduce((props, breakpoint) => {
      const breakpointSuffix = breakpoint === 'def' ? '' : `-${breakpoint}`
      if (width === 'auto') {
        return { ...props, [`flex${breakpointSuffix}`]: 1 }
      }
      return { ...props, [`w${breakpointSuffix}`]: width[breakpoint] }
    }, {})
  }

  return width === 'auto' ? { flex: 1 } : { w: width }
}

const Col = ({ is, children, w, ...rest }) => (
  <Box is={is} {...getWidthProps(w)} {...rest}>
    {children}
  </Box>
)

Col.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  w: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Col.defaultProps = {
  is: 'li',
  children: undefined,
  w: 'full',
}

export default Col
