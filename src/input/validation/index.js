export const validateInput = (value, props) => {
  if (props.required && !validateRequired(value)) return { err: 'Required' }
  if (props.type === 'email' && !validateEmail(value)) return { err: 'Invalid' }
  if (props.type === 'number' && !validateNumber(value))
    return { err: 'Invalid' }
  if (props.type === 'date') {
    if (props.beforeDate && !validateBeforeDate(value, props.beforeDate))
      return {
        err: 'Invalid',
        message: `Date must be before ${props.beforeDate}`
      }
    if (props.afterDate && !validateAfterDate(value, props.afterDate))
      return {
        err: 'Invalid',
        message: `Date must be after ${props.afterDate}`
      }
  }
  return {}
}

export const validateRequired = (value) => {
  if (Array.isArray(value) && !value.length) return false
  return !!value
}
export const validateEmail = (value) => {
  if (!value) return true
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/.test(value)
}
export const validateNumber = (value) => {
  if (value === null || typeof value === 'boolean') return false
  if (!value) return true
  return !isNaN(value)
}

function pad(num) {
  var s = num + ''
  if (s.length < 2) s = '0' + s
  return s
}

export const validateBeforeDate = (value, beforeDate) => {
  const dateArr = beforeDate.split('/')
  const dateStr = dateArr[2] + dateArr[1] + dateArr[0]
  const valueDateStr =
    '' + value.getFullYear() + pad(value.getMonth() + 1) + pad(value.getDate())
  return dateStr > valueDateStr
}

export const validateAfterDate = (value, beforeDate) => {
  const dateArr = beforeDate.split('/')
  const dateStr = dateArr[2] + dateArr[1] + dateArr[0]
  const valueDateStr =
    '' + value.getFullYear() + pad(value.getMonth() + 1) + pad(value.getDate())
  return dateStr < valueDateStr
}
