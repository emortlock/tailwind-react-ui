import type { FieldProps } from './Field'

import React from 'react'
import { withTheme } from '../theme'
import { RawField } from './Field'

export type OptionFieldProps = FieldProps<HTMLFieldSetElement>

export const RawOptionField = (props: OptionFieldProps) => (
  <RawField<HTMLFieldSetElement> {...props} as="fieldset" optionList />
)

export const OptionField = withTheme<OptionFieldProps>(RawOptionField)
