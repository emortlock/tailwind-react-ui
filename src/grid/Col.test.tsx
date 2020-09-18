import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawCol as Col } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Col {...props}>Content</Col>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Col', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({
      size: { def: 'full', sm: '1/2', md: '1/4' },
    })

    expect(asFragment()).toMatchSnapshot()
  })
})
