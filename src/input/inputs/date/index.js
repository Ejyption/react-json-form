import styles from './styles.module.scss'
import React, {
  useState,
  forwardRef,
  useEffect,
  useMemo,
  useImperativeHandle,
  useRef
} from 'react'
import PropTypes from 'prop-types'
import Select from './../select'

const getInitialValue = (val) => (typeof val === 'string' ? new Date(val) : val)

const DateSelect = forwardRef(
  ({ name, placeholder, value, onChange, ...props }, ref) => {
    const daySelectRef = useRef()
    const [date, setDate] = useState(getInitialValue(value))
    const [day, setDay] = useState(date.getDate())
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())

    useImperativeHandle(ref, () => ({
      focus: () => {
        daySelectRef.current.focus()
      }
    }))

    const [touched, setTouched] = useState(false)
    useEffect(() => {
      if (touched) onChange(date)
      else setTouched(true)
    }, [date])

    useEffect(() => {
      setDate((d) => new Date(year, month, day))
    }, [day, month, year])

    const months = [
      { value: 0, label: 'January' },
      { value: 1, label: 'February' },
      { value: 2, label: 'March' },
      { value: 3, label: 'April' },
      { value: 4, label: 'May' },
      { value: 5, label: 'June' },
      { value: 6, label: 'July' },
      { value: 7, label: 'August' },
      { value: 8, label: 'September' },
      { value: 9, label: 'October' },
      { value: 10, label: 'November' },
      { value: 11, label: 'December' }
    ]
    const days = useMemo(() => {
      const lastDay = new Date(year, month + 1, 0).getDate()
      const d = []
      for (let i = 1; i <= lastDay; i++) {
        d.push({ label: i.toString(), value: i })
      }
      if (day > lastDay) setDay(lastDay)
      return d
    }, [month])

    const years = useMemo(() => {
      const y = []
      for (let i = props.maxYear; i > props.minYear; i--) {
        y.push({ label: i.toString(), value: i })
      }
      return y
    }, [])

    return (
      <div className={styles.dateSelectWrapper}>
        <div className={styles.day}>
          <Select
            ref={daySelectRef}
            options={days}
            value={day}
            onChange={setDay}
            label='Day'
            colSpan={7}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part1'
            name={`input_${name}_day`}
          />
        </div>
        <div className={styles.month}>
          <Select
            options={months}
            value={month}
            onChange={setMonth}
            label='Month'
            colSpan={3}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part2'
            name={`input_${name}_month`}
          />
        </div>
        <div className={styles.year}>
          <Select
            options={years}
            value={year}
            onChange={setYear}
            label='Year'
            colSpan={4}
            mode={props.mode}
            error={props.error}
            width={props.width}
            className='part3'
            name={`input_${name}_year`}
          />
        </div>
      </div>
    )
  }
)

const today = new Date()
DateSelect.defaultProps = {
  value: today,
  minYear: today.getFullYear() - 80,
  maxYear: today.getFullYear()
}

DateSelect.propTypes = {
  value: PropTypes.any,
  beforeDate: PropTypes.string,
  afterDate: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool
}

export default React.memo(DateSelect)
