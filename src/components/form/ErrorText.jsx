import React from 'react'
import PropTypes from 'prop-types'

import { BaseComponent } from '../tailwind'

const ErrorText = ({ field: { errorId }, is, ...rest }) => (
  <BaseComponent is={is} id={errorId} aria-live="assertive" {...rest} />
)

ErrorText.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    errorId: PropTypes.string,
  }),
}

ErrorText.defaultProps = {
  is: 'div',
  field: {},
}

export default ErrorText
