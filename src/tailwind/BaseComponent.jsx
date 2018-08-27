import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterProps } from '../utils'

import getTailwindClassNames from './getTailwindClassNames'
import tailwindProps, { propTypes } from './tailwindProps'

const BaseComponent = ({ is, children, className, ...rest }) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        getTailwindClassNames({
          'outline-focus': 'none',
          'shadow-focus': 'outline',
          ...rest,
        }),
        className,
      )}
    >
      {children}
    </Component>
  )
}

BaseComponent.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  ...propTypes,
}

BaseComponent.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export default BaseComponent
