import React from 'react'
import PropTypes from 'prop-types'

import Base from './Base'
import { propTypes } from '../tailwind'
import { getAsArray } from '../utils'

const Text = ({
  children,
  is,
  bold,
  font,
  text,
  color,
  size,
  weight,
  tight,
  loose,
  leading,
  ...rest
}) => {
  const fontValue = [...getAsArray(font), bold ? 'bold' : weight]
  const textValue = [...getAsArray(text), color, size]
  let leadingValue = leading
  if (tight || loose) {
    leadingValue = tight ? 'tight' : 'loose'
  }

  return (
    <Base
      is={is}
      font={fontValue.filter(value => !!value)}
      text={textValue.filter(value => !!value)}
      leading={leadingValue}
      {...rest}
    >
      {children}
    </Base>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),
  font: propTypes.font,
  text: propTypes.text,
  bold: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  leading: propTypes.leading,
  tight: PropTypes.bool,
  loose: PropTypes.bool,
}

Text.defaultProps = {
  children: undefined,
  is: 'span',
  font: undefined,
  text: undefined,
  bold: false,
  color: undefined,
  size: undefined,
  weight: undefined,
  leading: 'normal',
  tight: false,
  loose: false,
}

export default Text
