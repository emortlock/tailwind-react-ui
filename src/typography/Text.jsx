import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { withTheme } from '../theme'
import {
  getTailwindClassNames,
  tailwindProps,
  tailwindPropTypes,
} from '../tailwind'
import { filterProps } from '../utils'

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
  const Component = is
  const userClassNames = classnames(getTailwindClassNames(rest), className)

  const isParagraph = is === 'p' || paragraph

  return (
    <Component
      {...filterProps(rest, tailwindProps)}
      className={classnames(
        'leading-normal',
        `font-${theme.text.family.body}`,
        `text-${
          theme.text.size.body[(lead ? theme.text.size.body.length : size) - 1]
        }`,
        !brand && `text-${theme.textColors.body}`,
        isParagraph && `mb-${theme.spacing.md}`,
        bold && 'font-bold',
        italic && 'italic',
        userClassNames,
      )}
    >
      {children}
    </Component>
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
  ...tailwindPropTypes,
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
