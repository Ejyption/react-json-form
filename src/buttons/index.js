import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'
import { Loader } from '../icons'

const FormButtons = ({ loading, onCancel, submitButtonOptions }) => {
  return (
    <div data-test='buttonsComponent' className={styles.buttonsWrapper}>
      <button
        className={styles.submitButton}
        type='submit'
        style={submitButtonOptions.style}
      >
        {loading ? (
          <Loader data-test='loadingComponent' className={styles.spinner} />
        ) : (
          <div data-test='submitText' className={styles.buttonText}>
            {submitButtonOptions.text}
          </div>
        )}
      </button>
      {onCancel && typeof onCancel === 'function' ? (
        <button
          data-test='cancelButton'
          className={styles.cancelButton}
          type='button'
          onClick={onCancel}
        >
          <div className={styles.buttonText}>Cancel</div>
        </button>
      ) : null}
    </div>
  )
}

FormButtons.defaultProps = {
  submitButtonOptions: {
    text: 'submit',
    style: {}
  }
}

FormButtons.propTypes = {
  loading: PropTypes.bool,
  onCancel: PropTypes.func,
  submitButtonOptions: PropTypes.shape({
    text: PropTypes.string,
    style: PropTypes.object
  })
}

export default FormButtons
