import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawParagraph as Paragraph } from './Paragraph'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(
    <Paragraph {...props}>Lorem ipsum dolor sit amet</Paragraph>,
  )

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('Paragraph', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup({ as: 'p' })

    expect(asFragment()).toMatchSnapshot()
  })
})
