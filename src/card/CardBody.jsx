import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const CardBody = ({ theme, is, children, ...rest }) => (
  <BaseComponent p={theme.spacing.md} {...rest}>
    {children}
  </BaseComponent>
)

CardBody.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

CardBody.defaultProps = {
  is: 'div',
  children: undefined,
}

export { CardBody as component }
export default withTheme(CardBody)
