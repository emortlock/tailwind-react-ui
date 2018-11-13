import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Box } from '../primitives'

const Card = ({ is, children, theme, surface, ...rest }) => (
  <Box
    is={is}
    overflow="hidden"
    rounded={theme.radius}
    bg={theme.surfaceColors[surface] || theme.brandColors[surface]}
    text={surface !== 'default' ? theme.textColors.on[surface] : undefined}
    {...rest}
  >
    {children}
  </Box>
)

Card.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  surface: PropTypes.string,
}

Card.defaultProps = {
  is: 'section',
  children: undefined,
  surface: 'default',
}

export { Card as component }
export default withTheme(Card)
