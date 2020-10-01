import type { ButtonProps } from './Button'

import React from 'react'

import { Button } from './Button'

export type TextButtonProps = Omit<ButtonProps, 'theme' | 'buttonStyle'>

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `text`.
 */
export const TextButton = (props: TextButtonProps) => (
  <Button {...props} buttonStyle="text" />
)
