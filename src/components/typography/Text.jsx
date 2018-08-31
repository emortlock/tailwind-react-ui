import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent, propTypes } from '../tailwind'
import { getAsArray } from '../utils'

const Text = ({
  theme,
  children,
  is,
  size,
  lead,
  brand,
  paragraph,
  text,
  bold,
  ...rest
}) => {
  const isParagraph = is === 'p' || paragraph
  return (
    <BaseComponent
      is={is}
      font={bold ? 'bold' : undefined}
      text={[
        (size || lead) &&
          theme.text.size.body[(lead ? theme.text.size.body.length : size) - 1],
        ...getAsArray(text),
      ]}
      m={isParagraph ? { b: theme.spacing.md } : undefined}
      {...rest}
    >
      {children}
    </BaseComponent>
  )
}

Text.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  size: PropTypes.number,
  lead: PropTypes.bool,
  brand: PropTypes.bool,
  paragraph: PropTypes.bool,
  text: propTypes.text,
  bold: PropTypes.bool,
}

Text.defaultProps = {
  children: undefined,
  is: 'span',
  size: undefined,
  paragraph: false,
  lead: false,
  brand: false,
  text: undefined,
  bold: false,
}

export { Text as component }
export default withTheme(Text)
