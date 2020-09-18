import type { TitleProps } from '../typography'

import React from 'react'

import { Title } from '../typography'

export interface ContentTitleProps
  extends Omit<TitleProps, 'content' | 'theme'> {
  content?: {
    id?: string
  }
  visuallyHidden?: boolean
}

export const RawContentTitle = ({
  content: { id = undefined } = {},
  visuallyHidden,
  ...rest
}: ContentTitleProps) => (
  <Title id={id} visuallyHidden={visuallyHidden} {...rest} />
)

export const ContentTitle = RawContentTitle
