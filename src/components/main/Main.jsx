import React from 'react'
import PropTypes from 'prop-types'

import { Base } from '../primitives'

const Main = ({ children, is, id, ...rest }) => (
  <Base is={is} id={id} role="main" {...rest}>
    {children}
  </Base>
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
