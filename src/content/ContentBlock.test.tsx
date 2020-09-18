import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawContentBlock as ContentBlock } from './ContentBlock'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<ContentBlock {...props}>Lorem ipsum...</ContentBlock>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('ContentBlock', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
