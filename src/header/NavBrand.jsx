import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const NavBrand = ({ config, is, children, className, ...rest }) => {
  const Component = is

  return (
    <Component
      {...rest}
      className={classnames(
        `text-${config.textColors.on.primary}`,
        'flex items-center flex-no-shrink mr-6',
        className,
      )}
    >
      {children}
    </Component>
  )
}

NavBrand.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

NavBrand.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
}

export { NavBrand as component }
export default withConfig(NavBrand)
