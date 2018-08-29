import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { withTransition } from '../utils'
import { VisuallyHidden } from '../visuallyHidden'

import NavItem from './NavItem'

const NavMenu = ({ theme, transition, is, children, header, ...rest }) => {
  const transitionStyles = {
    entering: { maxHeight: '0' },
    entered: { maxHeight: '100vh' },
  }
  const headingId = `${header.id}-menu`

  return (
    <BaseComponent
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
      id={`${header.id}-nav`}
      aria-labelledby={headingId}
      aria-expanded={header.collapsable ? header.open : undefined}
      role="navigation"
      {...rest}
    >
      <VisuallyHidden is="h2" id={headingId}>
        Site menu
      </VisuallyHidden>
      <ul
        className={classnames(
          'list-reset flex-grow lg:flex',
          `mb-${theme.spacing.sm} lg:mb-0`,
        )}
        role="menu"
      >
        {React.Children.map(
          children,
          child =>
            child.type === NavItem && (
              <li role="none">
                {React.cloneElement(child, { header, role: 'menuitem' })}
              </li>
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
