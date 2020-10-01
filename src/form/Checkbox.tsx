import type { OptionInputProps } from './OptionInput'

import React from 'react'
import { OptionInput } from './OptionInput'

export type CheckboxProps = Omit<OptionInputProps, 'checkbox' | 'theme'>

export const Checkbox = (props: CheckboxProps) => (
  <OptionInput {...props} checkbox />
)
