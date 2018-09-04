import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ExpandMore from 'react-icons/lib/md/expand-more'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

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
  placeholder,
  options,
  icon,
  ...rest
}) => {
  const describedBy = [field.errorId, field.helpId].filter(by => by)
  const isInvalid = field.invalid || invalid

  const ChevronDown = icon

  return (
    <div className={`relative mb-${theme.spacing.sm}`}>
      <BaseComponent
        is={is}
        className={classnames(
          'appearance-none',
          disabled && 'pointer-events-none',
          className,
        )}
        bg="white"
        rounded={theme.radius}
        text={theme.textColors.body}
        p={{ l: theme.spacing.md, r: theme.spacing.lg, y: theme.spacing.sm }}
        border={!isInvalid ? true : [true, theme.brandColors.danger]}
        w="full"
        leading="tight"
        opacity={disabled ? 50 : undefined}
        id={field.inputId || id || name}
        name={name}
        type={type}
        disabled={field.disabled || disabled}
        readOnly={readOnly}
        aria-invalid={isInvalid || undefined}
        aria-describedby={
          describedBy.length ? describedBy.join(' ') : undefined
        }
        {...rest}
      >
        {!!placeholder && <option value="">{placeholder}</option>}
        {options.map(option => (
          <option key={`${name}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </BaseComponent>
      <div
        className={classnames(
          'pointer-events-none',
          'absolute',
          'pin-y pin-r',
          'flex items-center',
          `px-${theme.spacing.sm}`,
        )}
      >
        <ChevronDown className="h-6	w-6" />
      </div>
    </div>
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
  placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  icon: PropTypes.node,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}

TextInput.defaultProps = {
  is: 'select',
  field: {},
  children: undefined,
  className: undefined,
  id: undefined,
  type: 'text',
  disabled: false,
  readOnly: false,
  invalid: false,
  placeholder: 'Please select',
  icon: ExpandMore,
  options: [],
}

export { TextInput as component }
export default withTheme(TextInput)
