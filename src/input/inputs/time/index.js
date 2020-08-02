import styles from './styles.module.scss'
import React, {
  useState,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import { hoursOptions, minutesOptions, amPmOptions } from './helper'
import Select from '../select'

const TimeSelect = forwardRef(
  ({ name, placeholder, value, onChange, ...props }, ref) => {
    const hourSelectRef = useRef()
    const [hour, setHour] = useState(value.substr(0, 2))
    const [minute, setMinute] = useState(value.substr(3, 2))
    const [amPm, setAmPm] = useState(value.substr(5, 2))

    useImperativeHandle(ref, () => ({
      focus: () => {
        hourSelectRef.current.focus()
      }
    }))

    useEffect(() => {
      onChange(`${hour}:${minute}${amPm}`)
    }, [hour, minute, amPm])

    return (
      <div className={styles.dateSelectWrapper}>
        <div className={styles.day}>
          <Select
            ref={hourSelectRef}
            options={hoursOptions}
            value={hour}
            onChange={setHour}
            label='Hour'
            colSpan={3}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part1'
          />
        </div>
        <div className={styles.month}>
          <Select
            options={minutesOptions}
            value={minute}
            onChange={setMinute}
            label='Minute'
            colSpan={3}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part2'
          />
        </div>
        <div className={styles.year}>
          <Select
            options={amPmOptions}
            value={amPm}
            onChange={setAmPm}
            label='AM or PM'
            colSpan={2}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part3'
          />
        </div>
      </div>
    )
  }
)

TimeSelect.defaultProps = {
  value: '06:00am'
}

TimeSelect.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default React.memo(TimeSelect)
