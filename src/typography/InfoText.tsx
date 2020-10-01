import type { BrandTextProps } from './BrandText'

import React from 'react'
import { BrandText } from './BrandText'

export type InfoTextProps = Omit<BrandTextProps, 'type' | 'theme'>

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `info`.
 */
export const InfoText = (props: InfoTextProps) => (
  <BrandText {...props} type="info" />
)
