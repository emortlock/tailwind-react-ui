import type { LabelProps } from './Label'

import React from 'react'
import { withTheme } from '../theme'
import { RawLabel as Label } from './Label'

export type OptionLabelProps = LabelProps<HTMLLegendElement>

export const RawOptionLabel = (props: OptionLabelProps) => (
  <Label<HTMLLegendElement> {...props} as="legend" optionList />
)

export const OptionLabel = withTheme<OptionLabelProps>(RawOptionLabel)
