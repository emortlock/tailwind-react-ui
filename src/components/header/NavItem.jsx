import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Touchable } from '../primitives'

const NavItem = ({
  theme,
  is,
  children,
  header: { style, screen },
  active,
  ...rest
}) => {
  const textColor = style.text || theme.textColors.on.primary
  const bgColor = style.bg || theme.brandColors.primary

  const responsive = screen
    ? {
        [`m-${screen}`]: { t: 0, r: theme.spacing.sm },
      }
    : {}

  return (
    <Touchable
      is={is}
      focusable
      text={!active ? style.text : style.bg}
      bg={active ? textColor : undefined}
      bg-hocus={textColor}
      text-hocus={bgColor}
      p={{ x: theme.spacing.md, y: theme.spacing.sm }}
      m={{ t: theme.spacing.sm }}
      rounded={theme.radius}
      noUnderline
      block
      aria-current={active ? 'page' : undefined}
      {...responsive}
      {...rest}
    >
      {children}
    </Touchable>
  )
}

NavItem.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    style: PropTypes.object,
    screen: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  }),
  active: PropTypes.bool,
}

NavItem.defaultProps = {
  is: 'a',
  children: undefined,
  header: { style: {}, screen: 'lg' },
  active: false,
}

export { NavItem as component }
export default withTheme(NavItem)
