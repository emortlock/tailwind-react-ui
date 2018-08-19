import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const TextInput = ({
  config,
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
  const describedBy = [field.errorId, field.helpId].filter(by => by)

  return (
    <Component
      {...rest}
      className={classnames(
        config.radius,
        config.textColors.body,
        `px-${config.spacing.md} py-${config.spacing.sm}`,
        `mb-${config.spacing.sm}`,
        'appearance-none border w-full leading-tight',
        'focus:outline-none focus:shadow-outline',
        (readOnly || disabled) && 'opacity-50 pointer-events-none',
        invalid && `border-${config.baseColors.danger}`,
        className,
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
  config: PropTypes.shape({}).isRequired,
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
export default withConfig(TextInput)
