import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  filterProps,
  getTailwindClassNames,
  tailwindProps,
  propTypes,
} from '../../utils'

const Base = ({ is, children, className, focusable, innerRef, ...rest }) => {
  const Component = is

  const focusProps = focusable
    ? {
        'outline-focus': 'none',
        'shadow-focus': 'outline',
      }
    : {}

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        getTailwindClassNames(
          {
            ...rest,
            // NB: Class names defined here need to be added to `tools/getWhiteList`
            // as they aren't detected by the PurgeCSS extractor
            ...focusProps,
          },
          // TODO: { prefix: theme.prefix },
        ),
        className,
      )}
      ref={innerRef}
    >
      {children}
    </Component>
  )
}

Base.propTypes = {
  theme: PropTypes.shape({}).isRequired,
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
