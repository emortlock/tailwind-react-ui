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

const NavItem = ({
  theme,
  is,
  children,
  className,
  header: { style },
  text,
  ...rest
}) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        getTailwindClassNames(...rest),
        text ? tailwindPropToClassName('text', text) : `text-${style.text}`,
        `hover:bg-${style.text} hover:text-${style.bg}`,
        `px-${theme.spacing.md} py-${theme.spacing.sm}`,
        theme.radius,
        'block mt-2 no-underline',
        `lg:inline-block lg:mt-0 lg:mr-${theme.spacing.sm}`,
        className,
      )}
    >
      {children}
    </Component>
  )
}

NavItem.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.shape({
    style: PropTypes.object.isRequired,
  }),
  ...tailwindPropTypes,
}

NavItem.defaultProps = {
  is: 'a',
  children: undefined,
  className: undefined,
  header: {},
}

export { NavItem as component }
export default withTheme(NavItem)
