import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Container = ({
  theme,
  is,
  children,
  className,
  leftAlign,
  padding,
  ...rest
}) => (
  <BaseComponent
    is={is}
    m={!leftAlign ? { x: 'auto' } : undefined}
    p={padding ? { x: theme.spacing.md } : undefined}
    className={classnames('container', className)}
    {...rest}
  >
    {children}
  </BaseComponent>
)

Container.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  leftAlign: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

Container.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  leftAlign: false,
  padding: false,
}

export { Container as component }
export default withTheme(Container)
