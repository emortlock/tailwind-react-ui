import type { FlexProps, BaseProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawFlex as Flex } from 'tailwind-react-primitives'

export type CardFooterProps<
  E extends HTMLElement = HTMLDivElement
> = WithTheme & FlexProps<E>

export const RawCardFooter = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  children,
  ...rest
}: CardFooterProps<E>) => (
  <Flex<E> as={as} reverse items="end" {...rest}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement<BaseProps>(child, {
            rounded: 'none',
          })
        : child,
    )}
  </Flex>
)

export const CardFooter = RawCardFooter
