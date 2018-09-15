import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Text } from '../primitives'

const Label = ({
  theme,
  is,
  field: { inputId, disabled },
  children,
  htmlFor,
  ...rest
}) => (
  <Text
    is={is}
    inlineBlock
    htmlFor={inputId || htmlFor}
    m={{ b: theme.spacing.sm }}
    opacity={disabled ? 50 : undefined}
    weight="semibold"
    {...rest}
  >
    {children}
  </Text>
)

Label.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  htmlFor: PropTypes.string,
}

Label.defaultProps = {
  is: 'label',
  field: {
    disabled: false,
  },
  children: undefined,
  htmlFor: undefined,
}

export { Label as component }
export default withTheme(Label)
