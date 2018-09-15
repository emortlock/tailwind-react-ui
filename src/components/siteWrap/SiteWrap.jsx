import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Base } from '../primitives'
import Footer, { component as FooterComponent } from '../footer/Footer'
import { withTheme } from '../theme'

const SiteWrap = ({ is, theme, children, ...rest }) => {
  let footer

  React.Children.forEach(children, child => {
    const { type } = child
    if (
      type &&
      (type === Footer || type.displayName === FooterComponent.displayName)
    ) {
      footer = child
    }
  })

  return (
    <Base
      is={is}
      flex={[true, 'col']}
      minH="screen"
      leading="normal"
      font={theme.text.family.body}
      text={[theme.text.size.body[1], theme.textColors.body]}
      {...rest}
    >
      <div className="flex-auto flex-no-shrink">
        {React.Children.map(children, child => {
          if (child === footer) return false
          return child
        })}
      </div>
      <div
        className={classnames(
          'flex-auto flex-no-shrink flex-no-grow',
          `mt-${theme.spacing.lg}`,
        )}
      >
        {footer}
      </div>
    </Base>
  )
}

SiteWrap.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
}

SiteWrap.defaultProps = {
  is: 'div',
  children: undefined,
}

export { SiteWrap as component }
export default withTheme(SiteWrap)
