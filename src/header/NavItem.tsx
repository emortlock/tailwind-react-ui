import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithHeader } from './Header'

import React from 'react'

import { RawTouchable as Touchable } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface NavItemProps<E extends HTMLElement = HTMLAnchorElement>
  extends TouchableProps<E>,
    WithTheme,
    WithHeader {
  active?: boolean
}

export const RawNavItem = <E extends HTMLElement = HTMLAnchorElement>({
  theme,
  as,
  children,
  header: { style, screen } = { style: {}, screen: 'lg' },
  active,
  ...rest
}: NavItemProps<E>) => {
  const textColor = style?.text || theme.textColors.on.primary
  const bgColor = style?.bg || theme.brandColors.primary

  const responsive = screen
    ? {
        [`m-${screen}`]: { t: 0, r: theme.spacing.sm },
      }
    : {}

  return (
    <Touchable<E>
      as={as}
      focusable
      text={!active ? style?.text : style?.bg}
      bg={active ? textColor : undefined}
      bg-hocus={textColor}
      text-hocus={bgColor}
      p={{ x: theme.spacing.md, y: theme.spacing.sm }}
      m={{ t: theme.spacing.sm }}
      rounded={theme.radius}
      block
      aria-current={active ? 'page' : undefined}
      {...responsive}
      {...rest}
    >
      {children}
    </Touchable>
  )
}

export const NavItem = withTheme(RawNavItem)
