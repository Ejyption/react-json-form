import React, { useState, useEffect } from 'react'
import Form, { Input } from '@ejyption/react-json-form'
import '@ejyption/react-json-form/dist/index.css'
import { inputs } from './inputs'
import { submitButtonOptions } from './submitButtonOptions'
import './app.scss'

const App = () => {
  const [superhero, setSuperhero] = useState('')

  useEffect(() => {
    console.log(superhero)
  }, [superhero])

  return (
    <div className='wrapper'>
      <div className='single-input-wrapper'>
        <Input
          type='text'
          name='superhero'
          label="Who's your favourite superhero?"
          value={superhero}
          onChange={setSuperhero}
          autoFocus
        />
      </div>
      <div className='form-wrapper'>
        <Form
          inputs={inputs}
          cancel={() => {}}
          submitButtonOptions={submitButtonOptions}
        />
      </div>
    </div>
  )
}

export default App
