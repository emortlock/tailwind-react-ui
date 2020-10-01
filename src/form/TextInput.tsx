import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { RawTouchable as Touchable } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface TextInputProps<E extends HTMLElement = HTMLInputElement>
  extends WithTheme,
    WithField,
    TouchableProps<E> {
  invalid?: boolean
}

export const RawTextInput = <E extends HTMLElement = HTMLInputElement>({
  theme,
  as,
  field = {},
  children,
  id,
  name,
  type = 'text',
  disabled,
  readOnly,
  invalid,
  ...rest
}: TextInputProps<E>) => {
  const describedBy = [field.errorId, field.helpId].filter((by) => by)
  const isInvalid = field.invalid || invalid

  return (
    <Touchable<E>
      as={as}
      appearance="none"
      bg="white"
      rounded={theme.radius}
      text={theme.textColors.body}
      p={{ x: theme.spacing.md, y: theme.spacing.sm }}
      m={{ b: theme.spacing.sm }}
      border={!isInvalid ? true : [true, theme.brandColors.danger]}
      w="full"
      leading="tight"
      id={field.inputId || id || name}
      name={name}
      type={type}
      disabled={field.disabled || disabled}
      readOnly={readOnly}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy.length ? describedBy.join(' ') : undefined}
      {...rest}
    />
  )
}

export const TextInput = withTheme<TextInputProps>(RawTextInput)
