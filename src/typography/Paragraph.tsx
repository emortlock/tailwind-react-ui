import type { TextProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'
import { RawText as Text, getAsArray } from 'tailwind-react-primitives'

import { withTheme } from '../theme'

export interface ParagraphProps<E extends HTMLElement = HTMLParagraphElement>
  extends WithTheme,
    Omit<TextProps<E>, 'size'> {
  lead?: boolean
  size?: number
}

export const RawParagraph = <E extends HTMLElement = HTMLParagraphElement>({
  theme,
  children,
  as = 'p',
  size,
  lead,
  text,
  ...rest
}: ParagraphProps<E>) => (
  <Text<E>
    as={as}
    text={
      [
        (size || lead) &&
          theme.text.size.body[
            (lead ? theme.text.size.body.length : size) ?? 2 - 1
          ],
        ...getAsArray(text),
      ].filter(Boolean) as string[]
    }
    m={{ b: theme.spacing.md }}
    {...rest}
  >
    {children}
  </Text>
)

export const Paragraph = withTheme<ParagraphProps>(RawParagraph)
