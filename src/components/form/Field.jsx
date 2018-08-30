import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { getUniqueID } from '../utils'

class Field extends PureComponent {
  constructor(props) {
    super(props)

    this.id = getUniqueID('field')
  }

  render() {
    const {
      theme,
      is,
      children,
      className,
      hasHelp,
      hasError,
      disabled,
      ...rest
    } = this.props

    const fieldProps = {
      inputId: `${this.id}-input`,
      helpId: hasHelp ? `${this.id}-help` : undefined,
      errorId: hasError ? `${this.id}-error` : undefined,
      invalid: hasError,
      disabled,
    }

    return (
      <BaseComponent
        is={is}
        id={this.id}
        m={{ b: theme.spacing.md }}
        maxW="sm"
        {...rest}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, { field: fieldProps }),
        )}
      </BaseComponent>
    )
  }
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
