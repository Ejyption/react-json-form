import React from 'react'
import styles from './styles.module.scss'
import PropType from 'prop-types'

const SelectOption = ({ option, selected, onSelect, colSpan, close }) => {
  const { value, label } = option
  let className = `${styles.optionWrapper} ${styles['span-' + colSpan]}`
  if (selected) className += ` ${styles.selected}`

  const select = () => {
    onSelect(value)
    close()
  }

  return (
    <button
      id={'option_' + value}
      type='button'
      className={className}
      onClick={select}
    >
      <div className={styles.optionText}>{label}</div>
    </button>
  )
}
SelectOption.defaultProps = {
  colSpan: 1
}
SelectOption.propTypes = {
  colSpan: PropType.number,
  option: PropType.shape({ value: PropType.any, label: PropType.string })
}

export default React.memo(SelectOption)
