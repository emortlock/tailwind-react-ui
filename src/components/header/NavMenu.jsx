import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { Title } from '../typography'
import { withTransition } from '../utils'

import NavItem from './NavItem'

const NavMenu = ({ theme, transition, is, children, header, ...rest }) => {
  const transitionStyles = {
    entering: { maxHeight: '0' },
    entered: { maxHeight: '100vh' },
  }
  const headingId = `${header.id}-menu`

  const responsive = {
    [`w-${header.screen}`]: 'auto',
    [`flex-${header.screen}`]: true,
  }

  return (
    <BaseComponent
      is={is}
      overflow="hidden"
      w="full"
      flex="grow"
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
      {...responsive}
      {...rest}
    >
      <Title level={2} id={headingId} visuallyHidden>
        Site menu
      </Title>
      <ul
        className={classnames(
          'list-reset flex-grow',
          `mb-${theme.spacing.sm}`,
          `${header.screen}:flex ${header.screen}:mb-0`,
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
  transition: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    open: PropTypes.bool,
    collapsable: PropTypes.bool,
    screen: PropTypes.string,
  }),
}

NavMenu.defaultProps = {
  is: 'nav',
  children: undefined,
  header: {
    open: false,
    collapsable: false,
    screen: 'lg',
  },
  transition: 'entering',
}

export { NavMenu as component }
export default withTheme(withTransition(NavMenu, { inState: 'header.open' }))
