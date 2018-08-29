import React from 'react'
import { shallow } from 'enzyme'

import SkipLink from '../SkipLink'

const setup = (testProps = {}) => {
  const props = Object.assign(testProps)

  const wrapper = shallow(<SkipLink {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('SkipLink', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
