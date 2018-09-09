import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const NavBrand = ({
  theme,
  header: { style, screen },
  is,
  children,
  ...rest
}) => {
  const styleProps = {
    flex: [true, 'no-shrink'],
    items: 'center',
    h: 12,
    [`m-${screen}`]: { r: theme.spacing.lg },
    text: style.text || theme.textColors.on.primary,
  }

  const ariaProps = !(typeof is === 'string' && is.startsWith('h'))
    ? {
        role: 'heading',
        'aria-level': 1,
      }
    : {}

  return (
    <BaseComponent
      is={is}
      inlineBlock
      noUnderline
      {...styleProps}
      {...ariaProps}
      {...rest}
    >
      {children}
    </BaseComponent>
  )
}

NavBrand.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    style: PropTypes.object,
    screen: PropTypes.string,
  }),
}

NavBrand.defaultProps = {
  is: 'div',
  children: undefined,
  header: { style: {}, screen: 'lg' },
}

export { NavBrand as component }
export default withTheme(NavBrand)
