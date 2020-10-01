import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawOptionInput as OptionInput } from './OptionInput'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, name: 'test', value: 'test-1', label: 'Test?' },
    testProps,
  )

  const wrapper = render(<OptionInput {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('OptionInput', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ defaultChecked: true })

    expect(asFragment()).toMatchSnapshot()
  })
})
