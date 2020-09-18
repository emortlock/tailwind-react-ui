import type { ButtonProps } from './Button'

import React from 'react'

import { Button } from './Button'

export type OutlineButtonProps = Omit<ButtonProps, 'theme' | 'buttonStyle'>

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `outline`.
 */
export const OutlineButton = (props: OutlineButtonProps) => (
  <Button {...props} buttonStyle="outline" />
)
