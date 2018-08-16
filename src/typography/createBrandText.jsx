import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

import Text from './Text'

export default type => {
  const BrandText = ({ config, className, alert, ...rest }) => (
    <Text
      {...rest}
      brand
      className={classnames(
        config.radius,
        alert && [
          `bg-${config.baseColors[type]}`,
          `px-${config.spacing.md} py-${config.spacing.sm}`,
          `text-${config.textColors.on[type]}`,
        ],
        !alert && [`text-${config.baseColors[`${type}Dark`]}`],
        `mb-${config.spacing.sm}`,
        className,
      )}
    />
  )

  BrandText.propTypes = {
    config: PropTypes.shape({}).isRequired,
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

  return withConfig(BrandText)
}
