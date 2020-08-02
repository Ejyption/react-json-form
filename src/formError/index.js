import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

const FormError = ({ formError }) => {
  const className = `${styles.errorWrapper} ${styles.bounceIn}`
  return formError ? (
    <div data-test='formErrorWrapper' className={className}>
      <div className={styles.errorText}>{formError.message}</div>
    </div>
  ) : null
}

FormError.propTypes = {
  formError: PropTypes.instanceOf(Error)
}

export default FormError
