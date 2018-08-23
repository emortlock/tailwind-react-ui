import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'

import Text from './Text'

export default type => {
  const BrandText = ({ theme, className, alert, ...rest }) => (
    <Text
      {...rest}
      brand
      className={classnames(
        theme.radius,
        alert && [
          `bg-${theme.baseColors[type]}`,
          `px-${theme.spacing.md} py-${theme.spacing.sm}`,
          `text-${theme.textColors.on[type]}`,
        ],
        !alert && [`text-${theme.baseColors[`${type}Dark`]}`],
        `mb-${theme.spacing.sm}`,
        className,
      )}
    />
  )

  BrandText.propTypes = {
    theme: PropTypes.shape({}).isRequired,
    is: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
    className: PropTypes.string,
    size: PropTypes.number,
    alert: PropTypes.bool,
  }

  BrandText.defaultProps = {
    is: 'p',
    className: undefined,
    size: 1,
    alert: false,
  }

  BrandText.displayName = `${type.charAt(0).toUpperCase()}${type.substring(
    1,
  )}Text`

  return withTheme(BrandText)
}
