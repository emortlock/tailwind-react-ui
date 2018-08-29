import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { BaseComponent } from '../tailwind'
import { withTheme } from '../theme'

const List = ({
  theme,
  is,
  children,
  className,
  padding,
  reset,
  inline,
  justified,
  fullWidth,
  ordered,
  ...rest
}) => (
  <BaseComponent
    is={ordered ? 'ol' : is}
    m={{ b: theme.spacing.md }}
    flex={justified || fullWidth || (inline ? [true, 'wrap'] : undefined)}
    justify={justified ? 'between' : undefined}
    className={classnames(
      (reset || inline || justified || fullWidth) && 'list-reset',
      className,
    )}
    {...rest}
  >
    {React.Children.map(children, child => (
      <li
        className={classnames(
          padding && !justified && !fullWidth && `mb-${theme.spacing.sm}`,
          inline && `mr-${theme.spacing.sm}`,
          fullWidth && 'flex-1',
        )}
      >
        {child}
      </li>
    ))}
  </BaseComponent>
)

List.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  padding: PropTypes.bool,
  reset: PropTypes.bool,
  inline: PropTypes.bool,
  justified: PropTypes.bool,
  fullWidth: PropTypes.bool,
  ordered: PropTypes.bool,
}

List.defaultProps = {
  is: 'ul',
  children: undefined,
  className: undefined,
  padding: false,
  reset: false,
  inline: false,
  justified: false,
  fullWidth: false,
  ordered: false,
}

export { List as component }
export default withTheme(List)
