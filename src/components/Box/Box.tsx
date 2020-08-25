import type { ReactDivProps } from '../../types'
import type { BaseProps } from '../Base'

import React from 'react'

import { Base } from '../Base'

export type BoxProps = BaseProps & ReactDivProps

const Box = ({
  as = 'div',
  children,
  inline = false,
  inlineBlock = false,
  ...rest
}: BoxProps) => {
  const el = as === 'div' && (inline || inlineBlock) ? 'span' : as

  return (
    <Base as={el} inline={inline} inlineBlock={inlineBlock} {...rest}>
      {children}
    </Base>
  )
}

export default Box
