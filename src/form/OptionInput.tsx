import type { TouchableProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import {
  RawTouchable as Touchable,
  RawFlex as Flex,
  RawBox as Box,
  Svg,
} from 'tailwind-react-primitives'
import { withTheme } from '../theme'

import { Label } from './Label'

export interface OptionInputProps<E extends HTMLElement = HTMLLabelElement>
  extends Omit<TouchableProps<E>, 'onChange'>,
    WithTheme {
  name: string
  value: string
  label: string
  hideLabel?: boolean
  defaultChecked?: boolean
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLElement>) => void
  checkbox?: boolean
  id?: string
}

export const RawOptionInput = <E extends HTMLElement = HTMLLabelElement>({
  defaultChecked,
  checked: externalChecked,
  theme,
  name,
  value,
  label,
  hideLabel,
  checkbox,
  id,
  onChange,
  ...rest
}: OptionInputProps<E>) => {
  const [checked, setChecked] = React.useState(
    defaultChecked || externalChecked,
  )
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    if (externalChecked === undefined) return

    setChecked(externalChecked)
  }, [externalChecked])

  const handleChange = React.useCallback(
    (e: React.MouseEvent<E> | React.KeyboardEvent<E>) => {
      if (externalChecked === undefined) {
        setChecked((currentState) => (checkbox ? !currentState : true))
      }

      if (onChange && inputRef.current)
        onChange({
          ...e,
          target: inputRef.current,
        })

      e.preventDefault()
    },
    [],
  )

  return (
    <Touchable<E>
      as={Label}
      flex
      items="center"
      onTouch={handleChange}
      {...rest}
    >
      <Box<HTMLInputElement>
        as="input"
        id={id}
        visuallyHidden
        name={name}
        type={checkbox ? 'checkbox' : 'radio'}
        value={value}
        checked={checked}
        tabIndex={-1}
        innerRef={inputRef}
        onChange={() => {}}
      />
      <Flex
        items="center"
        justify="center"
        inlineBlock
        rounded={checkbox ? theme.radius : 'full'}
        h={4}
        w={4}
        border={[true, checked ? theme.brandColors.primary : false].filter(
          (prop) => !!prop,
        )}
        bg={checkbox && checked ? theme.brandColors.primary : undefined}
        m={{ r: theme.spacing.sm }}
      >
        {checked &&
          (checkbox ? (
            <Svg
              as="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              h={3}
              w={3}
              text="white"
              fill="current"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </Svg>
          ) : (
            <Box
              inlineBlock
              rounded="full"
              h={2}
              w={2}
              bg={theme.brandColors.primary}
            />
          ))}
      </Flex>
      <Box inlineBlock visuallyHidden={hideLabel} leading="tight" font="normal">
        {label}
      </Box>
    </Touchable>
  )
}

export const OptionInput = withTheme<OptionInputProps>(RawOptionInput)
