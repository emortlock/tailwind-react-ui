import React from 'react'
import PropTypes from 'prop-types'

import { getColorShade } from '../tailwind'
import { withTheme } from '../theme'

import Text from './Text'

export default type => {
  const BrandText = ({ theme, textOnly, ...rest }) => {
    const alertProps = !textOnly
      ? {
          bg: getColorShade(theme.brandColors[type], 'lightest'),
          border: [`l-${theme.accentSize}`, theme.brandColors[type]],
          p: { x: theme.spacing.md, y: theme.spacing.sm },
          text: theme.textColors.body,
          rounded: 'r',
        }
      : {}

    return (
      <Text
        {...rest}
        brand
        rounded={theme.radius}
        text={getColorShade(theme.brandColors[type], 1)}
        m={{ b: theme.spacing.sm }}
        {...alertProps}
      />
    )
  }

  BrandText.propTypes = {
    theme: PropTypes.shape({}).isRequired,
    is: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
    size: PropTypes.number,
    textOnly: PropTypes.bool,
  }

  BrandText.defaultProps = {
    is: 'p',
    size: 1,
    textOnly: false,
  }

  BrandText.displayName = `${type.charAt(0).toUpperCase()}${type.substring(
    1,
  )}Text`

  return withTheme(BrandText)
}
