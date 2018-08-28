import React from 'react'
import PropTypes from 'prop-types'

import ContentBlock from './ContentBlock'

const Article = ({ is, ...rest }) => <ContentBlock is={is} {...rest} />

Article.propTypes = {
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
}

Article.defaultProps = {
  is: 'article',
}

export default Article
