import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({ children, className, ...rest }) => (
  <button
    {...rest}
    className={classnames(
      'border border-grey hover:border-grey-dark px-4 py-2 rounded-sm text-black',
      className,
    )}
    type="button"
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Button.defaultProps = {
  children: undefined,
  className: undefined,
}

export default Button
