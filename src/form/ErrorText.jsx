import React from 'react'
import PropTypes from 'prop-types'

const ErrorText = ({ field: { errorId }, ...rest }) => (
  <div id={errorId} aria-live="assertive" {...rest} />
)

ErrorText.propTypes = {
  field: PropTypes.shape({
    errorId: PropTypes.string,
  }),
}

ErrorText.defaultProps = {
  field: {},
}

export default ErrorText
