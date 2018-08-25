import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const CardBody = ({ is, children, className, ...rest }) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames('p-4', userClassNames)}
    >
      {children}
    </Component>
  )
}

CardBody.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  ...tailwindPropTypes,
}

CardBody.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export default CardBody
