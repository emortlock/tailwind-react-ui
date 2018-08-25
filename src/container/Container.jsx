import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const Container = ({
  theme,
  is,
  children,
  className,
  leftAlign,
  padding,
  max,
  ...rest
}) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        'container',
        !leftAlign && 'mx-auto',
        padding &&
          `px-${theme.spacing[typeof padding === 'string' ? padding : 'md']}`,
        max && `max-w-${theme.container[max]}`,
        userClassNames,
      )}
    >
      {children}
    </Component>
  )
}

Container.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  leftAlign: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  max: PropTypes.string,
  ...tailwindPropTypes,
}

Container.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  leftAlign: false,
  padding: false,
  max: undefined,
}

export { Container as component }
export default withTheme(Container)
