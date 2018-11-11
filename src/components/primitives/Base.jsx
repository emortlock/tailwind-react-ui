import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { filterProps } from '../utils'
import { getTailwindClassNames, tailwindProps, propTypes } from '../tailwind'

const Base = ({
  theme,
  is,
  children,
  className,
  focusable,
  innerRef,
  ...rest
}) => {
  const Component = is

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        getTailwindClassNames(
          {
            ...rest,
            'outine-focus': 'none',
            'shadow-focus': 'outline',
          },
          { prefix: theme.prefix },
        ),
        className,
      )}
      ref={innerRef}
    >
      {children}
    </Component>
  )
}

Base.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  children: PropTypes.node,
  className: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ...propTypes,
}

Base.defaultProps = {
  is: 'div',
  children: undefined,
  className: undefined,
  innerRef: undefined,
}

export { Base as component }
export default withTheme(Base)
