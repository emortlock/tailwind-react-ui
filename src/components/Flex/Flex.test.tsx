import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Flex } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Flex {...props}>Hello World</Flex>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Flex', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
