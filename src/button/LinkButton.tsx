import type { ButtonProps } from './Button'

import React from 'react'

import { Button } from './Button'

export type LinkButtonProps = Omit<ButtonProps, 'theme' | 'buttonStyle'>

/**
 * @see See [Button](#button-2) for API. Sets `buttonStyle` prop to `link`.
 */
export const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} buttonStyle="link" />
)
