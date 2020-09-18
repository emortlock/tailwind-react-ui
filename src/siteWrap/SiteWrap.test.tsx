import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { defaultTheme } from '../theme'
import { RawSiteWrap as SiteWrap } from './SiteWrap'
import { Header } from '../header'
import { Footer } from '../footer'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = render(
    <SiteWrap {...props}>
      <Header>Header</Header>
      <p>Body</p>
      <Footer>Footer</Footer>
    </SiteWrap>,
  )

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('SiteWrap', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
