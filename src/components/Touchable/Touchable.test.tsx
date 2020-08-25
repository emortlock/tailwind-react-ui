import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Touchable } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Touchable {...props}>Hello World</Touchable>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Touchable', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
