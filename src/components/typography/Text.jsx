import React from 'react'
import PropTypes from 'prop-types'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Text = ({
  theme,
  children,
  is,
  size,
  lead,
  bold,
  italic,
  brand,
  paragraph,
  ...rest
}) => {
  const isParagraph = is === 'p' || paragraph

  return (
    <BaseComponent
      is={is}
      leading="normal"
      font={[theme.text.family.body, bold && 'bold']}
      text={[
        theme.text.size.body[(lead ? theme.text.size.body.length : size) - 1],
        !brand && `text-${theme.textColors.body}`,
      ]}
      m={isParagraph ? { b: theme.spacing.md } : undefined}
      italic={italic || undefined}
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
  bold: PropTypes.bool,
  italic: PropTypes.bool,
  brand: PropTypes.bool,
  paragraph: PropTypes.bool,
}

Text.defaultProps = {
  children: undefined,
  is: 'span',
  size: 2,
  paragraph: false,
  lead: false,
  bold: false,
  italic: false,
  brand: false,
}

export { Text as component }
export default withTheme(Text)
