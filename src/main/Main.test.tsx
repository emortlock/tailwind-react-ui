import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Main } from './Main'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(testProps)

  const wrapper = render(<Main {...props}>Lorem ipsum</Main>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Main', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
