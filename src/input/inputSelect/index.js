import {
  Select,
  Text,
  Textarea,
  Checklist,
  DateSelect,
  TimeSelect,
  Toggle,
  YesNo
} from './../inputs'

export const getInputType = (type) => {
  switch (type) {
    case 'text':
      return Text
    case 'textarea':
      return Textarea
    case 'email':
      return Text
    case 'password':
      return Text
    case 'number':
      return Text
    case 'checklist':
      return Checklist
    case 'toggle':
      return Toggle
    case 'date':
      return DateSelect
    case 'yesNo':
      return YesNo
    case 'time':
      return TimeSelect
    case 'select':
      return Select
    default:
      return Text
  }
}
