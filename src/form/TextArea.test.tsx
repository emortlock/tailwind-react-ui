import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawTextArea as TextArea } from './TextArea'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = render(<TextArea {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('TextArea', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
