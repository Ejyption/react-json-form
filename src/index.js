import styles from './styles.module.scss'
import React, { useRef, createRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import FormButtons from './buttons'
import Input from './input'
import FormError from './formError'
export { default as Input } from './input'

const Form = ({ submit, cancel, inputs, submitButtonOptions, mode }) => {
  const inputsRef = useRef(inputs.map((input) => createRef()))
  const [loading, setLoading] = useState(false)
  const [formError, setFormError] = useState(null)

  const getAllFormData = () => {
    const formData = {}
    for (let i = 0; i < inputsRef.current.length; i++) {
      const { name, value } = inputsRef.current[i].current.getValue()
      formData[name] = value
    }
    return formData
  }

  const validateAllInputs = () => {
    let hasError = false
    for (let i = 0; i < inputsRef.current.length; i++) {
      const err = inputsRef.current[i].current.validateInput()
      if (err) {
        if (!hasError) {
          const t = inputsRef.current[i].current.getOffsetTop()
          scrollTo(t)
        }
        hasError = true
      }
    }
    return hasError
  }

  const scrollTo = (t) => {
    window.scrollTo({
      top: t - 20,
      behavior: 'smooth'
    })
  }

  const formRef = useRef()
  useEffect(() => {
    if (formError) {
      const top = formRef.current.offsetTop
      console.log(top)
      scrollTo(top)
    }
  }, [formError])

  const onSubmit = (event) => {
    event.preventDefault()
    if (loading) return false
    if (validateAllInputs()) return false
    setLoading(true)
    setFormError(null)
    const formData = getAllFormData()
    submit(formData, (err, data) => {
      setLoading(false)
      setFormError(err)
    })
  }

  return (
    <form
      data-test='formComponent'
      className={styles.wrapper}
      onSubmit={onSubmit}
      ref={formRef}
    >
      <FormError formError={formError} />
      {inputs.map((input, k) => (
        <Input
          data-test={input.name}
          key={k}
          ref={inputsRef.current[k]}
          mode={mode}
          {...input}
        />
      ))}
      <FormButtons
        submitButtonOptions={submitButtonOptions}
        loading={loading}
        onCancel={cancel}
      />
    </form>
  )
}

Form.defaultProps = {
  inputs: [],
  mode: 'light',
  submit: (fD, cb) => {
    console.log('Form Submitted', fD)
    setTimeout(() => {
      cb(new Error("You don't have a submit function"), null)
    }, 1000)
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  cancel: PropTypes.func,
  mode: PropTypes.oneOf(['light', 'dark']),
  inputs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string.isRequired,
      value: PropTypes.any,
      type: PropTypes.oneOf([
        'text',
        'textarea',
        'number',
        'password',
        'email',
        'date',
        'time',
        'select',
        'toggle',
        'yesNo',
        'checklist'
      ]),
      beforeDate: PropTypes.string,
      afterDate: PropTypes.string,
      required: PropTypes.bool,
      mustMatch: PropTypes.any
    })
  )
}

export default Form
