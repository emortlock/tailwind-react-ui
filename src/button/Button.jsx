import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const Button = ({
  config,
  is,
  children,
  className,
  color,
  type,
  fill,
  outline,
  text,
  link,
  disabled,
  large,
  small,
  fullWidth,
  ...rest
}) => {
  const Component = is
  let props = {}

  if (is !== 'button') {
    props = {
      type,
    }
  } else {
    props = {
      role: 'button',
    }
  }

  return (
    <Component
      {...rest}
      {...props}
      className={classnames(
        !link &&
          !large &&
          !small &&
          `px-${config.spacing.md} py-${config.spacing.sm}`,
        !link && large && `px-${config.spacing.lg} py-${config.spacing.md}`,
        !link && small && `px-${config.spacing.sm} py-${config.spacing.sm / 2}`,
        config.radius,
        'border border-transparent select-none',
        `text-${config.textColors.emphasis}`,
        fill && [
          `bg-${config.baseColors[color]}`,
          `text-${config.textColors.on[color]}`,
          `hover:bg-${config.baseColors[`${color}Dark`]}`,
          `hover:text-${config.textColors.on[`${color}Dark`]}`,
        ],
        outline && [
          `border-${config.baseColors[color]}`,
          `text-${config.baseColors[color]}`,
          `hover:bg-${config.baseColors[`${color}`]}`,
          `hover:text-${config.textColors.on[`${color}`]}`,
        ],
        text && [
          `text-${config.baseColors[color]}`,
          `hover:bg-${config.baseColors[`${color}Light`]}`,
          `hover:text-${config.textColors.on[`${color}Light`]}`,
        ],
        link && [
          'p-0 underline',
          `text-${config.baseColors[color]}`,
          `hover:text-${config.baseColors[`${color}Dark`]}`,
        ],
        disabled && 'opacity-50 pointer-events-none',
        fullWidth && 'w-full',
        !link && 'leading-tight',
        className,
      )}
      aria-disabled={disabled || undefined}
    >
      {children}
    </Component>
  )
}
Button.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  fill: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  link: PropTypes.bool,
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  fullWidth: PropTypes.bool,
}

Button.defaultProps = {
  is: 'button',
  children: undefined,
  className: undefined,
  color: 'primary',
  type: 'button',
  fill: false,
  outline: false,
  text: false,
  link: false,
  disabled: false,
  large: false,
  small: false,
  fullWidth: false,
}

export { Button as component }
export default withConfig(Button)
