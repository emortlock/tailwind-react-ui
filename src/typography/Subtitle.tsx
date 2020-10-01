import type { TitleProps } from './Title'

import React from 'react'
import { Title } from './Title'

export type SubtitleProps = Omit<TitleProps, 'subtitle' | 'theme'>

/**
 * @see See [Title](#title) for prop type definitions. Sets `subtitle` to `true`.
 */
export const RawSubtitle = (props: SubtitleProps) => (
  <Title {...props} subtitle />
)

export const Subtitle = RawSubtitle
