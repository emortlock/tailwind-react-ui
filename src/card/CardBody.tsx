import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export type CardBodyProps<E extends HTMLElement = HTMLDivElement> = WithTheme &
  BoxProps<E>

export const RawCardBody = <E extends HTMLElement = HTMLDivElement>({
  theme,
  as = 'div',
  children,
  ...rest
}: CardBodyProps<E>) => (
  <Box<E> as={as} p={theme.spacing.md} {...rest}>
    {children}
  </Box>
)

export const CardBody = withTheme<CardBodyProps>(RawCardBody)
