import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme, useThemeValue } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const Card = ({ is, children, className, theme, ...rest }) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        'overflow-hidden',
        useThemeValue('rounded', theme.radius, userClassNames),
        userClassNames,
      )}
    >
      {children}
    </Component>
  )
}

Card.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  ...tailwindPropTypes,
}

Card.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export { Card as component }
export default withTheme(Card)
