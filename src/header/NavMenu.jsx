import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'
import { withTransition } from '../utils'

import NavItem from './NavItem'

const NavMenu = ({
  config,
  transition,
  is,
  children,
  className,
  header: { collapsable },
  ...rest
}) => {
  const Component = is

  const transitionStyles = {
    entering: { maxHeight: '0' },
    entered: { maxHeight: '100vh' },
  }

  return (
    <Component
      {...rest}
      className={classnames(
        'overflow-hidden',
        'w-full flex-grow lg:flex lg:items-center lg:w-auto',
        !collapsable && 'h-12',
        className,
      )}
      style={
        collapsable
          ? {
              transition: 'max-height 500ms',
              maxHeight: '0',
              ...transitionStyles[transition],
            }
          : undefined
      }
      aria-label="main navigation"
    >
      <ul
        className={classnames(
          'list-reset flex-grow lg:flex',
          `mb-${config.spacing.sm} lg:mb-0`,
        )}
      >
        {React.Children.map(
          children,
          child => child.type === NavItem && <li>{child}</li>,
        )}
      </ul>
      {React.Children.map(children, child => child.type !== NavItem && child)}
    </Component>
  )
}

NavMenu.propTypes = {
  config: PropTypes.shape({}).isRequired,
  transition: PropTypes.string.isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    collapsable: PropTypes.bool.isRequired,
  }).isRequired,
}

NavMenu.defaultProps = {
  is: 'nav',
  children: undefined,
  className: undefined,
}

export { NavMenu as component }
export default withConfig(withTransition(NavMenu, { inState: 'header.open' }))
