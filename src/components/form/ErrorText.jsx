import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '../primitives'
import { DangerText } from '../typography'

/**
 * @see Renders as [DangerText](#dangertext) component by default
 */
const ErrorText = ({ field: { errorId }, is, ...rest }) => (
  <Box is={is} id={errorId} aria-live="assertive" {...rest} />
)

ErrorText.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  field: PropTypes.shape({
    errorId: PropTypes.string,
  }),
  size: PropTypes.number,
}

ErrorText.defaultProps = {
  is: DangerText,
  field: {},
  size: 1,
}

export default ErrorText
