import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'
import { Footer } from '../footer'

const Layout = ({ is, children, ...rest }) => {
  let footer

  React.Children.forEach(children, child => {
    const { type } = child
    if (type && (type === Footer || type.displayName === Footer.displayName)) {
      footer = child
    }
  })

  return (
    <BaseComponent is={is} flex={[true, 'col']} minH="screen" {...rest}>
      <div className="flex-auto	flex-no-shrink">
        {React.Children.map(children, child => {
          if (child === footer) return false
          return child
        })}
      </div>
      <div className="flex-auto	flex-no-shrink flex-no-grow">{footer}</div>
    </BaseComponent>
  )
}

Layout.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
}

Layout.defaultProps = {
  is: 'div',
  children: undefined,
}

export default Layout
