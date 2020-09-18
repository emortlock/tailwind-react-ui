import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawTextInput as TextInput } from './TextInput'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = render(<TextInput {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('TextInput', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
