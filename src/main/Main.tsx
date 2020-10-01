import type { BoxProps } from 'tailwind-react-primitives'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'

export type MainProps<E extends HTMLElement = HTMLDivElement> = BoxProps<E>

export const RawMain = ({
  children,
  as = 'main',
  id = 'main',
  ...rest
}: MainProps) => (
  <Box as={as} id={id} role="main" {...rest}>
    {children}
  </Box>
)

export const Main = RawMain
