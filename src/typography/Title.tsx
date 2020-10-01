import type { TextProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawText as Text } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface TitleProps<E extends HTMLElement = HTMLHeadingElement>
  extends WithTheme,
    Omit<TextProps<E>, 'size'> {
  subtitle?: boolean
  flush?: boolean
  level?: number
  size?: number
}

export const RawTitle = <E extends HTMLElement = HTMLHeadingElement>({
  theme,
  children,
  as = 'h1',
  size = 4,
  subtitle,
  flush,
  level = 1,
  ...rest
}: TitleProps<E>) => {
  const hLevel = level || Math.max(7 - size, 1)
  const element: TitleProps['as'] = as || `h${hLevel}`

  let ariaProps: TextProps<E> = {}

  if (!subtitle && typeof element === 'string' && !/h[1-6]/i.test(element)) {
    ariaProps = {
      'role': 'heading',
      'aria-level': hLevel,
    }
  }

  return (
    <Text<E>
      as={element}
      {...ariaProps}
      leading="tight"
      font={[
        theme.text.family[subtitle ? 'subtitle' : 'title'],
        subtitle ? 'medium' : 'bold',
      ]}
      text={[
        theme.text.size.title[size - 1],
        subtitle ? theme.textColors.body : theme.textColors.emphasas,
      ]}
      m={!flush ? { b: theme.spacing.md } : undefined}
      {...rest}
    >
      {children}
    </Text>
  )
}

export const Title = withTheme<TitleProps>(RawTitle)
