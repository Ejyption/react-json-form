import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from './../../Utils'
import Buttons from './index'

const setUpButtons = (props = {}) => {
  return shallow(<Buttons {...props} />)
}

describe('Buttons Component', () => {
  let component
  beforeEach(() => {
    component = setUpButtons()
  })
  it('Should render without errors', () => {
    const res = findByTestAtrr(component, 'buttonsComponent')
    expect(res.length).toBe(1)
  })
  it('Should not render loading', () => {
    const res = findByTestAtrr(component, 'loadingComponent')
    expect(res.length).toBe(0)
  })
  it('Should render Submit Text', () => {
    const res = findByTestAtrr(component, 'submitText')
    expect(res.length).toBe(1)
  })
  it('Should not render Cancel Button', () => {
    const res = findByTestAtrr(component, 'cancelButton')
    expect(res.length).toBe(0)
  })
})

describe('Buttons Component Loading', () => {
  let component
  beforeEach(() => {
    component = setUpButtons({ loading: true })
  })
  it('Should render loading', () => {
    const res = findByTestAtrr(component, 'loadingComponent')
    expect(res.length).toBe(1)
  })
  it('Should not render Submit Text', () => {
    const res = findByTestAtrr(component, 'submitText')
    expect(res.length).toBe(0)
  })
})

describe('Buttons Component with Cancel Button', () => {
  it('Should render Cancel Button', () => {
    const component = setUpButtons({ onCancel: () => {} })
    const res = findByTestAtrr(component, 'cancelButton')
    expect(res.length).toBe(1)
  })
  it('Should not render Cancel Button and throw warning', () => {
    const component = setUpButtons({ onCancel: 88 })
    const res = findByTestAtrr(component, 'cancelButton')
    expect(res.length).toBe(0)
  })
})

describe('Buttons Component check props', () => {
  it('Should not throw warnings', () => {
    const propsError = checkProps(Buttons, {
      loading: true,
      onCancel: () => {}
    })
    expect(propsError).toBeUndefined()
  })
  it('Should throw warning for loading', () => {
    const propsError = checkProps(Buttons, {
      loading: 166
    })
    expect(propsError.search('loading')).toBeGreaterThan(-1)
  })
  it('Should throw warning for onCancel', () => {
    const propsError = checkProps(Buttons, {
      onCancel: true
    })
    expect(propsError.search('onCancel')).toBeGreaterThan(-1)
  })
})
