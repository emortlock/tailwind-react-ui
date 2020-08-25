import type { HTMLImageProps, ReactImageProps } from '../../types'
import type { BaseProps } from '../Base'

import React from 'react'

import { Base } from '../Base'
import { Box } from '../Box'

export interface ImageProps extends BaseProps, ReactImageProps {
  aspectRatio?: number
}

const Image = ({
  as = 'img',
  children,
  aspectRatio = 1,
  bg,
  w = 'full',
  text,
  ...rest
}: ImageProps) => (
  <Box relative w={w} text={text}>
    <Box bg={bg} style={{ paddingBottom: `${100 / aspectRatio}%` }} />
    <Base<HTMLImageElement, HTMLImageProps>
      as={as}
      absolute
      inset={0}
      w="full"
      {...rest}
    />
    {children && (
      <Box absolute inset={0} flex items="end">
        {children}
      </Box>
    )}
  </Box>
)

export default Image
