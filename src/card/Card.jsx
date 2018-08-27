import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Card = ({ is, children, theme, ...rest }) => (
  <BaseComponent is={is} overflow="hidden" rounded={theme.radius} {...rest}>
    {children}
  </BaseComponent>
)

Card.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
}

Card.defaultProps = {
  is: 'div',
  children: undefined,
}

export { Card as component }
export default withTheme(Card)
