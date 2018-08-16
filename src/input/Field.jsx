import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'
import getUniqueID from '../utils/getUniqueID'

import Label from './Label'
import TextInput from './TextInput'
import InfoText from '../typography/InfoText'
import DangerText from '../typography/DangerText'

const Field = ({ config, is, children, className, ...rest }) => {
  const Component = is
  const id = {
    input: getUniqueID('field-'),
  }

  let disabled = false
  let invalid = false

  React.Children.forEach(children, child => {
    if (child.type === InfoText) {
      id.info = getUniqueID('field-info-')
    }

    if (child.type === DangerText) {
      id.error = getUniqueID('field-error-')
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
        if (child.type === InfoText) {
          return React.cloneElement(child, {
            id: id.info,
          })
        }

        if (child.type === DangerText) {
          return React.cloneElement(child, {
            id: id.error,
          })
        }

        if (child.type === Label) {
          return React.cloneElement(child, {
            htmlFor: id.input,
            invalid,
            disabled,
          })
        }

        if (child.type === TextInput) {
          const describedBy = [id.error, id.info].filter(by => by)
          return React.cloneElement(child, {
            id: id.input,
            invalid,
            disabled,
            'aria-describedby': describedBy.length
              ? describedBy.join(' ')
              : undefined,
          })
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
