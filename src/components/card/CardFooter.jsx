import React from 'react'
import PropTypes from 'prop-types'

import { Base } from '../primitives'

const CardFooter = ({ is, children, ...rest }) => (
  <Base is={is} flex={[true, 'row-reverse']} items="end" {...rest}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        rounded: 'none',
      }),
    )}
  </Base>
)

CardFooter.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

CardFooter.defaultProps = {
  is: 'div',
  children: undefined,
}

export default CardFooter
