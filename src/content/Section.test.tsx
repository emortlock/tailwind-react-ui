import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawSection as Section } from './Section'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(testProps)

  const wrapper = render(<Section {...props}>Lorem ipsum...</Section>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Section', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
