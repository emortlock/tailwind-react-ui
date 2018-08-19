import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const TextInput = ({
  config,
  is,
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
      id={id || name}
      name={name}
      type={type}
      disabled={disabled}
      readOnly={readOnly}
      aria-invalid={invalid}
    />
  )
}

TextInput.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
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
