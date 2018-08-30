import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'
import { withTheme } from '../theme'
import { Container } from '../container'

const Footer = ({ theme, is, children, ...rest }) => (
  <BaseComponent
    is={is}
    role="contentinfo"
    p={{ t: theme.spacing.lg, b: theme.spacing.xl }}
    bg={theme.brandColors.secondary}
    text={theme.textColors.on.secondary}
    {...rest}
  >
    <Container padding>{children}</Container>
  </BaseComponent>
)

Footer.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

Footer.defaultProps = {
  is: 'footer',
  children: undefined,
}

export { Footer as component }
export default withTheme(Footer)
