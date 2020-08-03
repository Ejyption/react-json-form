import styles from './styles.module.scss'
import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  memo,
  useMemo,
  useCallback
} from 'react'
import { getInputType } from './inputSelect'
import PropTypes from 'prop-types'
import Label from './label'
import { validateInput } from './validation'
import InputError from './inputError'

const Input = forwardRef((props, ref) => {
  const [inputValue, setInputValue] = useState(props.value)
  const [error, setError] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const [touched, setTouched] = useState(false)
  const validate = () => {
    if (!touched) setTouched(true)
    else {
      const { err, message } = validateInput(inputValue, props)
      if (err !== error) setError(err)
      if (errorMessage !== message) setErrorMessage(message)
      return !!err
    }
  }
  useEffect(() => {
    if (props.onChange) props.onChange(inputValue)
    validate()
  }, [inputValue])

  function returnValue() {
    return { name: props.name, value: inputValue }
  }
  const wrapperRef = useRef()
  const getOffsetTop = () => {
    return wrapperRef.current.offsetTop
  }
  const focus = useCallback(() => {
    inputRef.current.focus()
  }, [])
  const inputRef = useRef()
  useEffect(() => {
    if (props.autoFocus) focus()
  }, [])
  useImperativeHandle(ref, () => ({
    focus: focus,
    validateInput: validate,
    getValue: returnValue,
    getOffsetTop: getOffsetTop,
    overrideValue: setInputValue
  }))

  const InputInner = useMemo(() => getInputType(props.type), [props.type])

  let className = `${styles.wrapper} ${styles[props.mode]} `
  if (props.width) className += ` ${styles[props.width]}`

  return (
    <div className={className} ref={wrapperRef}>
      <div className={styles.labelAndError}>
        <Label focus={focus} label={props.label} required={props.required} />
        <InputError mode={props.mode} error={error} />
      </div>
      <div className={styles.inputWrapper}>
        <InputInner
          error={!!error}
          ref={inputRef}
          {...props}
          onChange={setInputValue}
          // override JSON value provided so we can modify in our controlled environment
          value={inputValue}
        />
      </div>
      <div className={styles.errorMessage}>{errorMessage}</div>
      <div className={styles.helper}>{props.helper}</div>
    </div>
  )
})

Input.defaultProps = {
  type: 'text'
}

Input.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
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
  afterDate: PropTypes.string
}

export default memo(Input)
