import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../typography'
import { VisuallyHidden } from '../visuallyHidden'

const ContentTitle = ({ content: { id }, visuallyHidden, ...rest }) =>
  !visuallyHidden ? (
    <Title id={id} {...rest} />
  ) : (
    <VisuallyHidden>
      <Title id={id} {...rest} />
    </VisuallyHidden>
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
