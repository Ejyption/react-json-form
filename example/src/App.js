import React from 'react'
import Form, { Input } from '@ejyption/react-json-form'
import '@ejyption/react-json-form/dist/index.css'
import { inputs } from './inputs'
import { submitButtonOptions } from './submitButtonOptions'
import './app.scss'

const App = () => {
  return (
    <div className='form-wrapper'>
      <Form
        inputs={inputs}
        cancel={() => {}}
        submitButtonOptions={submitButtonOptions}
      />
    </div>
  )
}

export default App
