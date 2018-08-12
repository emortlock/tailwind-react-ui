import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const CardBody = ({ children, className, ...rest }) => (
  <div {...rest} className={classnames('p-4', className)}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardBody.defaultProps = {
  children: undefined,
  className: undefined,
}

export default CardBody
