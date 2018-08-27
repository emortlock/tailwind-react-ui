import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'
import { filterProps } from '../utils'

const NavBrand = ({ theme, header: { style }, is, children, ...rest }) => (
  <BaseComponent
    flex={[true, 'no-shrink']}
    items="center"
    h={12}
    is={is}
    m={{ r: theme.spacing.lg }}
    text={style.text}
    {...filterProps(rest, ['header'])}
  >
    {children}
  </BaseComponent>
)

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
