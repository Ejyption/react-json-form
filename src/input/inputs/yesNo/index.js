import React, { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const YesNoInput = forwardRef(({ value, onChange, error, mode }, ref) => {
  let className = `${styles.yesNoWrapper} ${styles[mode]}`
  if (error) className += ` ${styles.error}`

  useImperativeHandle(ref, () => ({
    focus: () => onChange(!value)
  }))

  let yesClassName = `${styles.yesButton}`
  let noClassName = `${styles.noButton}`
  if (value) yesClassName += ` ${styles.selected}`
  else noClassName += ` ${styles.selected}`

  return (
    <div data-test='toggleComponent' className={className}>
      <button
        type='button'
        onClick={() => {
          onChange(false)
        }}
        className={noClassName}
      >
        No
      </button>
      <button
        type='button'
        onClick={() => {
          onChange(true)
        }}
        className={yesClassName}
      >
        Yes
      </button>
    </div>
  )
})

YesNoInput.defaultProps = {
  value: false
}
YesNoInput.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default React.memo(YesNoInput)
