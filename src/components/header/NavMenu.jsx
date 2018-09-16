import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { Box } from '../primitives'
import { Title } from '../typography'
import { withTransition } from '../utils'
import { List } from '../list'

import NavItem from './NavItem'

const NavItemWrapper = props => <li role="none" {...props} />

const NavMenu = ({
  theme,
  transition,
  is,
  children,
  header,
  list,
  ...rest
}) => {
  const transitionStyles = {
    entering: { maxHeight: '0', position: 'absolute' },
    entered: { maxHeight: '100vh' },
  }
  const headingId = `${header.id}-menu`

  const responsive = header.screen
    ? {
        [`w-${header.screen}`]: 'auto',
        [`flex-${header.screen}`]: true,
      }
    : {}

  return (
    <Box
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
      <List
        reset
        className={classnames(
          'flex-grow',
          header.screen && `${header.screen}:flex ${header.screen}:mb-0`,
        )}
        role="menu"
        listItemIs={NavItemWrapper}
        {...list}
      >
        {React.Children.map(
          children,
          child =>
            child.type === NavItem &&
            React.cloneElement(child, { header, role: 'menuitem' }),
        )}
      </List>
      {React.Children.map(children, child => child.type !== NavItem && child)}
    </Box>
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
    screen: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
  list: PropTypes.shape({}),
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
  list: {},
}

export { NavMenu as component }
export default withTheme(withTransition(NavMenu, { inState: 'header.open' }))
