import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import { ChevronDown } from './../../../../icons'
import styles from './styles.module.scss'

const SelectButton = forwardRef(
  (
    {
      placeholder,
      selectedOption,
      optionsOpen,
      open,
      name,
      error,
      className,
      mode
    },
    ref
  ) => {
    const buttonRef = useRef()
    useImperativeHandle(ref, () => ({
      click: () => buttonRef.current.click()
    }))

    const { value, label } = selectedOption || {}
    let labelClassName = styles.valueText
    if (value === undefined) labelClassName += ` ${styles.placeholder}`

    let dDBClassName = `${styles.dropDownButton} ${styles[mode]}`
    if (className) dDBClassName += ` ${styles[className]}`

    if (optionsOpen) dDBClassName += ` ${styles.open}`
    if (error) dDBClassName += ` ${styles.error}`

    return (
      <button
        type='button'
        className={dDBClassName}
        onClick={open}
        ref={buttonRef}
        id={'input_' + name}
      >
        <div className={labelClassName}>{label || placeholder}</div>
        <div className={styles.iconWrapper}>
          <ChevronDown className={styles.icon} />
        </div>
      </button>
    )
  }
)

SelectButton.propTypes = {
  selectedOption: PropTypes.any,
  placeholder: PropTypes.string
}

export default React.memo(SelectButton)
