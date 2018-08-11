import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { TailwindContext } from '../context'

const Card = ({ children, className, border, shadow, ...rest }) => (
  <TailwindContext.Consumer>
    {theme => (
      <div
        {...rest}
        className={classnames(
          'overflow-hidden',
          border && 'border',
          shadow &&
            (typeof shadow === 'string' ? `shadow-${shadow}` : 'shadow'),
          theme.radius,
          className,
        )}
      >
        {children}
      </div>
    )}
  </TailwindContext.Consumer>
)

Card.propTypes = {
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

export default Card
