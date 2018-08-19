import React from 'react'
import { shallow } from 'enzyme'

import { component as Field } from '../Field'
import { defaultConfig } from '../../config'

import Label from '../Label'
import TextInput from '../TextInput'
import InfoText from '../../typography/InfoText'
import DangerText from '../../typography/DangerText'

const setup = (testProps = {}) => {
  const props = Object.assign({ config: defaultConfig }, testProps)

  const wrapper = shallow(
    <Field {...props}>
      <Label>Password</Label>
      <InfoText>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </InfoText>
      <TextInput name="password" type="password" />
      <DangerText alert>Please complete</DangerText>
    </Field>,
  )

  return {
    props,
    wrapper,
  }
}

describe('Field', () => {
  it('renders matching snapshot', () => {
    const { wrapper } = setup()

    expect(wrapper).toMatchSnapshot()
  })
})
