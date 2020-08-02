# @ejyption/react-json-form

> React form component that utilises JSON. Inputs include validation based on their types with extra validation being optional.

[![NPM](https://img.shields.io/npm/v/@ejyption/react-json-form.svg)](https://www.npmjs.com/package/@ejyption/react-json-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ejyption/react-json-form
```

## Form input types

- text
- email
- number
- password
- date
- time
- select
- toggle

## Usage

### app.js

```jsx
import React from 'react'
import Form from '@ejyption/react-json-form'
import '@ejyption/react-json-form/dist/index.css'
import { inputs } from './inputs.js'
import { submitButtonOptions } from './submitButtonOptions.js'

const Example = (props) => {
  const onSubmit = (formData, callback) => {
    // do what you wish with the data
    /* 
      if there is an error with your form handling
      simply add a new Error as an argument to the callback
      callback(new Error("error message"))
    */
    /* 
      if there is no issue, you can use the callback
      with no arguments and the loading spinner will stop
      callback()
    */
  }

  return (
    <Form
      mode='light' // either 'light' or 'dark'
      submit={onSubmit}
      inputs={inputs}
      submitButtonOptions={submitButtonOptions}
    />
  )
}

export default Example
```

### inputs.js

```javascript
export const inputs = [
  {
    type: 'text',
    name: 'firstName',
    label: 'First Name',
    placeholder: 'Emad',
    autoFocus: true
  },
  {
    type: 'email',
    name: 'email',
    label: 'Email Address',
    placeholder: 'eg Emad@example.com'
  },
  {
    type: 'yesNo',
    name: 'agree',
    label: 'Agreed?'
  },
  {
    type: 'time',
    name: 'startTime',
    label: 'Start Time',
    width: 'half',
    required: true
  },
  {
    type: 'time',
    name: 'endTime',
    label: 'End Time',
    width: 'half',
    required: true
  },
  {
    type: 'time',
    name: 'theTime',
    label: 'The Time',
    required: true
  },
  {
    type: 'toggle',
    name: 'subscribe',
    label: 'Subscribe to our mailing service?',
    required: true
  },
  {
    type: 'number',
    name: 'weight',
    label: 'Weight',
    placeholder: 'eg 82.5'
  },
  {
    type: 'select',
    name: 'favouriteCharacter',
    label: "Which 'Friends' character do you like most?",
    placeholder: 'Select from these options',
    helper: 'This will help us understand who you relate to most.',
    options: [
      { label: 'Ross', value: 'Ross' },
      { label: 'Rachel', value: 'Rachel' },
      { label: 'Monica', value: 'Monica' },
      { label: 'Chandler', value: 'Chandler' },
      { label: 'Joe', value: 'Joe' },
      { label: 'Pheobe', value: 'Pheobe' }
    ],
    required: true
  },
  {
    type: 'checklist',
    name: 'favouriteGenres',
    label: 'Which movie genres do you like?',
    placeholder: 'Select from these options',
    options: [
      { label: 'Action', value: 'Action' },
      { label: 'Comedy', value: 'Comedy' },
      { label: 'Crime', value: 'Crime' },
      { label: 'Drama', value: 'Drama' },
      { label: 'Romantic', value: 'Romantic' },
      { label: 'Thriller', value: 'Thriller' }
    ],
    value: ['Action', 'Thriller', 'DDD'],
    required: true
  }
]
```

### submitButtonOptions.js

```javascript
export const submitButtonOptions = {
  text: 'Save',
  style: {
    backgroundColor: 'purple',
    color: '#fff'
  }
}
```

## License

MIT © [Ejyption](https://github.com/Ejyption)

## Keywords

React JSON Form Forms Component Validation
