import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { withTheme } from '../theme'

const List = ({
  theme,
  is,
  children,
  padding,
  list,
  inline,
  justified,
  fullWidth,
  ordered,
  listItemIs,
  ...rest
}) => {
  let listStyle = list
  if (listStyle === true) {
    listStyle = ordered ? 'decimal' : 'disc'
  }

  return (
    <Box
      is={ordered ? 'ol' : is}
      m={{ b: theme.spacing.md }}
      p={
        listStyle
          ? {
              l: theme.spacing.md,
            }
          : undefined
      }
      flex={
        justified ||
        fullWidth ||
        (inline ? [true, 'wrap', ...rest.flex] : rest.flex)
      }
      justify={justified ? 'between' : undefined}
      list={listStyle}
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
}

List.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  padding: PropTypes.bool,
  list: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['disc', 'decimal']),
  ]),
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
  list: undefined,
  inline: false,
  justified: false,
  fullWidth: false,
  ordered: false,
  listItemIs: 'li',
}

export { List as component }
export default withTheme(List)
