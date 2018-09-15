import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { Text } from '../primitives'
import { propTypes } from '../tailwind'
import { getAsArray } from '../utils'

const Paragraph = ({
  theme,
  children,
  is,
  size,
  lead,
  brand,
  paragraph,
  text,
  ...rest
}) => (
  <Text
    is={is}
    text={[
      (size || lead) &&
        theme.text.size.body[(lead ? theme.text.size.body.length : size) - 1],
      ...getAsArray(text),
    ]}
    m={{ b: theme.spacing.md }}
    {...rest}
  >
    {children}
  </Text>
)

Paragraph.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  lead: PropTypes.bool,
  brand: PropTypes.bool,
  paragraph: PropTypes.bool,
  text: propTypes.text,
}

Paragraph.defaultProps = {
  children: undefined,
  is: 'p',
  size: undefined,
  paragraph: false,
  lead: false,
  brand: false,
  text: undefined,
}

export { Paragraph as component }
export default withTheme(Paragraph)
