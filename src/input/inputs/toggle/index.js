import React, { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const ToggleInput = forwardRef(({ value, onChange, error, mode }, ref) => {
  let className = `${styles.toggleWrapper} ${styles[mode]}`
  if (value) className += ` ${styles.on}`
  if (error) className += ` ${styles.error}`

  useImperativeHandle(ref, () => ({
    focus: () => onChange(!value)
  }))

  return (
    <div data-test='toggleComponent' className={className}>
      <div
        data-test='toggleInner'
        className={styles.toggleInner}
        onClick={() => onChange(!value)}
      />
    </div>
  )
})

ToggleInput.defaultProps = {
  value: false
}
ToggleInput.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired
}

export default React.memo(ToggleInput)
