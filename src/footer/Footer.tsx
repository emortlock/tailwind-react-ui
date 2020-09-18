import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'
import { Container } from '../container'

export type FooterProps<E extends HTMLElement = HTMLDivElement> = WithTheme &
  BoxProps<E>

export const RawFooter = <E extends HTMLElement = HTMLDivElement>({
  theme,
  as = 'footer',
  children,
  ...rest
}: FooterProps<E>) => (
  <Box<E>
    as={as}
    role="contentinfo"
    p={{ t: theme.spacing.lg, b: theme.spacing.xl }}
    bg={theme.brandColors.secondary}
    text={theme.textColors.on.secondary}
    {...rest}
  >
    <Container padding>{children}</Container>
  </Box>
)

RawFooter.displayName = 'Footer'

export const Footer = withTheme<FooterProps>(RawFooter)
