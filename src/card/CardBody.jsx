import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const CardBody = ({ theme, is, children, ...rest }) => (
  <BaseComponent {...rest} p={theme.spacing.md}>
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

export default withTheme(CardBody)
