import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  filterProps,
  tailwindProps,
  propTypes,
  getTailwindClassNames,
} from '../../utils'

const withTailwind = (Component, { ignore = [] } = {}) => {
  const WithTailwind = ({ className, ...props }) => (
    <Component
      {...filterProps(
        props,
        tailwindProps.filter(prop => !ignore.includes(prop)),
      )}
      className={classnames([
        getTailwindClassNames(props, { ignore }),
        className,
      ])}
    />
  )

  WithTailwind.displayName = `WithTailwind(${Component.displayName})`

  WithTailwind.propTypes = {
    className: PropTypes.string,
    ...propTypes,
  }

  WithTailwind.defaultProps = {
    className: undefined,
  }

  return WithTailwind
}

export default withTailwind
