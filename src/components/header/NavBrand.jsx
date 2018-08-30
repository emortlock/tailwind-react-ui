import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const NavBrand = ({ theme, header: { style }, is, children, ...rest }) => {
  const styleProps = {
    flex: [true, 'no-shrink'],
    items: 'center',
    h: 12,
    m: { r: theme.spacing.lg },
    text: style.text,
  }

  const ariaProps = !(typeof is === 'string' && is.startsWith('h'))
    ? {
        role: 'heading',
        'aria-level': 1,
      }
    : {}

  return (
    <BaseComponent is={is} noUnderline {...styleProps} {...ariaProps} {...rest}>
      {children}
    </BaseComponent>
  )
}

NavBrand.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  header: PropTypes.shape({
    style: PropTypes.object.isRequired,
  }),
}

NavBrand.defaultProps = {
  is: 'div',
  children: undefined,
  header: {},
}

export { NavBrand as component }
export default withTheme(NavBrand)
