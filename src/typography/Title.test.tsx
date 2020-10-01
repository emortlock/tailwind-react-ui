import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawTitle as Title } from './Title'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Title {...props}>Title</Title>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Title', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ size: 3 })

    expect(asFragment()).toMatchSnapshot()
  })
})
