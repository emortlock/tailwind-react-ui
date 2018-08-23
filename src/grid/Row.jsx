import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

const Row = ({ is, children, className, nowrap, gutter, theme, ...rest }) => {
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        'flex',
        !nowrap && 'flex-wrap',
        gutter &&
          (gutter === true
            ? `-ml-${theme.spacing.md}`
            : `-ml-${theme.spacing[gutter]}`),
        !nowrap &&
          gutter &&
          (gutter === true
            ? `-mb-${theme.spacing.md}`
            : `-mb-${theme.spacing[gutter]}`),
        userClassNames,
      )}
    >
      {gutter
        ? React.Children.map(children, child =>
            React.cloneElement(child, {
              className: classnames(
                gutter === true
                  ? `pl-${theme.spacing.md}`
                  : `pl-${theme.spacing[gutter]}`,
                !nowrap &&
                  (gutter === true
                    ? `mb-${theme.spacing.md}`
                    : `mb-${theme.spacing[gutter]}`),
              ),
            }),
          )
        : children}
    </Component>
  )
}

Row.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  nowrap: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  ...tailwindPropTypes,
}

Row.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  nowrap: false,
  gutter: false,
}

export { Row as component }
export default withTheme(Row)
