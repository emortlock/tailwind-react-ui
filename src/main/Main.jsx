import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'

const Main = ({ children, is, id, ...rest }) => (
  <BaseComponent is={is} id={id} role="main" {...rest}>
    {children}
  </BaseComponent>
)

Main.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Main.defaultProps = {
  children: undefined,
  id: 'main',
  is: 'main',
}

export default Main
