import type { BoxProps } from 'tailwind-react-primitives'
import { WithTheme } from '../theme'
import { WithHeader } from './Header'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'

export interface NavBrandProps<E extends HTMLElement = HTMLDivElement>
  extends BoxProps<E>,
    WithTheme,
    WithHeader {}

export const RawNavBrand = ({
  theme,
  header: { style, screen } = { style: {}, screen: 'lg' },
  as = 'div',
  children,
  ...rest
}: NavBrandProps) => {
  const responsive = screen
    ? {
        [`m-${screen}`]: { r: theme.spacing.lg },
      }
    : {}

  const aria = !(typeof as === 'string' && as.startsWith('h'))
    ? {
        'role': 'heading',
        'aria-level': 1,
      }
    : {}

  return (
    <Box
      as={as}
      inlineBlock
      flex={[true, 'shrink-0']}
      items="center"
      h={12}
      text={style?.text || theme.textColors.on.primary}
      {...responsive}
      {...aria}
      {...rest}
    >
      {children}
    </Box>
  )
}

export const NavBrand = withTheme(RawNavBrand)
