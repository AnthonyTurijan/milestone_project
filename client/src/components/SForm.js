import React, { useState } from 'react'
import SignupForm from './SignupForm'
import SignupSuccess from "./SignupSuccess";

const SForm = () => {
  const [formIsSubitted, setformIsSubitted] = useState(false);
  const submitForm = () => {
      setformIsSubitted(true)
  }
  return <div>{ !formIsSubitted ? <SignupForm submitForm={submitForm}/> : <SignupSuccess /> } </div>
}

export default  SForm