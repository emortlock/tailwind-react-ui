import { BoxProps } from 'tailwind-react-primitives'
import { WithTheme, Theme } from '../theme'

import React from 'react'

import { RawBox as Box, Flex, filterProps } from 'tailwind-react-primitives'
import { withTheme } from '../theme'
import { getUniqueID } from '../utils'
import { RawContainer as Container } from '../container'

export interface WithHeader {
  header?: {
    id?: string
    style?: {
      bg?: string | string[]
      text?: string | string[]
    }
    isOpen?: boolean
    isCollapsable?: boolean
    onToggle?: (forceState?: boolean) => void
    screen?: string
  }
}

export interface HeaderProps<E extends HTMLElement = HTMLDivElement>
  extends WithTheme,
    BoxProps<E> {
  screen?: keyof Theme['breakpoints']
}

export const RawHeader = <E extends HTMLElement = HTMLDivElement>({
  theme,
  id,
  screen = 'lg',
  as = 'header',
  children,
  bg,
  text,
  ...rest
}: HeaderProps<E>) => {
  const [isOpen, setOpen] = React.useState(false)
  const [isCollapsable, setCollapsable] = React.useState(false)

  const [headerId, setHeaderId] = React.useState(id)
  React.useEffect(() => {
    if (headerId) return

    setHeaderId(getUniqueID('neader'))
  })

  const mql = React.useRef<MediaQueryList | undefined>()
  const handleMatch = React.useCallback(
    (mql: MediaQueryList | MediaQueryListEvent) => {
      setCollapsable(!mql.matches)
    },
    [],
  )
  React.useEffect(() => {
    if (screen && window.matchMedia) {
      mql.current = window.matchMedia(
        `(min-width: ${theme.breakpoints[screen]})`,
      )
      mql.current.addEventListener('change', handleMatch)

      if (mql.current.matches) {
        handleMatch(mql.current)
      }
    }

    return () => {
      if (mql.current) mql.current.removeEventListener('change', handleMatch)
    }
  }, [])

  const handleToggle = React.useCallback((forceState?: boolean) => {
    setOpen(forceState ?? ((currentState) => !currentState))
  }, [])

  const bgStyle = bg || theme.brandColors.primary
  const textStyle = text || theme.textColors.on.primary

  const headerProps: WithHeader['header'] = {
    id: headerId ?? '',
    style: {
      bg: bgStyle,
      text: textStyle,
    },
    isOpen,
    isCollapsable,
    onToggle: handleToggle,
    screen,
  }

  return (
    <Box<E>
      as={as}
      id={headerId}
      bg={bgStyle}
      text={textStyle}
      p={{ y: theme.spacing.md }}
      role="banner"
      {...filterProps(rest, ['id'])}
    >
      <Container<HTMLDivElement>
        theme={theme}
        as={(props) => <Flex {...props} wrap />}
        items="center"
        justify="between"
        padding
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement<WithHeader>(child, { header: headerProps })
            : child,
        )}
      </Container>
    </Box>
  )
}

export const Header = withTheme(RawHeader)
