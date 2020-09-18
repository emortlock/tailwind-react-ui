import type { ContentBlockProps } from './ContentBlock'

import React from 'react'

import { ContentBlock } from './ContentBlock'

export const Article = ({ as = 'article', ...rest }: ContentBlockProps) => (
  <ContentBlock as={as} {...rest} />
)
