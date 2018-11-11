import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { withTheme } from '../theme'

const List = ({
  theme,
  is,
  children,
  padding,
  reset,
  inline,
  justified,
  fullWidth,
  ordered,
  listItemIs,
  ...rest
}) => (
  <Box
    is={ordered ? 'ol' : is}
    m={{ b: theme.spacing.md }}
    flex={
      justified ||
      fullWidth ||
      (inline ? [true, 'wrap', ...rest.flex] : rest.flex)
    }
    justify={justified ? 'between' : undefined}
    listReset={reset || inline || justified || fullWidth}
    {...rest}
  >
    {React.Children.map(
      children,
      child =>
        child && (
          <Box
            is={listItemIs}
            m={{
              b: padding && !justified && !fullWidth && theme.spacing.sm,
              r: inline && theme.spacing.sm,
            }}
            flex={fullWidth ? 'grow' : undefined}
          >
            {child}
          </Box>
        ),
    )}
  </Box>
)

List.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
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
