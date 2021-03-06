import React, {
  useRef,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const TextareaInput = forwardRef(
  ({ name, placeholder, value, onChange, ...props }, ref) => {
    const inputRef = useRef()
    useImperativeHandle(ref, () => ({
      focus: () => inputRef.current.focus()
    }))

    const blurred = () => {
      if (props.onBlur) props.onBlur(value)
    }

    useEffect(() => {
      resize()
    }, [value])

    const resize = () => {
      inputRef.current.style.height = ''
      inputRef.current.style.height = inputRef.current.scrollHeight + 4 + 'px'
    }

    let className = `${styles.textareaInput} ${styles[props.mode]}`
    if (props.error) className += ` ${styles.error}`

    return (
      <textarea
        data-test='inputElement'
        value={value}
        className={className}
        placeholder={placeholder}
        name={name}
        id={'input_' + name}
        onChange={(e) => onChange(e.target.value)}
        onBlur={blurred}
        required={props.required}
        rows={1}
        ref={inputRef}
        autoComplete={props.autoComplete}
      />
    )
  }
)

TextareaInput.defaultProps = {
  value: '',
  type: 'text'
}

TextareaInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  required: PropTypes.bool,
  autoComplete: PropTypes.string
}

export default React.memo(TextareaInput)
