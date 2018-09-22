import React from 'react'
import { shallow } from 'enzyme'

import { component as OptionList } from '../OptionList'
import { defaultTheme } from '../../theme'

import { Radio } from '..'

const setup = (testProps = {}) => {
  const props = Object.assign({ theme: defaultTheme, name: 'test' }, testProps)

  const wrapper = shallow(
    <OptionList {...props}>
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
      <Radio value="maybe" label="Maybe" />
    </OptionList>,
  )

  return {
    props,
    wrapper,
  }
}

describe('OptionList', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
