import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Base } from '../primitives'
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
  listItemIs,
  ...rest
}) => {
  const ListItem = listItemIs

  return (
    <Base
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
      {React.Children.map(
        children,
        child =>
          child && (
            <ListItem
              className={classnames(
                padding && !justified && !fullWidth && `mb-${theme.spacing.sm}`,
                inline && `mr-${theme.spacing.sm}`,
                fullWidth && 'flex-grow',
              )}
            >
              {child}
            </ListItem>
          ),
      )}
    </Base>
  )
}

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
  listItemIs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
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
  listItemIs: 'li',
}

export { List as component }
export default withTheme(List)
