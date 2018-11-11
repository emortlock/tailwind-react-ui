import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { Touchable, Flex, Box } from '../primitives'
import { withTheme } from '../theme'

import Label from './Label'

class OptionInput extends PureComponent {
  constructor(props) {
    super(props)

    const { defaultChecked, checked } = props

    this.state = {
      checked: defaultChecked || !!checked,
    }

    this.inputRef = null

    this.handleChange = this.handleChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  componentDidUpdate(prevProps) {
    this.handleUpdate(prevProps)
  }

  handleChange(e) {
    const { checkbox, onChange, checked } = this.props

    if (checked === undefined) {
      this.setState(({ checked: checkedState }) => ({
        checked: checkbox ? !checkedState : true,
      }))
    }

    if (onChange) onChange({ ...e, target: this.inputRef.current })

    e.preventDefault()
  }

  handleUpdate() {
    const { checked } = this.props
    const { checked: checkedState } = this.state

    if (checked !== undefined && checked !== checkedState) {
      this.setState({ checked })
    }
  }

  render() {
    const {
      theme,
      name,
      value,
      label,
      hideLabel,
      checkbox,
      id,
      ...rest
    } = this.props
    const { checked } = this.state

    this.inputRef = React.createRef()

    return (
      <Touchable
        is={Label}
        flex
        items="center"
        onTouch={this.handleChange}
        {...rest}
      >
        <Box
          is="input"
          id={id}
          visuallyHidden
          name={name}
          type={checkbox ? 'checkbox' : 'radio'}
          value={value}
          checked={checked}
          tabIndex="-1"
          innerRef={this.inputRef}
          onChange={() => {}}
        />
        <Flex
          items="center"
          justify="center"
          inlineBlock
          rounded={checkbox ? theme.radius : 'full'}
          h={4}
          w={4}
          border={[true, checked ? theme.brandColors.primary : false].filter(
            prop => !!prop,
          )}
          bg={checkbox && checked ? theme.brandColors.primary : undefined}
          m={{ r: theme.spacing.sm }}
        >
          {checked &&
            (checkbox ? (
              <Box
                is="svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                h={3}
                w={3}
                text="white"
                fill="current"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
              </Box>
            ) : (
              <Box
                inlineBlock
                rounded="full"
                h={2}
                w={2}
                bg={theme.brandColors.primary}
              />
            ))}
        </Flex>
        <Box
          inlineBlock
          visuallyHidden={hideLabel}
          leading="tight"
          font="normal"
        >
          {label}
        </Box>
      </Touchable>
    )
  }
}

OptionInput.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  checkbox: PropTypes.bool,
  id: PropTypes.string,
}

OptionInput.defaultProps = {
  hideLabel: false,
  defaultChecked: undefined,
  checked: undefined,
  onChange: undefined,
  checkbox: false,
  id: undefined,
}

export { OptionInput as component }
export default withTheme(OptionInput)
