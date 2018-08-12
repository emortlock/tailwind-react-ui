import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CardFooter = ({ children, className, ...rest }) => (
  <div
    {...rest}
    className={classnames('flex flex-row-reverse items-end', className)}
  >
    {children}
  </div>
)

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardFooter.defaultProps = {
  children: undefined,
  className: undefined,
}

export default CardFooter
