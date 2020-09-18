import type { BoxProps } from 'tailwind-react-primitives'
import type { WithTheme } from '../theme'

import React from 'react'

import { RawBox as Box } from 'tailwind-react-primitives'
import { withTheme } from '../theme'
import { getUniqueID } from '../utils'

export interface WithField {
  field?: {
    inputId?: string
    invalid?: boolean
    disabled?: boolean
    labelId?: string
    errorId?: string
    helpId?: string
  }
}

export interface FieldProps<E extends HTMLElement = HTMLDivElement>
  extends WithTheme,
    BoxProps<E> {
  hasHelp?: boolean
  hasError?: boolean
  disabled?: boolean
  optionList?: boolean
}

export const RawField = <E extends HTMLElement = HTMLDivElement>({
  id,
  theme,
  as,
  children,
  className,
  hasHelp,
  hasError,
  disabled,
  optionList,
  ...rest
}: FieldProps<E>) => {
  const [fieldId, setFieldId] = React.useState(id)

  React.useEffect(() => {
    if (fieldId) return

    setFieldId(getUniqueID('field'))
  })

  const fieldProps: WithField['field'] = {
    inputId: `${fieldId}-input`,
    helpId: hasHelp ? `${fieldId}-help` : undefined,
    errorId: hasError ? `${fieldId}-error` : undefined,
    labelId: optionList ? `${fieldId}-label` : undefined,
    invalid: hasError,
    disabled,
  }

  return (
    <Box<E>
      as={as}
      id={fieldId}
      m={{ b: theme.spacing.md }}
      maxW="sm"
      {...rest}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement<WithField>(child, { field: fieldProps })
          : child,
      )}
    </Box>
  )
}

export const Field = withTheme<FieldProps>(RawField)
