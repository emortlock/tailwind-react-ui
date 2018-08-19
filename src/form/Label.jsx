import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

import { filterProps } from '../utils'

const Label = ({
  config,
  is,
  children,
  className,
  htmlFor,
  disabled,
  ...rest
}) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, ['invalid'])}
      className={classnames(
        `mb-${config.spacing.sm}`,
        'inline-block',
        className,
        disabled && 'opacity-50',
      )}
      htmlFor={htmlFor}
    >
      {children}
    </Component>
  )
}

Label.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  is: 'label',
  children: undefined,
  className: undefined,
  disabled: false,
}

export { Label as component }
export default withConfig(Label)
