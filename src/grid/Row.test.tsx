import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawRow as Row } from './Row'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<Row {...props} />)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Row', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ gutter: true })

    expect(asFragment()).toMatchSnapshot()
  })
})
