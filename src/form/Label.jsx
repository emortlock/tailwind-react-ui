import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

import { filterProps } from '../utils'

const Label = ({
  config,
  is,
  field: { inputId, disabled },
  children,
  className,
  htmlFor,
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
      htmlFor={inputId || htmlFor}
    >
      {children}
    </Component>
  )
}

Label.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
}

Label.defaultProps = {
  is: 'label',
  field: {
    disabled: false,
  },
  children: undefined,
  className: undefined,
  htmlFor: undefined,
}

export { Label as component }
export default withConfig(Label)
