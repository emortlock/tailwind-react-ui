import type { BrandTextProps } from './BrandText'

import React from 'react'
import { BrandText } from './BrandText'

export type DangerTextProps = Omit<BrandTextProps, 'type' | 'theme'>

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `danger`.
 */
export const DangerText = ({ size = 1, ...props }: DangerTextProps) => (
  <BrandText size={size} {...props} type="danger" />
)
