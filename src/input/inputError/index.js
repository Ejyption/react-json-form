import styles from './styles.module.scss'
import React from 'react'
import PropTypes from 'prop-types'
import { AlertTriangle } from './../../icons'

const InputError = ({ error, mode }) => {
  return error ? (
    <div className={`${styles.error} ${styles[mode]}`}>
      <span className={styles.errorText}>{error}</span>
      <AlertTriangle className={styles.icon} />
    </div>
  ) : null
}

InputError.propTypes = {
  error: PropTypes.string
}

export default React.memo(InputError)
