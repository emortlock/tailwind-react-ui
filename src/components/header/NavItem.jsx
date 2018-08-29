import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const NavItem = ({
  theme,
  is,
  children,
  className,
  header: { style },
  active,
  ...rest
}) => (
  <BaseComponent
    is={is}
    focusable
    text={!active ? style.text : style.bg}
    bg={active ? style.text : undefined}
    bg-hocus={style.text}
    text-hocus={style.bg}
    p={{ x: theme.spacing.md, y: theme.spacing.sm }}
    m={{ t: theme.spacing.sm }}
    m-lg={{ t: 0, r: theme.spacing.sm }}
    rounded={theme.radius}
    className={classnames('block no-underline', className)}
    aria-current={active ? 'page' : undefined}
    {...rest}
  >
    {children}
  </BaseComponent>
)

NavItem.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    style: PropTypes.object.isRequired,
  }),
  active: PropTypes.bool,
}

NavItem.defaultProps = {
  is: 'a',
  children: undefined,
  className: undefined,
  header: {},
  active: false,
}

export { NavItem as component }
export default withTheme(NavItem)
