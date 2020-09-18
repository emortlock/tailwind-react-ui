import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawList as List } from './List'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(
    <List inline {...props}>
      <span>One</span>
      <span>Two</span>
      <span>Three</span>
    </List>,
  )

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('List', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
