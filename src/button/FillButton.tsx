import type { ButtonProps } from './Button'

import React from 'react'

import { Button } from './Button'

export type FillButtonProps = Omit<ButtonProps, 'theme' | 'buttonStyle'>

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `fill`.
 */
export const FillButton = (props: FillButtonProps) => (
  <Button {...props} buttonStyle="fill" />
)
