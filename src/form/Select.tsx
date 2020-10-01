import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { Box, RawTouchable as Touchable } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

// https://material.io/tools/icons/?style=baseline
const ExpandMore: React.FC<Omit<
  React.SVGProps<SVGSVGElement>,
  'aria-relevant' // TODO: Types of property 'aria-relevant' are incompatible. Why?
>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export interface SelectProps<E extends HTMLElement = HTMLSelectElement>
  extends WithTheme,
    WithField,
    TouchableProps<E> {
  invalid?: boolean
  options: { value: string; label: React.ReactNode }[]
  icon?: React.ElementType
}

export const RawSelect = <E extends HTMLElement = HTMLSelectElement>({
  theme,
  as = 'select',
  field = {},
  children,
  id,
  name,
  disabled,
  readOnly,
  invalid,
  placeholder = 'Please select',
  options = [],
  icon = ExpandMore,
  ...rest
}: SelectProps<E>) => {
  const describedBy = [field.errorId, field.helpId].filter((by) => by)
  const isInvalid = field.invalid || invalid

  return (
    <Box relative m={{ b: theme.spacing.sm }}>
      <Touchable<E>
        as={as}
        appearance="none"
        bg="white"
        rounded={theme.radius}
        text={theme.textColors.body}
        p={{ l: theme.spacing.md, r: theme.spacing.lg, y: theme.spacing.sm }}
        border={!isInvalid ? true : [true, theme.brandColors.danger]}
        w="full"
        leading="tight"
        id={field.inputId || id || name}
        name={name}
        disabled={field.disabled || disabled}
        readOnly={readOnly}
        aria-invalid={isInvalid || undefined}
        aria-describedby={
          describedBy.length ? describedBy.join(' ') : undefined
        }
        {...rest}
      >
        {!!placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={`${name}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </Touchable>
      <Box
        absolute
        inset="y-0"
        right={0}
        flex
        items="center"
        p={{ x: theme.spacing.sm }}
        pointerEvents="none"
      >
        <Box as={icon} h={6} w={6} />
      </Box>
    </Box>
  )
}

export const Select = withTheme<SelectProps>(RawSelect)
