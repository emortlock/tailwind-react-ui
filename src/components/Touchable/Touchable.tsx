import type { ReactButtonProps, HTMLButtonProps } from '../../types'
import type { BaseProps } from '../Base'

import React, { PureComponent } from 'react'

import { Base } from '../Base'

const focusableElements = ['input', 'select', 'textarea', 'button', 'a']

interface TouchableProps extends BaseProps, ReactButtonProps {
  onTouch?: (e: React.MouseEvent | React.KeyboardEvent) => void
}

class Touchable extends PureComponent<TouchableProps> {
  constructor(props: TouchableProps) {
    super(props)

    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(e: React.KeyboardEvent) {
    const { onTouch } = this.props
    if (
      onTouch &&
      (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')
    ) {
      e.preventDefault()
      onTouch(e)
    }
  }

  render() {
    const {
      as = 'button',
      children,
      tabIndex,
      disabled = false,
      onTouch,
      ...rest
    } = this.props

    const isSemantic = typeof as === 'string' && focusableElements.includes(as)

    return (
      <Base<HTMLButtonElement, HTMLButtonProps>
        as={as}
        select="none"
        cursor={disabled ? 'default' : 'pointer'}
        pointerEvents={disabled ? 'none' : undefined}
        focusable
        role={!isSemantic ? 'button' : undefined}
        tabIndex={tabIndex || (!isSemantic && !disabled ? 0 : undefined)}
        opacity={disabled ? 50 : undefined}
        disabled={disabled}
        aria-disabled={disabled || undefined}
        onClick={onTouch}
        onKeyPress={!isSemantic && !disabled ? this.handleKeyPress : undefined}
        {...rest}
      >
        {children}
      </Base>
    )
  }
}

export default Touchable
