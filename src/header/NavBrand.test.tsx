import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawNavBrand as NavBrand } from './NavBrand'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign(
    { theme: defaultTheme, header: { style: { text: 'white' } } },
    testProps,
  )

  const wrapper = render(<NavBrand {...props}>Tailwind React UI</NavBrand>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('NavBrand', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
