import type { ButtonProps } from '../button'
import type { WithHeader } from './Header'

import React from 'react'

import { Box } from 'tailwind-react-primitives'
import { RawButton as Button } from '../button'
import { withTheme } from '../theme'

const Bar: React.FC = () => (
  <Box inlineBlock border="b" style={{ borderColor: 'currentColor' }} />
)

export interface NavToggleProps<E extends HTMLElement = HTMLButtonElement>
  extends ButtonProps<E>,
    WithHeader {}

export const RawNavToggle = <E extends HTMLElement = HTMLButtonElement>({
  theme,
  children,
  onClick,
  header: { onToggle, style, id, screen } = {
    id: 'header',
    screen: 'lg',
    style: {},
  },
  ...rest
}: NavToggleProps<E>) => {
  const handleClick = (e: React.MouseEvent<E>) => {
    if (onToggle) onToggle()
    if (onClick) onClick(e)
  }

  const responsive = screen
    ? {
        [`hidden-${screen}`]: true,
      }
    : {}

  return (
    <Button<E>
      theme={theme}
      w={12}
      h={12}
      p={0}
      block
      onClick={handleClick}
      aria-label="Open menu"
      aria-haspopup="true"
      aria-controls={`${id}-nav`}
      text={style?.text || theme.textColors.on.primary}
      bg-hocus={style?.text || theme.textColors.on.primary}
      text-hocus={style?.bg || theme.brandColors.primary}
      {...responsive}
      {...rest}
    >
      {children || (
        <Box
          flex={[true, 'col']}
          items="stretch"
          justify="around"
          h="full"
          p={3}
        >
          <Bar />
          <Bar />
          <Bar />
        </Box>
      )}
    </Button>
  )
}

export const NavToggle = withTheme(RawNavToggle)
