import type { FlexValue } from '../../types'
import type { BoxProps } from '../Box'

import React from 'react'

import { Box } from '../Box'

interface FlexProps extends BoxProps {
  col?: boolean
  reverse?: boolean
  wrap?: boolean
  wrapReverse?: boolean
}

const Flex = ({
  as = 'div',
  children,
  inline = false,
  inlineFlex = false,
  col = false,
  reverse = false,
  wrap = false,
  wrapReverse = false,
  ...rest
}: FlexProps) => {
  const el = as === 'div' && (inline || inlineFlex) ? 'span' : as

  return (
    <Box
      as={el}
      flex={
        [
          true,
          col && !reverse && 'col',
          reverse && (col ? 'col-reverse' : 'row-reverse'),
          wrap && 'wrap',
          wrapReverse && 'wrap-reverse',
        ].filter(Boolean) as FlexValue[]
      }
      inlineFlex={inline || inlineFlex}
      {...rest}
    >
      {children}
    </Box>
  )
}

export default Flex
