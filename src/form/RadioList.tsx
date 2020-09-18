import type { OptionListProps } from './OptionList'

import React from 'react'
import { OptionList } from './OptionList'

export type RadioListProps = Omit<OptionListProps, 'checkbox' | 'theme'>

export const RadioList = (props: RadioListProps) => (
  <OptionList {...props} checkbox={false} />
)
