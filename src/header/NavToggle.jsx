import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withConfig } from '../config'

const NavToggle = ({
  config,
  is,
  children,
  className,
  onClick,
  header: { onToggle },
  ...rest
}) => {
  const Component = is
  const barsClassNames = classnames(
    `border-${config.textColors.on.primary}`,
    'border-b inline-block',
  )

  const handleClick = e => {
    onToggle()
    if (onClick) onClick(e)
  }

  return (
    <Component
      {...rest}
      className={classnames('w-12 h-12 block lg:hidden', className)}
      onClick={handleClick}
    >
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
  header: PropTypes.shape({
    onToggle: PropTypes.func.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
}

NavToggle.defaultProps = {
  is: 'button',
  children: undefined,
  className: undefined,
  onClick: undefined,
}

export { NavToggle as component }
export default withConfig(NavToggle)
