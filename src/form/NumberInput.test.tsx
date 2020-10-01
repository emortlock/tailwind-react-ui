import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawNumberInput as NumberInput } from './NumberInput'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'username' },
    testProps,
  )

  const wrapper = render(<NumberInput {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('NumberInput', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
