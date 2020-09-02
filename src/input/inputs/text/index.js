import React, { useRef, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const TextInput = forwardRef(
  ({ name, placeholder, value, onChange, ...props }, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }))

    const blurred = () => {
      if (props.onBlur) props.onBlur(value)
    }

    let className = `${styles.textInput} ${styles[props.mode]}`
    if (props.error) className += ` ${styles.error}`

    return (
      <input
        data-test='inputElement'
        value={value}
        className={className}
        placeholder={placeholder}
        name={name}
        id={'input_' + name}
        type={props.type}
        onChange={(e) => onChange(e.target.value)}
        onBlur={blurred}
        ref={inputRef}
        autoComplete={props.autoComplete}
        step={props.step}
      />
    )
  }
)

TextInput.defaultProps = {
  value: '',
  type: 'text'
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  autoComplete: PropTypes.string
}

export default React.memo(TextInput)
