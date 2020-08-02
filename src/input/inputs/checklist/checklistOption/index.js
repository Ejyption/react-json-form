import React from 'react'
import styles from './styles.module.scss'
import { Check } from './../../../../icons'

const SelectOption = React.memo(({ option, checked, toggleOption, mode }) => {
  const { value, label } = option
  let className = styles.checkbox
  if (checked) className += ` ${styles.checked}`

  return (
    <div
      className={`${styles.optionWrapper} ${styles[mode]}`}
      onClick={() => toggleOption(value)}
    >
      <div className={className}>
        {checked ? <Check className={styles.icon} /> : null}
      </div>
      <div className={styles.optionText}>{label}</div>
    </div>
  )
})

export default React.memo(SelectOption)
