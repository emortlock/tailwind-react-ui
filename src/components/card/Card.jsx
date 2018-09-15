import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Base } from '../primitives'

const Card = ({ is, children, theme, ...rest }) => (
  <Base is={is} overflow="hidden" rounded={theme.radius} {...rest}>
    {children}
  </Base>
)

Card.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
}

Card.defaultProps = {
  is: 'section',
  children: undefined,
}

export { Card as component }
export default withTheme(Card)
