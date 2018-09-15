import React from 'react'
import PropTypes from 'prop-types'

import { getColorShade } from '../tailwind'
import { withTheme } from '../theme'

import Paragraph from './Paragraph'

const BrandText = ({ theme, textOnly, type, ...rest }) => {
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
    <Paragraph
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
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  textOnly: PropTypes.bool,
  type: PropTypes.string.isRequired,
}

BrandText.defaultProps = {
  is: 'p',
  textOnly: false,
}

export default withTheme(BrandText)
