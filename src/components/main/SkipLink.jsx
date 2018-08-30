import React from 'react'
import PropTypes from 'prop-types'

import { FillButton } from '../button'

const SkipLink = ({ children, href, ...rest }) => (
  <span className="visually-hidden-focusable">
    <FillButton
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      is={props => <a href={href} {...props} />}
      bg="white"
      text="black"
      absolute
      rounded="none"
      {...rest}
    >
      {children || 'Skip to main content'}
    </FillButton>
  </span>
)

SkipLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
}

SkipLink.defaultProps = {
  children: undefined,
  href: '#main',
}

export default SkipLink
