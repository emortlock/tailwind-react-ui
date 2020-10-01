import type { ParagraphProps } from './Paragraph'
import type { WithTheme } from '../theme'

import React from 'react'

import { withTheme, getColorShade } from '../theme'

import { RawParagraph as Paragraph } from './Paragraph'

export interface BrandTextProps<E extends HTMLElement = HTMLParagraphElement>
  extends WithTheme,
    ParagraphProps<E> {
  type: 'danger' | 'info' | 'warning'
  textOnly?: boolean
}

export const RawBrandText = <E extends HTMLElement = HTMLParagraphElement>({
  theme,
  textOnly,
  type,
  size,
  ...rest
}: BrandTextProps<E>) => {
  const alertProps = !textOnly
    ? {
        bg: getColorShade(theme.brandColors[type], '100'),
        border: [`l-${theme.accentSize}`, theme.brandColors[type]],
        p: { x: theme.spacing.md, y: theme.spacing.sm },
        text: theme.textColors.body,
        rounded: 'r',
      }
    : {}

  return (
    <Paragraph<E>
      {...rest}
      theme={theme}
      size={size}
      rounded={theme.radius}
      text={getColorShade(theme.brandColors[type], 1)}
      m={{ b: theme.spacing.sm }}
      {...alertProps}
    />
  )
}

export const BrandText = withTheme<BrandTextProps>(RawBrandText)
