import type { TailwindProps, TouchableProps } from 'tailwind-react-primitives'
import type { Theme, WithTheme } from '../theme'

import React from 'react'

import {
  getAsArray,
  RawTouchable as Touchable,
} from 'tailwind-react-primitives'
import { withTheme, getColorShade } from '../theme'

export interface ButtonProps<E extends HTMLElement = HTMLButtonElement>
  extends WithTheme,
    TouchableProps<E> {
  buttonStyle?: 'fill' | 'outline' | 'text' | 'link'
  large?: boolean
  small?: boolean
  fullWidth?: boolean
  brand?: keyof Theme['brandColors']
}

export const RawButton = <E extends HTMLElement = HTMLButtonElement>({
  theme,
  as = 'button',
  children,
  color = 'primary',
  type = 'button',
  buttonStyle = 'fill',
  disabled,
  large,
  small,
  fullWidth,
  bg,
  text,
  border,
  brand,
  ...rest
}: ButtonProps<E>) => {
  const props: TouchableProps<E> = {
    border: [true, 'transparent'],
    leading: 'tight',
    p: { x: theme.spacing.md, y: theme.spacing.sm },
    rounded: theme.radius,
  }

  if (large) {
    props.p = { x: theme.spacing.lg, y: theme.spacing.md }
  } else if (small) {
    props.p = { x: theme.spacing.sm, y: theme.spacing.sm / 2 }
  }

  switch (buttonStyle) {
    case 'fill':
      props.bg = brand ? theme.brandColors[brand] : bg
      props.text = brand ? theme.textColors.on[brand] : text
      props['bg-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : bg,
        theme.highlightOffset,
      )
      break
    case 'outline':
      props.border = [
        ...getAsArray(props.border),
        brand ? theme.brandColors[brand] : border,
      ].filter(Boolean) as TailwindProps['border']
      props.text = (brand
        ? theme.brandColors[brand]
        : border) as TailwindProps['text']
      props['bg-hocus'] = (brand
        ? theme.brandColors[brand]
        : border) as TailwindProps['bg']
      props['text-hocus'] = brand ? theme.textColors.on[brand] : text
      break
    case 'text':
      props.text = brand ? theme.brandColors[brand] : text
      props['bg-hocus'] = `${getColorShade(
        brand ? theme.brandColors[brand] : text,
        '100',
      )}`
      break
    case 'link':
      props.rounded = undefined
      props.leading = 'normal'
      props.p = 0
      props.underline = true
      props.text = brand ? theme.brandColors[brand] : text
      props['text-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : text,
        theme.highlightOffset,
      )
      break
    default:
      break
  }

  if (as === 'button') {
    props.type = type
  } else {
    props.role = 'button'
  }

  if (disabled) {
    props.opacity = 50
  }

  if (fullWidth) {
    props.w = 'full'
  }

  return (
    <Touchable<E> as={as} inlineBlock {...props} {...rest}>
      {children}
    </Touchable>
  )
}

export const Button = withTheme<ButtonProps>(RawButton)
