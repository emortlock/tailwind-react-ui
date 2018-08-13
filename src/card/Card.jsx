import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const Card = ({ children, className, border, shadow, config, ...rest }) => (
  <div
    {...rest}
    className={classnames(
      'overflow-hidden',
      border && 'border',
      shadow && (typeof shadow === 'string' ? `shadow-${shadow}` : 'shadow'),
      config.radius,
      className,
    )}
  >
    {children}
  </div>
)

Card.propTypes = {
  config: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  border: PropTypes.bool,
  shadow: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
}

Card.defaultProps = {
  children: undefined,
  className: undefined,
  border: false,
  shadow: false,
}

export { Card as component }
export default withConfig(Card)
