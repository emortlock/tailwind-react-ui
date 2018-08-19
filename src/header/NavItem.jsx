import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const NavItem = ({ config, is, children, className, ...rest }) => {
  const Component = is

  console.log(Component)

  return (
    <Component
      {...rest}
      className={classnames(
        `text-${config.textColors.on.primary}`,
        `hover:bg-${config.textColors.on.primary} hover:text-${
          config.baseColors.primary
        }`,
        `p-${config.spacing.sm}`,
        config.radius,
        'block lg:inline-block mt-2 lg:mt-0 no-underline',
        className,
      )}
    >
      {children}
    </Component>
  )
}

NavItem.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

NavItem.defaultProps = {
  is: 'a',
  children: undefined,
  className: undefined,
}

export { NavItem as component }
export default withConfig(NavItem)
