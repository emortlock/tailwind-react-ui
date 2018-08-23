import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const TextInput = ({
  theme,
  is,
  field,
  children,
  className,
  id,
  name,
  type,
  disabled,
  readOnly,
  invalid,
  ...rest
}) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  const describedBy = [field.errorId, field.helpId].filter(by => by)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        theme.radius,
        theme.textColors.body,
        `px-${theme.spacing.md} py-${theme.spacing.sm}`,
        `mb-${theme.spacing.sm}`,
        'appearance-none border w-full leading-tight',
        'focus:outline-none focus:shadow-outline',
        (readOnly || disabled) && 'opacity-50 pointer-events-none',
        invalid && `border-${theme.baseColors.danger}`,
        userClassNames,
      )}
      id={field.inputId || id || name}
      name={name}
      type={type}
      disabled={field.disabled || disabled}
      readOnly={readOnly}
      aria-invalid={field.invalid || invalid}
      aria-describedby={describedBy.length ? describedBy.join(' ') : undefined}
    />
  )
}

TextInput.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  invalid: PropTypes.bool,
  ...tailwindPropTypes,
}

TextInput.defaultProps = {
  is: 'input',
  field: {},
  children: undefined,
  className: undefined,
  id: undefined,
  type: 'text',
  disabled: false,
  readOnly: false,
  invalid: false,
}

export { TextInput as component }
export default withTheme(TextInput)
