import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawCardBody as CardBody } from './CardBody'
import { defaultTheme } from '../theme'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(<CardBody {...props}>Hello World!</CardBody>)

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('CardBody', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
