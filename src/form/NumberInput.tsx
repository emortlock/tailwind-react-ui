import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { RawTouchable as Touchable } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface NumberInputProps<E extends HTMLElement = HTMLInputElement>
  extends WithTheme,
    WithField,
    TouchableProps<E> {
  name: string
  readOnly?: boolean
  invalid?: boolean
}

export const RawNumberInput = <E extends HTMLElement = HTMLInputElement>({
  theme,
  as = 'input',
  field = {},
  children,
  id,
  name,
  disabled,
  readOnly,
  invalid,
  ...rest
}: NumberInputProps<E>) => {
  const describedBy = [field.errorId, field.helpId].filter((by) => by)
  const isInvalid = field.invalid || invalid

  return (
    <Touchable<E>
      as={as}
      inputMode="numeric"
      pattern="[0-9]*"
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
      disabled={field.disabled || disabled}
      readOnly={readOnly}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy.length ? describedBy.join(' ') : undefined}
      {...rest}
    />
  )
}

export const NumberInput = withTheme<NumberInputProps>(RawNumberInput)
