import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { List } from '../list'
import { withTheme } from '../theme'

class OptionList extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      checked: [],
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { checkbox } = this.props
    const { checked } = this.state
    const { value } = e.target

    if (checkbox) {
      return this.setState({
        checked: checked.includes(value)
          ? checked.filter(checkedVal => checkedVal !== value)
          : [...checked, value],
      })
    }

    return this.setState({
      checked: [e.target.value],
    })
  }

  render() {
    const {
      theme,
      children,
      name,
      checkbox,
      field,
      invalid,
      ...rest
    } = this.props
    const { checked } = this.state
    const describedBy = [field.labelId, field.errorId, field.helpId].filter(
      by => by,
    )
    const isInvalid = field.invalid || invalid

    return (
      <List reset m={{ b: 0 }} {...rest}>
        {React.Children.map(children, child => {
          const value = child.props && child.props.value

          return React.cloneElement(child, {
            id: `${field.inputId}-${value}`,
            name: checkbox ? `${name}[]` : name,
            checked: checked.includes(value),
            onChange: this.handleChange,
            'aria-invalid': isInvalid || undefined,
            'aria-describedby': describedBy.length
              ? describedBy.join(' ')
              : undefined,
          })
        })}
      </List>
    )
  }
}

OptionList.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  field: PropTypes.shape({
    inputId: PropTypes.string,
    invalid: PropTypes.bool,
    disabled: PropTypes.bool,
  }),
  checkbox: PropTypes.bool,
  invalid: PropTypes.bool,
}

OptionList.defaultProps = {
  children: undefined,
  checkbox: false,
  field: {},
  invalid: false,
}

export { OptionList as component }
export default withTheme(OptionList)
