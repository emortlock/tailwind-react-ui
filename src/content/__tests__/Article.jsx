import React from 'react'
import { shallow } from 'enzyme'

import Article from '../Article'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<Article {...props}>Lorem ipsum...</Article>)

  return {
    props,
    wrapper,
  }
}

describe('Article', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
