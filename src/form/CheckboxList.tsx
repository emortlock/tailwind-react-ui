import type { OptionListProps } from './OptionList'

import React from 'react'
import { OptionList } from './OptionList'

export type CheckboxListProps = Omit<OptionListProps, 'checkbox' | 'theme'>

export const CheckboxList = (props: CheckboxListProps) => (
  <OptionList {...props} checkbox />
)
