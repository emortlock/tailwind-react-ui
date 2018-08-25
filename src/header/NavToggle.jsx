import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropToClassName,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const NavToggle = ({
  theme,
  is,
  children,
  className,
  onClick,
  border,
  header: { onToggle, style },
  ...rest
}) => {
  const Component = is
  const barsClassNames = classnames(
    getTailwindClassNames(rest),
    border ? tailwindPropToClassName('border', border) : `border-${style.text}`,
    'border-b inline-block',
  )

  const handleClick = e => {
    onToggle()
    if (onClick) onClick(e)
  }

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames('w-12 h-12 block lg:hidden', className)}
      onClick={handleClick}
      aria-label="Open menu"
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
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    onToggle: PropTypes.func.isRequired,
  }).isRequired,
  onClick: PropTypes.func,
  border: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  ...tailwindPropTypes,
}

NavToggle.defaultProps = {
  is: 'button',
  children: undefined,
  className: undefined,
  onClick: undefined,
  border: undefined,
}

export { NavToggle as component }
export default withTheme(NavToggle)
