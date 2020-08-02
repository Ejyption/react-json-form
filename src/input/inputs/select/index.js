import styles from './styles.module.scss'
import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useRef,
  useMemo
} from 'react'
import PropTypes from 'prop-types'
import SelectButton from './selectButton'
import OptionsWrapper from './optionsWrapper'

const Select = forwardRef((props, ref) => {
  const selectButtonRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: selectButtonRef.current.click
  }))
  const [optionsOpen, setOptionsOpen] = useState(false)
  const close = useCallback(() => {
    setOptionsOpen(false)
  }, [])
  const toggle = useCallback(() => {
    setOptionsOpen((a) => !a)
  }, [])

  const getSelectedOption = useMemo(
    () => props.options.find((o) => o.value === props.value),
    [props.options, props.value]
  )

  return (
    <div className={styles.selectWrapper}>
      <SelectButton
        selectedOption={getSelectedOption}
        placeholder={props.placeholder}
        optionsOpen={optionsOpen}
        ref={selectButtonRef}
        open={toggle}
        error={props.error}
        mode={props.mode}
        className={props.className}
      />
      {optionsOpen ? (
        <OptionsWrapper optionsOpen={optionsOpen} close={close} {...props} />
      ) : null}
    </div>
  )
})

Select.defaultProps = {
  options: []
}

Select.propTypes = {
  value: PropTypes.any,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({ label: PropTypes.string, value: PropTypes.any })
  )
}

export default React.memo(Select)
