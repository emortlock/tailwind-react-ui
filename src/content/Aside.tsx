import type { ContentBlockProps } from './ContentBlock'

import React from 'react'

import { ContentBlock } from './ContentBlock'

export const Aside = ({ as = 'aside', ...rest }: ContentBlockProps) => (
  <ContentBlock as={as} {...rest} />
)
