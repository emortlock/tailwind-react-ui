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

const Label = ({
  theme,
  is,
  field: { inputId, disabled },
  children,
  className,
  htmlFor,
  ...rest
}) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, [...tailwindProps, 'invalid'])}
      className={classnames(
        `mb-${theme.spacing.sm}`,
        'inline-block',
        disabled && 'opacity-50',
        userClassNames,
      )}
      htmlFor={inputId || htmlFor}
    >
      {children}
    </Component>
  )
}

Label.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  ...tailwindPropTypes,
}

Label.defaultProps = {
  is: 'label',
  field: {
    disabled: false,
  },
  children: undefined,
  className: undefined,
  htmlFor: undefined,
}

export { Label as component }
export default withTheme(Label)
