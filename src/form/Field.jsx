import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'
import getUniqueID from '../utils/getUniqueID'

const Field = ({
  config,
  is,
  children,
  className,
  hasHelp,
  hasError,
  disabled,
  ...rest
}) => {
  const Component = is

  const fieldProps = {
    inputId: getUniqueID('field-'),
    helpId: hasHelp ? getUniqueID('field-info-') : undefined,
    errorId: hasError ? getUniqueID('field-error-') : undefined,
    invalid: hasError,
    disabled,
  }

  return (
    <Component
      {...rest}
      className={classnames('max-w-sm', `mb-${config.spacing.md}`, className)}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { field: fieldProps }),
      )}
    </Component>
  )
}

Field.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  hasHelp: PropTypes.bool,
  hasError: PropTypes.bool,
  disabled: PropTypes.bool,
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
export default withConfig(Field)
