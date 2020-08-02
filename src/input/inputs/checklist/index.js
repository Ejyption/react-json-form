import React, {
  forwardRef,
  useImperativeHandle,
  useCallback,
  useEffect,
  useState
} from 'react'
import PropTypes from 'prop-types'
import Option from './checklistOption'

export const toggleInArray = (arr, val) => {
  const valuesArray = [...arr]
  const ind = valuesArray.indexOf(val)
  if (~ind) valuesArray.splice(ind, 1)
  else valuesArray.push(val)
  return valuesArray
}

const ChecklistInput = forwardRef(
  ({ name, value, onChange, options, mode }, ref) => {
    const [arr, setArr] = useState(value)

    const toggleOption = useCallback((v) => {
      setArr((a) => toggleInArray(a, v))
    }, [])

    useEffect(() => {
      onChange(arr)
    }, [arr])

    useImperativeHandle(ref, () => ({
      focus: () => {}
    }))

    return (
      <div>
        {options.map((option, k) => {
          const checked = ~arr.indexOf(option.value)
          return (
            <Option
              key={option.value}
              toggleOption={toggleOption}
              option={option}
              checked={checked}
              mode={mode}
            >
              {option.label}
            </Option>
          )
        })}
      </div>
    )
  }
)

ChecklistInput.defaultProps = {
  value: []
}
ChecklistInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  )
}

export default React.memo(ChecklistInput)
