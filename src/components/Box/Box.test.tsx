import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Box } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Box {...props}>Hello World</Box>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Box', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
