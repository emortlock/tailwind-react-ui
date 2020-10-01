import type { BoxProps } from 'tailwind-react-primitives'
import type { Theme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'

const getWidthProps = (
  width: string | Record<keyof Theme['breakpoints'], string>,
) => {
  if (typeof width === 'object') {
    return Object.keys(width).reduce((props, breakpoint) => {
      const key = breakpoint as keyof Theme['breakpoints']
      const breakpointSuffix = breakpoint === 'def' ? '' : `-${breakpoint}`
      if (width[key] === 'auto') {
        return { ...props, [`flex${breakpointSuffix}`]: 1 }
      }
      return { ...props, [`w${breakpointSuffix}`]: width[key] }
    }, {})
  }

  return width === 'auto' ? { flex: 1 } : { w: width }
}

export type ColProps<E extends HTMLElement = HTMLLIElement> = BoxProps<E>

export const RawCol = <E extends HTMLElement = HTMLLIElement>({
  as = 'li',
  children,
  w = 'full',
  ...rest
}: ColProps<E>) => (
  <Box as={as} {...getWidthProps(`${w}`)} {...rest}>
    {children}
  </Box>
)

export const Col = RawCol
