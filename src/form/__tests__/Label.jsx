import React from 'react'
import { shallow } from 'enzyme'

import { component as Label } from '../Label'
import { defaultConfig } from '../../config'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { config: defaultConfig, htmlFor: 'input' },
    testProps,
  )

  const wrapper = shallow(<Label {...props}>Username</Label>)

  return {
    props,
    wrapper,
  }
}

describe('Label', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
