import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme, Theme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface CardProps<E extends HTMLElement = HTMLDivElement>
  extends WithTheme,
    BoxProps<E> {
  surface?: keyof Theme['surfaceColors'] | keyof Theme['brandColors']
}

export const RawCard = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  theme,
  surface = 'default',
  ...rest
}: CardProps<E>) => (
  <Box<E>
    as={as}
    overflow="hidden"
    rounded={theme.radius}
    bg={
      theme.surfaceColors[surface as keyof Theme['surfaceColors']] ||
      theme.brandColors[surface as keyof Theme['brandColors']]
    }
    text={
      surface !== 'default'
        ? theme.textColors.on[surface as keyof Theme['textColors']['on']]
        : undefined
    }
    {...rest}
  >
    {children}
  </Box>
)

export const Card = withTheme<CardProps>(RawCard)
