import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawSelect as Select } from './Select'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    {
      theme: defaultTheme,
      name: 'username',
      options: [
        { value: 'one', label: 'single' },
        { value: 'two', label: 'double' },
      ],
    },
    testProps,
  )

  const wrapper = render(<Select {...props} />)

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
