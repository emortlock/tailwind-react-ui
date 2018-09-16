import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Touchable } from '../primitives'
import { getColorShade } from '../tailwind'

const Button = ({
  theme,
  is,
  children,
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
  const props = {
    border: [true, 'transparent'],
    leading: 'tight',
    p: { x: theme.spacing.md, y: theme.spacing.sm },
    rounded: theme.radius,
    noUnderline: true,
  }

  if (large) {
    props.p = { x: theme.spacing.lg, y: theme.spacing.md }
  } else if (small) {
    props.p = { x: theme.spacing.sm, y: theme.spacing.sm / 2 }
  }

  switch (buttonStyle) {
    case 'fill':
      props.bg = brand ? theme.brandColors[brand] : bg
      props.text = brand ? theme.textColors.on[brand] : text
      props['bg-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : bg,
        theme.highlightOffset,
      )
      break
    case 'outline':
      // eslint-disable-next-line react/prop-types
      props.border.push(brand ? theme.brandColors[brand] : border)
      props.text = brand ? theme.brandColors[brand] : border
      props['bg-hocus'] = brand ? theme.brandColors[brand] : border
      props['text-hocus'] = brand ? theme.textColors.on[brand] : text
      break
    case 'text':
      props.text = brand ? theme.brandColors[brand] : text
      props['bg-hocus'] = `${getColorShade(
        brand ? theme.brandColors[brand] : text,
        'lightest',
      )}`
      break
    case 'link':
      props.rounded = undefined
      props.noUnderline = undefined
      props.leading = 'normal'
      props.p = 0
      props.underline = true
      props.text = brand ? theme.brandColors[brand] : text
      props['text-hocus'] = getColorShade(
        brand ? theme.brandColors[brand] : text,
        theme.highlightOffset,
      )
      break
    default:
      break
  }

  if (is === 'button') {
    props.type = type
  } else {
    props.role = 'button'
  }

  if (disabled) {
    props.opacity = 50
  }

  if (fullWidth) {
    props.w = 'full'
  }

  return (
    <Touchable is={is} inlineBlock {...props} {...rest}>
      {children}
    </Touchable>
  )
}

Button.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  color: PropTypes.string,
  type: PropTypes.string,
  buttonStyle: PropTypes.oneOf(['fill', 'outline', 'text', 'link']),
  disabled: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  fullWidth: PropTypes.bool,
  brand: PropTypes.string,
  bg: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  border: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
}

Button.defaultProps = {
  is: 'button',
  children: undefined,
  color: 'primary',
  type: 'button',
  buttonStyle: 'fill',
  disabled: false,
  large: false,
  small: false,
  fullWidth: false,
  brand: undefined,
  bg: undefined,
  text: undefined,
  border: undefined,
}

export { Button as component }
export default withTheme(Button)
