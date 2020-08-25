import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Base } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Base {...props}>Hello World</Base>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Base', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ focusable: true })

    expect(asFragment()).toMatchSnapshot()
  })
})
