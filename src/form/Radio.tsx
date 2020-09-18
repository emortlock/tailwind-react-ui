import type { OptionInputProps } from './OptionInput'

import React from 'react'
import { OptionInput } from './OptionInput'

export type RadioProps = Omit<OptionInputProps, 'checkbox' | 'theme'>

export const Radio = (props: RadioProps) => (
  <OptionInput {...props} checkbox={false} />
)
