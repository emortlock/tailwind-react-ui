import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { withTailwind } from '../tailwind'
import { filterProps } from '../utils'

const NavBrand = ({ theme, is, children, className, ...rest }) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, ['header'])}
      className={classnames(
        `mr-${theme.spacing.lg}`,
        'flex items-center flex-no-shrink h-12',
        className,
      )}
    >
      {children}
    </Component>
  )
}

NavBrand.propTypes = {
  theme: PropTypes.shape({}).isRequired,
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
export default withTheme(withTailwind(NavBrand))
