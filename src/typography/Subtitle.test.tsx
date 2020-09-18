import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawSubtitle as Subtitle } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({}, testProps)

  const wrapper = render(<Subtitle {...props}>Subtitle</Subtitle>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Subtitle', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ size: 3 })

    expect(asFragment()).toMatchSnapshot()
  })
})
