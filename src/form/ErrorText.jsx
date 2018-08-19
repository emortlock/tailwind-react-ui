import React from 'react'
import PropTypes from 'prop-types'

import { DangerText } from '../typography'

const ErrorText = ({ field: { errorId }, ...rest }) => (
  <DangerText {...rest} id={errorId} />
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
