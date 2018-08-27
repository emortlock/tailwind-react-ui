import React from 'react'
import PropTypes from 'prop-types'

import { DangerText } from '../typography'

const ErrorText = ({ field: { errorId }, ...rest }) => (
  <DangerText id={errorId} {...rest} />
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
