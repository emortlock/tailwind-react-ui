import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'
import getUniqueID from '../utils/getUniqueID'

import Label from './Label'
import TextInput from './TextInput'
import DangerText from '../typography/DangerText'

const Field = ({ config, is, children, className, ...rest }) => {
  const Component = is
  const id = getUniqueID('field-')

  let disabled = false
  let invalid = false

  React.Children.forEach(children, child => {
    if (child.type === DangerText) {
      invalid = true
    }

    if (child.props && child.props.disabled) {
      disabled = true
    }
  })

  return (
    <Component
      {...rest}
      className={classnames('max-w-sm', `mb-${config.spacing.md}`, className)}
    >
      {React.Children.map(children, child => {
        if (child.type === Label) {
          console.log(id, invalid, disabled)
          return React.cloneElement(child, { htmlFor: id, invalid, disabled })
        }

        if (child.type === TextInput) {
          return React.cloneElement(child, { id, invalid, disabled })
        }

        return child
      })}
    </Component>
  )
}

Field.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

Field.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export { Field as component }
export default withConfig(Field)
