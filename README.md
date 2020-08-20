# @ejyption/react-json-form

> React form component that utilises JSON. Inputs include validation based on their types with extra validation being optional.

[![NPM](https://img.shields.io/npm/v/@ejyption/react-json-form.svg)](https://www.npmjs.com/package/@ejyption/react-json-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @ejyption/react-json-form
```

## Form input types

- text
- textarea (height auto adjusts as you write more)
- email
- number
- password
- date
- time
- checklist
- select (thoughtful styling for mobile & desktop)
- toggle

## Props

- ```submit``` Function. The submit prop needs to be a function which takes two paramaters. The first parameter is the formdata created by react-json-form and the second parameter is the callback. Call the callback function once you have finished using the formdata to stop the form loading spinner. Should there be an issue with submitting the formdata, pass a new Error with a message to the callback and a nice error message will pop up at the top of the form. The page will automatically scroll to the form error message.
- ```cancel``` Function. If there is a cancel function present, react-json-form renders a cancel button next to the submit button. The cancel button can be any function at your descretion.
- ```mode``` String, either "light" or "dark". Changes the styling to suit dark or light themes.
- ```inputs``` Array of objects. This prop is an array that needs to contain the input objects. Each object will render an input respective to its position is in the array. The format for these objects are described below
- ```submitButtonOptions``` Object. This contains details of what you wish the submit button to say and how it should be styled. An example of the format is  ```{ text:"Save Form", style: {backgroundColor:"red"} }```
  
## Input object format
- ```label``` String. The label for the input
- ```placeholder``` String.
- ```autoFocus``` Boolean. Will autofocus on the last input that has autoFocus prop as true
- ```autoComplete``` String. The same as using the autoComplete attribute on an HTML input. Either "off" or "on", "on" being the default.
- ```helper``` String. This sits underneath an input, having a small font and being italic, is used to further describe what you are asking of the user.
- ```options``` Array of objects. This is used with a select, or a checklist input type. Objects in this array should be of the format ```{label:"label", value:"value"}```
- ```name``` String. This props is required and will be the key in the returned formdata.
- ```value``` Any. This prop is optional if you wish to provide an initial value for the input.
- ```type``` One Of. Types of inputs are listed in a section above
- ```beforeDate``` UTC. Used for a date input type, it validates a date input requiring it to be before the date provided.
- ```afterDate``` UTC. Used for a date input type, it validates a date input requiring it to be after the date provided.
- ```required``` Boolean. Adds a * to the end of the label and validates against an empty input, array, date etc.
- ```mustMatch``` Any. Validates input using a shallow compare to the mustMatch prop.
- ```overrideValues``` Object ```{firstName:"Emad"}```. This object should contain both keys (standing in for an input name) and a value. In case you wish to hardcode the inputs prop and then override them with a fetched dataset. This is particularly useful if you save your react-json-form formdata and then wish to edit the values later using the fetched formdata.

## Additional input object props when using inputs without a form
- ```onChange``` Function. This function will get called upon change to the input and will pass the value of the input.
- ```onBlur``` Function. This function will get called on blur of the input and will pass the value.
- ```mode``` String, either "light" or "dark". Changes the styling to suit dark or light themes.

Methods (can access them with a reference)
- ```focus``` Function. focuses on the input
- ```validateInput``` Function. Although validation occurs on any change, if you wish to validate when no change has occured, use this method.
- ```getValue``` Function. Returns an object of the format ```{name: name, value: value}```
- ```overrideValue``` Function. This allows you to override the input value programmatically.

## Individual Input Usage (using inputs without a form)

```jsx
import React, { useState, useEffect } from 'react'
import { Input } from '@ejyption/react-json-form'
import '@ejyption/react-json-form/dist/index.css'

const Example = (props) => {
  const [superhero, setSuperhero] = useState('')
  useEffect(() => {
    console.log(superhero)
  }, [superhero])

  return (
    <Input
      type='text'
      name='superhero'
      label="Who's your favourite superhero?"
      value={superhero}
      onChange={setSuperhero}
      autoFocus
    />
  )
}

export default Example
```

## Form Usage

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
    
    // callback(new Error("error message"))
    // or
    // callback()
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
