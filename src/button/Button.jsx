import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme, useThemeValue } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropToClassName,
  tailwindPropTypes,
  getColorShade,
} from '../tailwind'
import { filterProps } from '../utils'

const Button = ({
  theme,
  is,
  children,
  className,
  color,
  type,
  buttonStyle,
  disabled,
  large,
  small,
  fullWidth,
  bg,
  text,
  border,
  brand,
  ...rest
}) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  const isLink = buttonStyle === 'link'
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
      {...filterProps(rest, tailwindProps)}
      {...props}
      className={classnames(
        !isLink &&
          !large &&
          !small && [
            useThemeValue('px', theme.spacing.md, userClassNames),
            useThemeValue('py', theme.spacing.sm, userClassNames),
          ],
        !isLink &&
          large && [
            useThemeValue('px', theme.spacing.lg, userClassNames),
            useThemeValue('py', theme.spacing.md, userClassNames),
          ],
        !isLink &&
          small && [
            useThemeValue('px', theme.spacing.sm, userClassNames),
            useThemeValue('py', theme.spacing.sm / 2, userClassNames),
          ],
        useThemeValue('rounded', theme.radius, userClassNames),
        'border border-transparent select-none',
        buttonStyle === 'fill' && [
          tailwindPropToClassName('bg', brand ? theme.brandColors[brand] : bg),
          tailwindPropToClassName(
            'text',
            brand ? theme.textColors.on[brand] : text,
          ),
          tailwindPropToClassName(
            'hover:bg',
            getColorShade(
              brand ? theme.brandColors[brand] : bg,
              theme.highlightOffset,
            ),
          ),
        ],
        buttonStyle === 'outline' && [
          tailwindPropToClassName(
            'border',
            brand ? theme.brandColors[brand] : border,
          ),
          tailwindPropToClassName(
            'text',
            brand ? theme.brandColors[brand] : border,
          ),
          tailwindPropToClassName(
            'hover:bg',
            brand ? theme.brandColors[brand] : border,
          ),
          tailwindPropToClassName(
            'hover:text',
            brand ? theme.textColors.on[brand] : text,
          ),
        ],
        buttonStyle === 'text' && [
          tailwindPropToClassName(
            'text',
            brand ? theme.brandColors[brand] : text,
          ),
          tailwindPropToClassName(
            'hover:bg',
            `${getColorShade(
              brand ? theme.brandColors[brand] : text,
              'lightest',
            )}`,
          ),
        ],
        isLink && [
          'p-0 underline',
          `text-${brand ? theme.brandColors[brand] : text}`,
          `hover:text-${getColorShade(
            brand ? theme.brandColors[brand] : text,
            theme.highlightOffset,
          )}`,
        ],
        disabled && 'opacity-50 pointer-events-none',
        fullWidth && 'w-full',
        !isLink && 'leading-tight',
        userClassNames,
      )}
      aria-disabled={disabled || undefined}
    >
      {children}
    </Component>
  )
}
Button.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  buttonStyle: PropTypes.oneOf(['fill', 'outline', 'text', 'link']),
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  fullWidth: PropTypes.bool,
  brand: PropTypes.string,
  ...tailwindPropTypes,
}

Button.defaultProps = {
  is: 'button',
  children: undefined,
  className: undefined,
  color: 'primary',
  type: 'button',
  buttonStyle: 'fill',
  disabled: false,
  large: false,
  small: false,
  fullWidth: false,
  brand: undefined,
}

export { Button as component }
export default withTheme(Button)
