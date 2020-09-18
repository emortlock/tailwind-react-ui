import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { ListProps } from '../list'
import type { WithTransition, TransitionStatus } from '../utils'
import type { WithHeader } from './Header'
import type { NavItemProps } from './NavItem'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'
import { Title } from '../typography'
import { withTransition } from '../utils'
import { List } from '../list'

import { NavItem, RawNavItem } from './NavItem'

const isNavItem = (
  child: React.ReactNode,
): child is React.FunctionComponentElement<NavItemProps> =>
  React.isValidElement(child) &&
  (child.type === NavItem || child.type === RawNavItem)

const NavItemWrapper: React.FC<Omit<
  React.HTMLProps<HTMLLIElement>,
  'aria-relevant' // TODO: Types of property 'aria-relevant' are incompatible. Why?
>> = (props) => <li role="none" {...props} />

export interface NavMenuProps<E extends HTMLElement = HTMLDivElement>
  extends Omit<BoxProps<E>, 'list'>,
    WithTheme,
    WithHeader,
    WithTransition {
  list?: ListProps
}

export const RawNavMenu = <E extends HTMLElement = HTMLDivElement>({
  theme,
  transition = 'entering',
  as = 'nav',
  children,
  header = { id: 'header', screen: 'lg' },
  list,
  ...rest
}: NavMenuProps<E>) => {
  const transitionStyles: Record<TransitionStatus, React.CSSProperties> = {
    entering: { maxHeight: '0', position: 'absolute' },
    entered: { maxHeight: '100vh' },
    exiting: {},
    exited: {},
    unmounted: {},
  }
  const headingId = `${header.id}-menu`

  const responsive = {
    nav: header.screen
      ? {
          [`w-${header.screen}`]: 'auto',
          [`flex-${header.screen}`]: true,
        }
      : {},
    menu: header.screen
      ? {
          [`flex-${header.screen}`]: true,
          [`m-${header.screen}`]: { b: 0 },
        }
      : {},
  }

  return (
    <Box<E>
      as={as}
      overflow="hidden"
      w="full"
      flex="grow"
      items="center"
      h={!header.isCollapsable ? 12 : undefined}
      style={
        header.isCollapsable
          ? {
              transition: 'max-height 500ms',
              maxHeight: '0',
              ...transitionStyles[transition],
            }
          : undefined
      }
      id={`${header.id}-nav`}
      aria-labelledby={headingId}
      aria-expanded={header.isCollapsable ? header.isOpen : undefined}
      role="navigation"
      {...responsive.nav}
      {...rest}
    >
      <Title level={2} id={headingId} visuallyHidden>
        Site menu
      </Title>
      <List
        flex="grow"
        role="menu"
        listItemAs={NavItemWrapper}
        {...responsive.menu}
        {...list}
      >
        {React.Children.map(
          children,
          (child) =>
            isNavItem(child) &&
            React.cloneElement(child, {
              header,
              role: 'menuitem',
            }),
        )}
      </List>
      {React.Children.map(children, (child) => !isNavItem(child) && child)}
    </Box>
  )
}

export const NavMenu = withTheme(
  withTransition(RawNavMenu, { inState: 'header.open' }),
)
