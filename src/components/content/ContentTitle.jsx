import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../typography'

const ContentTitle = ({ content: { id }, visuallyHidden, ...rest }) => (
  <Title id={id} visuallyHidden={visuallyHidden} {...rest} />
)

ContentTitle.propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
  }),
  visuallyHidden: PropTypes.bool,
}

ContentTitle.defaultProps = {
  content: {},
  visuallyHidden: false,
}

export default ContentTitle
