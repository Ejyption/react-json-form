import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from './../Utils'
import Form from './index'

const shallowForm = (props = {}) => {
  return shallow(<Form {...props} />)
}

describe('Form', () => {
  const inputs = [
    { name: 'firstName', label: 'First Name' },
    { name: 'lastName', label: 'Last Name' }
  ]
  const component = shallowForm({ inputs })
  it('Should render without errors', () => {
    const res = findByTestAtrr(component, 'formComponent')
    expect(res.length).toEqual(1)
  })
  it('Should render input', () => {
    const res = findByTestAtrr(component, 'firstName')
    expect(res.length).toEqual(1)
  })
  it('Should have 1 ', () => {
    const res = findByTestAtrr(component, 'firstName')
    expect(res.length).toEqual(1)
  })
})
