import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import withConfig from '../withConfig'

const Row = ({ is, children, className, nowrap, gutter, config, ...rest }) => {
  const Component = is

  return (
    <Component
      {...rest}
      className={classnames(
        'flex',
        !nowrap && 'flex-wrap',
        gutter &&
          (gutter === true
            ? `-ml-${config.spacing.md}`
            : `-ml-${config.spacing[gutter]}`),
        !nowrap &&
          gutter &&
          (gutter === true
            ? `-mb-${config.spacing.md}`
            : `-mb-${config.spacing[gutter]}`),
        className,
      )}
    >
      {gutter
        ? React.Children.map(children, child =>
            React.cloneElement(child, {
              className: classnames(
                gutter === true
                  ? `pl-${config.spacing.md}`
                  : `pl-${config.spacing[gutter]}`,
                !nowrap &&
                  (gutter === true
                    ? `mb-${config.spacing.md}`
                    : `mb-${config.spacing[gutter]}`),
              ),
            }),
          )
        : children}
    </Component>
  )
}

Row.propTypes = {
  config: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  nowrap: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
}

Row.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  nowrap: false,
  gutter: false,
}

export { Row as component }
export default withConfig(Row)
