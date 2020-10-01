import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawFooter as Footer } from '../Footer'
import { defaultTheme } from '../../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Footer {...props}>&copy; E Corp</Footer>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Footer', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
