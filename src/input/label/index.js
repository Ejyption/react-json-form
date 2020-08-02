import React, { memo } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const InputLabel = ({ label, focus, required }) => {
  return label ? (
    <label onClick={focus} className={styles.label}>
      {label} {required ? '*' : null}
    </label>
  ) : null
}

InputLabel.propTypes = {
  label: PropTypes.string,
  focus: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default memo(InputLabel)
