import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawLabel as Label } from './Label'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, htmlFor: 'input' },
    testProps,
  )

  const wrapper = render(<Label {...props}>Username</Label>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Label', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
