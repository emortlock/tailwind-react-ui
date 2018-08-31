import React from 'react'
import { shallow } from 'enzyme'

import { defaultTheme } from '../../theme'
import { component as SiteWrap } from '../SiteWrap'
import { Header } from '../../header'
import { Footer } from '../../footer'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme }, testProps)

  const wrapper = shallow(
    <SiteWrap {...props}>
      <Header>Header</Header>
      <p>Body</p>
      <Footer>Footer</Footer>
    </SiteWrap>,
  )

  return {
    props,
    wrapper,
  }
}

describe('SiteWrap', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
