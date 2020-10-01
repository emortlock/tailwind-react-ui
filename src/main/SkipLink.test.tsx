import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawSkipLink as SkipLink } from './SkipLink'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<SkipLink {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('SkipLink', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
