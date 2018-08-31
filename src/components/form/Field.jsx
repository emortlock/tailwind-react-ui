import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { getUniqueID, filterProps } from '../utils'

class Field extends PureComponent {
  constructor(props) {
    const { id } = props

    super(props)

    this.id = id || getUniqueID('field')
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
        {...filterProps(rest, ['id'])}
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
  id: PropTypes.string,
}

Field.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  hasHelp: false,
  hasError: false,
  disabled: false,
  id: undefined,
}

export { Field as component }
export default withTheme(Field)
