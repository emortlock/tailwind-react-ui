import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

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
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(getSizeClassNames(size), userClassNames)}
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
  ...tailwindPropTypes,
}

Col.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  size: 'full',
}

export default Col
