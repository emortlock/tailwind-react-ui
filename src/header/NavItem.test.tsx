import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawNavItem as NavItem } from './NavItem'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    {
      theme: defaultTheme,
      header: { style: { bg: 'blue-400', text: 'white' } },
    },
    testProps,
  )

  const wrapper = render(<NavItem {...props}>Link</NavItem>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('NavItem', () => {
  it('renders matching snapshot', () => {
    // eslint-disable-next-line
    const [{ asFragment }] = setup({
      as: (props: React.HTMLProps<HTMLAnchorElement>) => (
        // eslint-disable-next-line jsx-a11y/anchor-has-content
        <a {...props} href="#test" />
      ),
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
