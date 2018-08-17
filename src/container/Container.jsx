import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const Container = ({
  config,
  is,
  children,
  className,
  leftAlign,
  padding,
  max,
  ...rest
}) => {
  const Component = is

  return (
    <Component
      {...rest}
      className={classnames(
        'container',
        !leftAlign && 'mx-auto',
        padding &&
          `px-${config.spacing[typeof padding === 'string' ? padding : 'md']}`,
        max && `max-w-${config.container[max]}`,
        className,
      )}
    >
      {children}
    </Component>
  )
}

Container.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  leftAlign: PropTypes.bool,
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  max: PropTypes.string,
}

Container.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  leftAlign: false,
  padding: false,
  max: undefined,
}

export { Container as component }
export default withConfig(Container)
