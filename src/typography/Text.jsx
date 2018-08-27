import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import { BaseComponent } from '../tailwind'

const Text = ({
  theme,
  children,
  className,
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
      {...rest}
      is={is}
      leading="normal"
      font={[theme.text.family.body, bold && 'bold']}
      text={[
        theme.text.size.body[(lead ? theme.text.size.body.length : size) - 1],
        !brand && `text-${theme.textColors.body}`,
      ]}
      m={isParagraph ? { b: theme.spacing.md } : undefined}
      className={classnames(italic && 'italic', className)}
    >
      {children}
    </BaseComponent>
  )
}

Text.propTypes = {
  theme: PropTypes.shape({}).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
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
  className: undefined,
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
