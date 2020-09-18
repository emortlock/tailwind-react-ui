import type { FieldProps } from './Field'
import React from 'react'
import { RawField } from './Field'

export type OptionFieldProps = FieldProps<HTMLFieldSetElement>

export const OptionField = (props: OptionFieldProps) => (
  <RawField<HTMLFieldSetElement> {...props} as="fieldset" optionList />
)
