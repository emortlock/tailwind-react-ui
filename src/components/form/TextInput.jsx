import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Touchable } from '../primitives'

const TextInput = ({
  theme,
  is,
  field,
  children,
  id,
  name,
  type,
  disabled,
  readOnly,
  invalid,
  ...rest
}) => {
  const describedBy = [field.errorId, field.helpId].filter(by => by)
  const isInvalid = field.invalid || invalid

  return (
    <Touchable
      is={is}
      appearance="none"
      bg="white"
      rounded={theme.radius}
      text={theme.textColors.body}
      p={{ x: theme.spacing.md, y: theme.spacing.sm }}
      m={{ b: theme.spacing.sm }}
      border={!isInvalid ? true : [true, theme.brandColors.danger]}
      w="full"
      leading="tight"
      id={field.inputId || id || name}
      name={name}
      type={type}
      disabled={field.disabled || disabled}
      readOnly={readOnly}
      aria-invalid={isInvalid || undefined}
      aria-describedby={describedBy.length ? describedBy.join(' ') : undefined}
      {...rest}
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
  id: undefined,
  type: 'text',
  disabled: false,
  readOnly: false,
  invalid: false,
}

export { TextInput as component }
export default withTheme(TextInput)
