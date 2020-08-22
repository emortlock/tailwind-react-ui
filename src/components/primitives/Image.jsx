import React from 'react'
import PropTypes from 'prop-types'

import Base from './Base'
import Box from './Box'

import { propTypes } from '../tailwind'

const Image = ({ is, children, aspectRatio, bg, w, text, ...rest }) => (
  <Box relative w={w} text={text}>
    <Box bg={bg} style={{ paddingBottom: `${100 / aspectRatio}%` }} />
    <Base is={is} absolute inset={0} w="full" {...rest} />
    {children && (
      <Box absolute inset={0} flex items="end">
        {children}
      </Box>
    )}
  </Box>
)

Image.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  aspectRatio: PropTypes.number,
  bg: propTypes.bg,
  w: propTypes.w,
  text: propTypes.text,
}

Image.defaultProps = {
  is: 'img',
  aspectRatio: 1,
  children: undefined,
  bg: 'gray-light',
  w: 'full',
  text: undefined,
}

export default Image
