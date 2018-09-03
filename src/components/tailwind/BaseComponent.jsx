import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { filterProps } from '../utils'

import getTailwindClassNames from './getTailwindClassNames'
import tailwindProps, { propTypes } from './tailwindProps'

const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

const BaseComponent = ({
  is,
  children,
  className,
  focusable,
  innerRef,
  ...rest
}) => {
  const Component = is
  const isFocusable = focusable || focusableElements.includes(is)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        isFocusable && 'focus:outline-none focus:shadow-outline',
        getTailwindClassNames(rest),
        className,
      )}
      ref={innerRef}
    >
      {children}
    </Component>
  )
}

BaseComponent.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ...propTypes,
}

BaseComponent.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  innerRef: undefined,
}

export default BaseComponent
