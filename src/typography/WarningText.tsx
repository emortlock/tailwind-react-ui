import type { BrandTextProps } from './BrandText'

import React from 'react'
import { BrandText } from './BrandText'

export type WarningTextProps = Omit<BrandTextProps, 'type' | 'theme'>

/**
 * @see See [BrandText](#brandtext) for API. Sets `type` prop to `warning`.
 */
export const WarningText = (props: WarningTextProps) => (
  <BrandText {...props} type="warning" />
)
