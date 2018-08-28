import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Row = ({ is, children, nowrap, gutter, theme, ...rest }) => {
  const gutterSpacing =
    gutter && (gutter === true ? theme.spacing.md : theme.spacing[gutter])

  return (
    <BaseComponent
      is={is}
      flex={nowrap || [true, 'wrap']}
      nm={
        gutter
          ? { l: gutterSpacing, b: !nowrap ? gutterSpacing : undefined }
          : undefined
      }
      className="list-reset"
      {...rest}
    >
      {gutter
        ? React.Children.map(children, child =>
            React.cloneElement(child, {
              p: { l: gutterSpacing },
              m: { b: gutterSpacing },
            }),
          )
        : children}
    </BaseComponent>
  )
}

Row.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  nowrap: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

Row.defaultProps = {
  is: 'ul',
  children: undefined,
  nowrap: false,
  gutter: false,
}

export { Row as component }
export default withTheme(Row)
