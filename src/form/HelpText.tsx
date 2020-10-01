import type { InfoTextProps } from '../typography'
import type { WithField } from './Field'

import React from 'react'

import { InfoText } from '../typography'

export type HelpTextProps = InfoTextProps & WithField

/**
 * @see [InfoText](#infotext)
 */
export const HelpText = ({
  as,
  field: { helpId = undefined } = {},
  size = 1,
  ...rest
}: HelpTextProps) => <InfoText as={as} id={helpId} {...rest} />
