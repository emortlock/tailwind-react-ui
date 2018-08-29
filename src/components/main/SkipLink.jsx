import React from 'react'
import PropTypes from 'prop-types'

import { VisuallyHidden } from '../visuallyHidden'
import { FillButton } from '../button'

const SkipLink = ({ children, href, ...rest }) => (
  <VisuallyHidden focusable>
    <FillButton
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      is={props => <a href={href} {...props} />}
      bg="white"
      text="black"
      absolute
      rounded="br"
      shadow
      {...rest}
    >
      {children || 'Skip to main content'}
    </FillButton>
  </VisuallyHidden>
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
