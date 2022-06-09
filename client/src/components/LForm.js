import React, { useState } from 'react'
import LoginForm from './LoginForm'

const LForm = () => {
  const [formIsSubitted, setformIsSubitted] = useState(false);
  const submitForm = () => {
      setformIsSubitted(true)
  }
  return <div>{ !formIsSubitted ? <LoginForm submitForm={submitForm}/> : {} } </div>
}

export default  LForm