import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Article } from './Article'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(testProps)

  const wrapper = render(<Article {...props}>Lorem ipsum...</Article>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Article', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
