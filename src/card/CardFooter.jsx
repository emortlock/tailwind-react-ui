import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'

const CardFooter = ({ is, children, ...rest }) => (
  <BaseComponent is={is} flex={[true, 'row-reverse']} items="end" {...rest}>
    {React.Children.map(children, child =>
      React.cloneElement(child, {
        rounded: 'none',
      }),
    )}
  </BaseComponent>
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
