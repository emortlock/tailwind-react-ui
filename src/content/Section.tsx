import type { ContentBlockProps } from './ContentBlock'

import React from 'react'

import { ContentBlock } from './ContentBlock'

export const RawSection = ({ as = 'section', ...rest }: ContentBlockProps) => (
  <ContentBlock as={as} {...rest} />
)

export const Section = RawSection
