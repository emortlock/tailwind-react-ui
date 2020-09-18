import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawContainer as Container } from './Container'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Container {...props}>Content</Container>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Container', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ padding: 'lg' })

    expect(asFragment()).toMatchSnapshot()
  })
})
