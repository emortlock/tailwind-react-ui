import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { Base } from '../primitives'

const Container = ({
  theme,
  is,
  children,
  className,
  leftAlign,
  padding,
  ...rest
}) => (
  <Base
    is={is}
    m={!leftAlign ? { x: 'auto' } : undefined}
    p={padding ? { x: theme.spacing.md } : undefined}
    className={classnames('container', className)}
    {...rest}
  >
    {children}
  </Base>
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
