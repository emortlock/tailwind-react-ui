import type { ListProps } from '../list'
import type { WithTheme } from '../theme'
import type { WithField } from './Field'

import React from 'react'

import { RawList as List } from '../list'
import { withTheme } from '../theme'

export interface OptionListProps<E extends HTMLElement = HTMLUListElement>
  extends WithTheme,
    WithField,
    ListProps<E> {
  name: string
  checkbox?: boolean
  invalid?: boolean
}

export const RawOptionList = <E extends HTMLElement = HTMLUListElement>({
  theme,
  children,
  name,
  checkbox,
  field = {},
  invalid,
  ...rest
}: OptionListProps<E>) => {
  const [checked, setChecked] = React.useState<string[]>([])

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target

      if (checkbox) {
        return setChecked(
          checked.includes(value)
            ? checked.filter((checkedVal) => checkedVal !== value)
            : [...checked, value],
        )
      }

      return setChecked([value])
    },
    [checked],
  )

  const describedBy = [field.labelId, field.errorId, field.helpId].filter(
    Boolean,
  )
  const isInvalid = field.invalid || invalid

  return (
    <List<E> theme={theme} m={{ b: 0 }} {...rest}>
      {React.Children.map(children, (child) => {
        if (!child || !React.isValidElement(child)) return child

        const value = child.props && child.props.value

        return React.cloneElement(child, {
          'id': `${field.inputId}-${value}`,
          'name': checkbox ? `${name}[]` : name,
          'checked': checked.includes(value),
          'onChange': handleChange,
          'aria-invalid': isInvalid || undefined,
          'aria-describedby': describedBy.length
            ? describedBy.join(' ')
            : undefined,
        })
      })}
    </List>
  )
}

export const OptionList = withTheme<OptionListProps>(RawOptionList)
