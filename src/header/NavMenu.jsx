import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { withTransition } from '../utils'

import NavItem from './NavItem'

const NavMenu = ({ theme, transition, is, children, header, ...rest }) => {
  const transitionStyles = {
    entering: { maxHeight: '0' },
    entered: { maxHeight: '100vh' },
  }

  return (
    <BaseComponent
      {...rest}
      is={is}
      overflow="hidden"
      w="full"
      w-lg="auto"
      flex="grow"
      flex-lg
      items="center"
      h={!header.collapsable ? 12 : undefined}
      style={
        header.collapsable
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
          `mb-${theme.spacing.sm} lg:mb-0`,
        )}
      >
        {React.Children.map(
          children,
          child =>
            child.type === NavItem && (
              <li>{React.cloneElement(child, { header })}</li>
            ),
        )}
      </ul>
      {React.Children.map(children, child => child.type !== NavItem && child)}
    </BaseComponent>
  )
}

NavMenu.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  transition: PropTypes.string.isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    open: PropTypes.bool.isRequired,
    collapsable: PropTypes.bool.isRequired,
  }).isRequired,
}

NavMenu.defaultProps = {
  is: 'nav',
  children: undefined,
}

export { NavMenu as component }
export default withTheme(withTransition(NavMenu, { inState: 'header.open' }))
