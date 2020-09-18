import type { BaseProps, BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'
import type { ContentTitleProps } from './ContentTitle'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { getUniqueID } from '../utils'
import { withTheme } from '../theme'

import { ContentTitle } from './ContentTitle'

export type ContentBlockProps<
  E extends HTMLElement = HTMLDivElement
> = WithTheme & BoxProps<E>

export const RawContentBlock = <E extends HTMLElement = HTMLDivElement>({
  theme,
  as = 'section',
  id,
  children,
  ...rest
}: ContentBlockProps<E>) => {
  const [contentId, setContentId] = React.useState(id)

  React.useEffect(() => {
    if (contentId) return

    setContentId(getUniqueID('content'))
  })

  return (
    <Box<E> as={as} p={theme.spacing.md} aria-labelledby={contentId} {...rest}>
      {React.Children.map(children, (child, index) => {
        if (!child) return false

        if (
          React.isValidElement(child) &&
          'type' in child &&
          child.type === ContentTitle
        ) {
          return React.cloneElement<ContentTitleProps>(child, {
            content: { id: contentId },
          })
        }

        if (
          React.isValidElement(child) &&
          index === React.Children.count(children) - 1
        ) {
          return React.cloneElement<BaseProps>(child as any, {
            m: { b: 0 },
          })
        }

        return child
      })}
    </Box>
  )
}

export const ContentBlock = withTheme<ContentBlockProps>(RawContentBlock)
