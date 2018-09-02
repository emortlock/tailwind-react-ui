import React from 'react'
import { shallow } from 'enzyme'

import { component as NavBrand } from '../NavBrand'
import { defaultTheme } from '../../theme'

const setup = (testProps = {}) => {
  const props = Object.assign(
    { theme: defaultTheme, header: { style: { text: 'white' } } },
    testProps,
  )

  const wrapper = shallow(<NavBrand {...props}>Tailwind React UI</NavBrand>)

  return {
    props,
    wrapper,
  }
}

describe('NavBrand', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
