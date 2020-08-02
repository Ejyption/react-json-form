import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from './../../../../Utils'
import TextInput from './index'

const setUpTextInput = (props = {}) => {
  return shallow(<TextInput {...props} />)
}

describe('TextInput Component', () => {
  const expectedProps = {
    value: 'Abc',
    name: 'firstName',
    placeholder: 'Blah',
    onChange: () => {}
  }
  it('Should render input element', () => {
    const component = setUpTextInput(expectedProps)
    const res = findByTestAtrr(component, 'inputElement')
    expect(res.length).toEqual(1)
  })
  it('Should render input element with value Abc', () => {
    const component = setUpTextInput(expectedProps)
    const value = findByTestAtrr(component, 'inputElement').props().value
    expect(value).toEqual('Abc')
  })
  it('Should have className that does not include error', () => {
    const component = setUpTextInput(expectedProps)
    const className = findByTestAtrr(component, 'inputElement').props()
      .className
    expect(className.search('error')).toBe(-1)
  })
  it('Should have className that includes error', () => {
    expectedProps.error = true
    const component = setUpTextInput(expectedProps)
    const className = findByTestAtrr(component, 'inputElement').props()
      .className
    expect(className.search('error')).toBeGreaterThan(-1)
  })
})

describe('TextInput Component prop types', () => {
  it('Should compile without warning', () => {
    const expectedProps = {
      value: 'Abc',
      name: 'firstName',
      placeholder: 'Blah',
      onChange: () => {},
      required: true
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError).toBeUndefined()
  })
  it('Should compile with warning', () => {
    const expectedProps = {
      value: 'Abc',
      name: 'firstName',
      placeholder: 'Blah',
      onChange: () => {},
      required: 'Hello'
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError.search('required')).toBeGreaterThan(0)
  })
  it('Should compile with warning', () => {
    const expectedProps = {
      value: 'Abc',
      placeholder: 'Blah',
      onChange: () => {},
      required: true
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError.search('name')).toBeGreaterThan(0)
  })
  it('Should compile with warning', () => {
    const expectedProps = {
      value: 'Abc',
      name: 'firstName',
      placeholder: 12,
      onChange: () => {},
      required: true
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError.search('placeholder')).toBeGreaterThan(0)
  })
  it('Should compile with warning', () => {
    const expectedProps = {
      value: 'Abc',
      name: 'firstName',
      placeholder: 'First Name is ?',
      required: true
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError.search('onChange')).toBeGreaterThan(0)
  })
  it('Should compile with warning', () => {
    const expectedProps = {
      value: 12,
      name: 'firstName',
      placeholder: 'First Name is ?',
      onChange: () => {},
      required: true
    }
    const propsError = checkProps(TextInput.type, expectedProps)
    expect(propsError.search('value')).toBeGreaterThan(0)
  })
})
