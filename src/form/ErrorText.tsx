import type { DangerTextProps } from '../typography'
import type { WithField } from './Field'

import React from 'react'

import { DangerText } from '../typography'

export type ErrorTextProps = DangerTextProps & WithField

/**
 * @see [DangerText](#dangertext)
 */
export const ErrorText = ({
  field: { errorId = undefined } = {},
  size = 1,
  ...rest
}: ErrorTextProps) => (
  <DangerText id={errorId} aria-live="assertive" size={size} {...rest} />
)
