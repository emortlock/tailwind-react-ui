import type { ButtonProps } from '../button'
import type { WithTheme } from '../theme'

import React from 'react'

import { Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'
import { RawButton as Button } from '../button'

export type SkipLinkProps<
  E extends HTMLElement = HTMLAnchorElement
> = ButtonProps<E> & WithTheme

export const RawSkipLink = <E extends HTMLElement = HTMLAnchorElement>({
  children = 'Skip to main content',
  href = '#main',
  ...rest
}: SkipLinkProps<E>) => (
  <Box visuallyHiddenFocusable>
    <Button<E>
      as="a"
      buttonStyle="fill"
      bg="white"
      text="black"
      absolute
      rounded="none"
      href={href}
      {...rest}
    >
      {children}
    </Button>
  </Box>
)

export const SkipLink = withTheme(RawSkipLink)
