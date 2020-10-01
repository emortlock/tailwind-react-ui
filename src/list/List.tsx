import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'
import { RawBox as Box, getAsArray } from 'tailwind-react-primitives'

import { withTheme } from '../theme'

export interface ListProps<E extends HTMLElement = HTMLUListElement>
  extends WithTheme,
    Omit<BoxProps<E>, 'list'> {
  padding?: boolean
  list?: boolean | 'disc' | 'decimal'
  inline?: boolean
  justified?: boolean
  fullWidth?: boolean
  ordered?: boolean
  listItemAs?: React.ElementType
}

export const RawList = <E extends HTMLElement = HTMLUListElement>({
  theme,
  as = 'ul',
  children,
  padding,
  list,
  inline,
  justified,
  fullWidth,
  ordered,
  listItemAs = 'li',
  flex,
  ...rest
}: ListProps<E>) => {
  let listStyle = list
  if (listStyle === true) {
    listStyle = ordered ? 'decimal' : 'disc'
  }

  return (
    <Box<E>
      as={ordered ? 'ol' : as}
      m={{ b: theme.spacing.md }}
      p={
        listStyle
          ? {
              l: theme.spacing.md,
            }
          : undefined
      }
      flex={
        justified ||
        fullWidth ||
        (inline ? [true, 'wrap', ...getAsArray(flex)] : flex)
      }
      justify={justified ? 'between' : undefined}
      list={listStyle || undefined}
      {...rest}
    >
      {React.Children.map(
        children,
        (child) =>
          child && (
            <Box
              as={listItemAs}
              m={{
                b:
                  (padding && !justified && !fullWidth && theme.spacing.sm) ||
                  undefined,
                r: (inline && theme.spacing.sm) || undefined,
              }}
              flex={fullWidth ? 'grow' : undefined}
            >
              {child}
            </Box>
          ),
      )}
    </Box>
  )
}

export const List = withTheme<ListProps>(RawList)
