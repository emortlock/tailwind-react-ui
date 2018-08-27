import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { getUniqueID } from '../utils'

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
  const fieldProps = {
    inputId: getUniqueID('field-'),
    helpId: hasHelp ? getUniqueID('field-info-') : undefined,
    errorId: hasError ? getUniqueID('field-error-') : undefined,
    invalid: hasError,
    disabled,
  }

  return (
    <BaseComponent
      is={is}
      m={{ b: theme.spacing.md }}
      className="max-w-sm"
      {...rest}
    >
      {React.Children.map(children, child =>
        React.cloneElement(child, { field: fieldProps }),
      )}
    </BaseComponent>
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
