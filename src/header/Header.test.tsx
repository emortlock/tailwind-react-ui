import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawHeader as Header } from './Header'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Header {...props}>Content</Header>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Header', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ bg: 'blue-400', text: 'white' })

    expect(asFragment()).toMatchSnapshot()
  })
})
