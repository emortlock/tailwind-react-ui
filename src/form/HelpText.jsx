import React from 'react'
import PropTypes from 'prop-types'

const HelpText = ({ field: { helpId }, ...rest }) => (
  <div id={helpId} {...rest} />
)

HelpText.propTypes = {
  field: PropTypes.shape({
    helpId: PropTypes.string,
  }),
}

HelpText.defaultProps = {
  field: {},
}

export default HelpText
