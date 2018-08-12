import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const getSizeClassNames = size => {
  if (typeof size === 'object') {
    return Object.keys(size).map(
      breakpoint =>
        breakpoint === 'def'
          ? getSizeClassNames(size[breakpoint])
          : `${breakpoint}:${getSizeClassNames(size[breakpoint])}`,
    )
  }

  return size === 'auto' ? 'flex-1' : `w-${size}`
}

const Col = ({ is, children, className, size, ...rest }) => {
  const Component = is

  return (
    <Component
      {...rest}
      className={classnames(getSizeClassNames(size), className)}
    >
      {children}
    </Component>
  )
}

Col.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

Col.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  size: 'full',
}

export default Col
