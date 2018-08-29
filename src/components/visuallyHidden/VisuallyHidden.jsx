import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { BaseComponent } from '../tailwind'

const VisuallyHidden = ({ is, focusable, className, ...rest }) => (
  <BaseComponent
    is={is}
    className={classnames(
      focusable ? 'visually-hidden-focusable' : 'visually-hidden',
      className,
    )}
    {...rest}
  />
)

VisuallyHidden.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  focusable: PropTypes.bool,
  className: PropTypes.string,
}

VisuallyHidden.defaultProps = {
  is: 'span',
  focusable: false,
  className: undefined,
}

export default VisuallyHidden
