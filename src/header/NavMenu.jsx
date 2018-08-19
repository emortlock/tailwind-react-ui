import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Transition } from 'react-transition-group'

import { withConfig } from '../config'

import NavItem from './NavItem'

const NavMenu = ({
  config,
  is,
  children,
  className,
  header: { open },
  ...rest
}) => {
  const Component = is

  const transitionStyles = {
    entering: { maxHeight: '0' },
    entered: { maxHeight: '100vh' },
  }

  return (
    <Transition in={open} timeout={0}>
      {state => (
        <Component
          {...rest}
          className={classnames(
            !open && 'overflow-hidden',
            'w-full flex-grow lg:flex lg:items-center lg:w-auto',
            className,
          )}
          style={{
            transition: 'max-height 500ms',
            maxHeight: '0',
            ...transitionStyles[state],
          }}
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
          {React.Children.map(
            children,
            child => child.type !== NavItem && child,
          )}
        </Component>
      )}
    </Transition>
  )
}

NavMenu.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    open: PropTypes.bool.isRequired,
  }).isRequired,
}

NavMenu.defaultProps = {
  is: 'nav',
  children: undefined,
  className: undefined,
}

export { NavMenu as component }
export default withConfig(NavMenu)
