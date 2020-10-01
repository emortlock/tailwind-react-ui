import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawButton as Button } from './Button'

import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Button {...props}>Submit</Button>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Button', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({
      buttonStyle: 'fill',
      bg: 'blue-400',
      text: 'white',
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
