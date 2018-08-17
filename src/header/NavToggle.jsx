import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const NavToggle = ({ config, is, children, className, ...rest }) => {
  const Component = is
  const barsClassNames = classnames(
    `border-${config.textColors.on.primary}`,
    'border-b inline-block',
  )

  return (
    <Component {...rest} className={classnames('w-12 h-12', className)}>
      {children || (
        <span className="flex flex-col items-stretch justify-around h-full p-3">
          <span className={barsClassNames} />
          <span className={barsClassNames} />
          <span className={barsClassNames} />
        </span>
      )}
    </Component>
  )
}

NavToggle.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
}

NavToggle.defaultProps = {
  is: 'button',
  children: undefined,
  className: undefined,
}

export { NavToggle as component }
export default withConfig(NavToggle)
