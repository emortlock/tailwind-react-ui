import type { LabelProps } from './Label'

import React from 'react'
import { RawLabel as Label } from './Label'

export type OptionLabelProps = LabelProps<HTMLLegendElement>

export const OptionLabel = (props: OptionLabelProps) => (
  <Label<HTMLLegendElement> {...props} as="legend" optionList />
)
