import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { RawOptionList as OptionList } from './OptionList'
import { defaultTheme } from '../theme'

import { Radio } from '.'

const setup = (
  testProps = {},
): [RenderResult, { props: Record<string, any> }] => {
  const props = Object.assign({ theme: defaultTheme, name: 'test' }, testProps)

  const wrapper = render(
    <OptionList {...props}>
      <Radio name="option-input" value="yes" label="Yes" />
      <Radio name="option-input" value="no" label="No" />
      <Radio name="option-input" value="maybe" label="Maybe" />
    </OptionList>,
  )

  return [
    wrapper,
    {
      props,
    },
  ]
}

describe('OptionList', () => {
  it('renders matching snapshot', () => {
    const [{ asFragment }] = setup()

    expect(asFragment()).toMatchSnapshot()
  })
})
