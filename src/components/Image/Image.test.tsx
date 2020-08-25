import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { Image } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ src: '/static/assets/tubgirl.gif' }, testProps)

  const wrapper = render(<Image {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Image', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
