import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps, getUniqueID } from '../utils'

const Field = ({
  theme,
  is,
  children,
  className,
  hasHelp,
  hasError,
  disabled,
  ...rest
}) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  const fieldProps = {
    inputId: getUniqueID('field-'),
    helpId: hasHelp ? getUniqueID('field-info-') : undefined,
    errorId: hasError ? getUniqueID('field-error-') : undefined,
    invalid: hasError,
    disabled,
  }

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        'max-w-sm',
        `mb-${theme.spacing.md}`,
        userClassNames,
      )}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { field: fieldProps }),
      )}
    </Component>
  )
}

Field.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  hasHelp: PropTypes.bool,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
  ...tailwindPropTypes,
}

Field.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  hasHelp: false,
  hasError: false,
  disabled: false,
}

export { Field as component }
export default withTheme(Field)
