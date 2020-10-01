import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawCard as Card } from './Card'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Card {...props}>Hello World!</Card>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Card', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
