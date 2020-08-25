import type { ReactParagraphProps, HTMLParagraphProps } from '../../types'
import type { BaseProps } from '../Base'

import React from 'react'

import { Base } from '../Base'
import { getAsArray } from '../../utils'

export interface TextProps extends BaseProps, ReactParagraphProps {
  bold?: boolean
  size?: string
  color?: string
  weight?: string
}

const Text = ({
  as = 'p',
  children,
  bold = false,
  font,
  text,
  color,
  size,
  weight,
  leading = 'normal',
  ...rest
}: TextProps) => {
  const fontValue = [...getAsArray(font), bold ? 'bold' : weight].filter(
    Boolean,
  ) as string[]

  const textValue = [...getAsArray(text), color, size].filter(
    Boolean,
  ) as string[]

  return (
    <Base<HTMLParagraphElement, HTMLParagraphProps>
      as={as}
      font={fontValue}
      text={textValue}
      leading={leading}
      {...rest}
    >
      {children}
    </Base>
  )
}

export default Text
