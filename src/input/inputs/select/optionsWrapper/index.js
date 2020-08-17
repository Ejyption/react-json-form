import styles from './styles.module.scss'
import React, { useState, useEffect, useRef } from 'react'
import SelectOption from './../selectOption'
import PropTypes from 'prop-types'

const OptionsWrapper = ({ optionsOpen, ...props }) => {
  const [optionsPosition, setOptionsPosition] = useState('below')
  const optionsPositionRef = useRef()
  const optionsListRef = useRef()
  const getPosition = () => {
    const rect = optionsPositionRef.current.getBoundingClientRect()
    if (window.innerHeight - rect.top < 300) setOptionsPosition('above')
    else setOptionsPosition('below')
  }

  useEffect(() => {
    if (props.value) {
      const el = document.getElementById('option_' + props.value)
      if (el)
        optionsListRef.current.scrollTo({
          top: el.offsetTop - 100
        })
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', props.close)
    window.addEventListener('scroll', props.close)
    getPosition()
    return () => {
      window.removeEventListener('click', props.close)
      window.removeEventListener('scroll', props.close)
    }
  }, [])

  let className = `${styles.optionsWrapper} ${styles.open} `
  className += `${styles[optionsPosition]}`

  const colSpan = props.colSpan

  return (
    <div ref={optionsPositionRef}>
      <div className={className}>
        <div className={styles.label}>{props.label}</div>
        <div ref={optionsListRef} className={styles.optionsList}>
          {props.options.map((option, index) => (
            <SelectOption
              selected={props.value === option.value}
              onSelect={props.onChange}
              key={index}
              option={option}
              close={props.close}
              colSpan={colSpan}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

OptionsWrapper.defaultProps = {
  options: []
}
OptionsWrapper.propTypes = {
  value: PropTypes.any,
  options: PropTypes.arrayOf(
    PropTypes.exact({ label: PropTypes.string, value: PropTypes.any })
  )
}

export default OptionsWrapper
