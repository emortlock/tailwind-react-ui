import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ThemeContext from '../theme-context'

const Button = ({
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
    <ThemeContext.Consumer>
      {theme => (
        <Component
          {...rest}
          {...props}
          className={classnames(
            !link &&
              !large &&
              !small &&
              `px-${theme.spacing.md} py-${theme.spacing.sm}`,
            !link && large && `px-${theme.spacing.lg} py-${theme.spacing.md}`,
            !link &&
              small &&
              `px-${theme.spacing.sm} py-${theme.spacing.sm / 2}`,
            `${theme.radius}`,
            'border border-transparent select-none',
            `text-${theme.textColors.emphasis}`,
            fill && [
              `bg-${theme.baseColors[color]}`,
              `text-${theme.textColors.on[color]}`,
              `hover:bg-${theme.baseColors[`${color}Dark`]}`,
              `hover:text-${theme.textColors.on[`${color}Dark`]}`,
            ],
            outline && [
              `border-${theme.baseColors[color]}`,
              `text-${theme.baseColors[color]}`,
              `hover:bg-${theme.baseColors[`${color}`]}`,
              `hover:text-${theme.textColors.on[`${color}`]}`,
            ],
            text && [
              `text-${theme.baseColors[color]}`,
              `hover:bg-${theme.baseColors[`${color}Light`]}`,
              `hover:text-${theme.textColors.on[`${color}Light`]}`,
            ],
            link && [
              'p-0 underline',
              `text-${theme.baseColors[color]}`,
              `hover:text-${theme.baseColors[`${color}Dark`]}`,
            ],
            disabled && 'opacity-50 pointer-events-none',
            fullWidth && 'w-full',
            className,
          )}
          aria-disabled={disabled || undefined}
        >
          {children}
        </Component>
      )}
    </ThemeContext.Consumer>
  )
}
Button.propTypes = {
  is: PropTypes.oneOf([PropTypes.string, PropTypes.func, PropTypes.object]),
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

export default Button
