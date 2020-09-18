import type { TitleProps } from '../typography'

import React from 'react'

import { RawTitle as Title } from '../typography'

export interface ContentTitleProps<E extends HTMLElement = HTMLHeadingElement>
  extends Omit<TitleProps<E>, 'content'> {
  content?: {
    id?: string
  }
  visuallyHidden?: boolean
}

export const RawContentTitle = <E extends HTMLElement = HTMLHeadingElement>({
  content: { id = undefined } = {},
  visuallyHidden,
  ...rest
}: ContentTitleProps<E>) => (
  <Title id={id} visuallyHidden={visuallyHidden} {...rest} />
)

export const ContentTitle = RawContentTitle
