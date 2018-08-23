import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const CardFooter = ({ is, children, className, ...rest }) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames('flex flex-row-reverse items-end', userClassNames)}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: classnames(
            'rounded-none',
            child.props && child.props.className,
          ),
        }),
      )}
    </Component>
  )
}

CardFooter.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  ...tailwindPropTypes,
}

CardFooter.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export default CardFooter
