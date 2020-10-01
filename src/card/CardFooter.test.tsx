import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawCardFooter as CardFooter } from './'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(testProps)

  const wrapper = render(<CardFooter {...props}>Hello World!</CardFooter>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('CardFooter', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
