import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterProps } from '../utils'
import { getTailwindClassNames, tailwindProps, propTypes } from '../tailwind'

const Base = ({ is, children, className, focusable, innerRef, ...rest }) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        focusable && 'focus:outline-none focus:shadow-outline',
        getTailwindClassNames(rest),
        className,
      )}
      ref={innerRef}
    >
      {children}
    </Component>
  )
}

Base.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ...propTypes,
}

Base.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  innerRef: undefined,
}

export default Base
