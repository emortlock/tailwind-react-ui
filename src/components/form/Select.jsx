import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { Box, Touchable } from '../primitives'

// https://material.io/tools/icons/?style=baseline
const ExpandMore = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

const Select = ({
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
    <Box relative m={{ b: theme.spacing.sm }}>
      <Touchable
        is={is}
        className={classnames('appearance-none', className)}
        bg="white"
        rounded={theme.radius}
        text={theme.textColors.body}
        p={{ l: theme.spacing.md, r: theme.spacing.lg, y: theme.spacing.sm }}
        border={!isInvalid ? true : [true, theme.brandColors.danger]}
        w="full"
        leading="tight"
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
      </Touchable>
      <Box
        absolute
        pin={['y', 'r']}
        flex
        items="center"
        p={{ x: theme.spacing.sm }}
        className="pointer-events-none"
      >
        <ChevronDown className="h-6	w-6" />
      </Box>
    </Box>
  )
}

Select.propTypes = {
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
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
}

Select.defaultProps = {
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

export { Select as component }
export default withTheme(Select)
