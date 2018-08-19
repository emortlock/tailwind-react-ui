import React from 'react'
import { shallow } from 'enzyme'

import { component as NavToggle } from '../NavToggle'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { header: { onToggle: jest.fn() }, config: defaultConfig },
    testProps,
  )

  const wrapper = shallow(<NavToggle {...props} />)

  return {
    props,
    wrapper,
  }
}

describe('NavToggle', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
