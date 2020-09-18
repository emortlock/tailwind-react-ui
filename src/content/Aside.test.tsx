import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Aside } from './Aside'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(testProps)

  const wrapper = render(<Aside {...props}>Lorem ipsum...</Aside>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Aside', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
