import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { RawTouchable as Touchable } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface TextAreaProps<E extends HTMLElement = HTMLTextAreaElement>
  extends WithTheme,
    WithField,
    TouchableProps<E> {
  invalid?: boolean
}

export const RawTextArea = <E extends HTMLElement = HTMLTextAreaElement>({
  theme,
  as = 'textarea',
  field = {},
  children,
  id,
  name,
  disabled,
  readOnly,
  invalid,
  ...rest
}: TextAreaProps<E>) => {
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
      disabled={field.disabled || disabled}
      readOnly={readOnly}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy.length ? describedBy.join(' ') : undefined}
      {...rest}
    />
  )
}

export const TextArea = withTheme<TextAreaProps>(RawTextArea)
