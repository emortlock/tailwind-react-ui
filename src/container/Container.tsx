import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface ContainerProps<E extends HTMLElement = HTMLDivElement>
  extends WithTheme,
    BoxProps<E> {
  leftAlign?: boolean
  padding?: boolean
}

export const RawContainer = <E extends HTMLElement = HTMLDivElement>({
  theme,
  as,
  children,
  leftAlign,
  padding,
  ...rest
}: ContainerProps<E>) => (
  <Box<E>
    as={as}
    m={!leftAlign ? { x: 'auto' } : undefined}
    p={padding ? { x: theme.spacing.md } : undefined}
    container
    {...rest}
  >
    {children}
  </Box>
)

export const Container = withTheme<ContainerProps>(RawContainer)
