import type { TextProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { RawText as Text } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface LabelProps<E extends HTMLElement = HTMLLabelElement>
  extends WithTheme,
    WithField,
    TextProps<E> {
  hasHelp?: boolean
  hasError?: boolean
  disabled?: boolean
  optionList?: boolean
  htmlFor?: string
}

export const RawLabel = <E extends HTMLElement = HTMLLabelElement>({
  theme,
  as = 'label',
  id,
  field: {
    labelId = undefined,
    inputId = undefined,
    disabled = undefined,
  } = {},
  children,
  htmlFor,
  optionList,
  ...rest
}: LabelProps<E>) => (
  <Text<E>
    as={as}
    id={labelId || id}
    inlineBlock
    htmlFor={!optionList ? inputId || htmlFor : undefined}
    m={{ b: theme.spacing.sm }}
    opacity={disabled ? 50 : undefined}
    weight="bold"
    {...rest}
  >
    {children}
  </Text>
)

export const Label = withTheme<LabelProps>(RawLabel)
