import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawNavToggle as NavToggle } from './NavToggle'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    {
      header: { onToggle: jest.fn(), style: { text: 'white' } },
      theme: defaultTheme,
    },
    testProps,
  )

  const wrapper = render(<NavToggle {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('NavToggle', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
