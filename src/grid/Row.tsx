import type { FlexProps } from 'tailwind-react-primitives'
import type { Theme, WithTheme } from '../theme'

import React from 'react'

import { RawFlex as Flex } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface RowProps<E extends HTMLElement = HTMLUListElement>
  extends WithTheme,
    FlexProps<E> {
  nowrap?: boolean
  gutter?: boolean | keyof Theme['spacing']
}

export const RawRow = <E extends HTMLElement = HTMLUListElement>({
  as = 'ul',
  children,
  nowrap,
  gutter,
  theme,
  ...rest
}: RowProps<E>) => {
  const gutterSpacing =
    typeof gutter === 'string'
      ? theme.spacing[gutter]
      : gutter && theme.spacing.md

  return (
    <Flex
      as={as}
      wrap={!nowrap}
      nm={
        gutter
          ? {
              l: gutterSpacing || undefined,
              b: !nowrap ? gutterSpacing || undefined : undefined,
            }
          : undefined
      }
      {...rest}
    >
      {gutter
        ? React.Children.map(children, (child) =>
            React.isValidElement(child)
              ? React.cloneElement(child, {
                  p: { l: gutterSpacing },
                  m: { b: gutterSpacing },
                })
              : child,
          )
        : children}
    </Flex>
  )
}

export const Row = withTheme(RawRow)
