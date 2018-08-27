import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Label = ({
  theme,
  is,
  field: { inputId, disabled },
  children,
  className,
  htmlFor,
  ...rest
}) => (
  <BaseComponent
    className="inline-block"
    htmlFor={inputId || htmlFor}
    m={{ b: theme.spacing.sm }}
    opacity={disabled ? 50 : undefined}
    {...rest}
  >
    {children}
  </BaseComponent>
)

Label.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    inputId: PropTypes.string,
    disabled: PropTypes.bool,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
}

Label.defaultProps = {
  is: 'label',
  field: {
    disabled: false,
  },
  children: undefined,
  className: undefined,
  htmlFor: undefined,
}

export { Label as component }
export default withTheme(Label)
