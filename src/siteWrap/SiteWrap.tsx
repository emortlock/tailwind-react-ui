import type { FlexProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawFlex as Flex, Box } from 'tailwind-react-primitives'
import { Footer, RawFooter } from '../footer/Footer'
import { withTheme } from '../theme'

export type SiteWrapProps<E extends HTMLElement = HTMLDivElement> = WithTheme &
  FlexProps<E>

export const RawSiteWrap = <E extends HTMLElement = HTMLDivElement>({
  as = 'div',
  theme,
  children,
  ...rest
}: SiteWrapProps<E>) => {
  let footer: React.ReactNode | undefined

  React.Children.forEach(children, (child) => {
    if (
      React.isValidElement(child) &&
      (child.type === Footer || child.type === RawFooter)
    ) {
      footer = child
    }
  })

  return (
    <Flex<E>
      as={as}
      col
      minH="screen"
      leading="normal"
      font={theme.text.family.body}
      text={[theme.text.size.body[1], theme.textColors.body]}
      {...rest}
    >
      <Box flex={['auto', 'shrink-0']}>
        {React.Children.map(children, (child) => {
          if (child === footer) return false
          return child
        })}
      </Box>
      <Box flex={['auto', 'shrink-0', 'grow-0']} m={{ t: theme.spacing.lg }}>
        {footer}
      </Box>
    </Flex>
  )
}

export const SiteWrap = withTheme(RawSiteWrap)
