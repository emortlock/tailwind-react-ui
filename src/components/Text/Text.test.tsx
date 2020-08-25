import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Text } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Text {...props}>Hello World</Text>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Text', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
