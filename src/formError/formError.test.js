import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr, checkProps } from '../../Utils'
import FormError from './index'

const setUpFormError = (props = {}) => {
  return shallow(<FormError {...props} />)
}

describe('FormError Component', () => {
  it('Should not render', () => {
    const component = setUpFormError()
    const res = findByTestAtrr(component, 'formErrorWrapper')
    expect(res.length).toBe(0)
  })
  it('Should render without errors', () => {
    const component = setUpFormError({ formError: new Error('POOP') })
    const res = findByTestAtrr(component, 'formErrorWrapper')
    expect(res.length).toBe(1)
  })
  it('Should render with warning', () => {
    const props = { formError: 'POOP' }
    const propsError = checkProps(FormError, props)
    expect(propsError.search('formError')).toBeGreaterThan(-1)
  })
  it('Should render without warnings', () => {
    const props = { formError: new Error('POOP') }
    const propsError = checkProps(FormError, props)
    expect(propsError).toBeUndefined()
  })
})
