import { useRef } from 'react'

import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(14)
// example =>  $2a$10$CwTycUXfafhfdhq9StjUM0u => to be added always to the password hash


function Signup() {
    const emailInputRef = useRef()
    const firstNameInputRef = useRef()
    const lastNameInputRef = useRef()
    const passwordInputRef = useRef()
    const dateofBirthInputRef = useRef()
    const passwordComfirmationInputRef = useRef()

    function handleLoginForm() {
      const email = emailInputRef.current.value
      const password = passwordInputRef.current.value
      const firstName = firstNameInputRef.current.value
      const lastName = firstNameInputRef.current.value
      const dob = dateofBirthInputRef.current.value

      const hashedPassword = bcrypt.hashSync(password, salt) // hash created previously created upon sign up
      fetch('https://localhost:3000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: hashedPassword,
          firstName: firstName,
          lastname: lastName,
          passwordHaskKey: salt,
          dateOfBirth: dob
        }),
      })
    }
  
    return (
      <>
          <form>
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={firstNameInputRef} type='text' placeholder='First Name' autoComplete="firstName" />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={lastNameInputRef} type='text' placeholder='Last Name' autoComplete="lastName"  />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={emailInputRef} type='email' placeholder='Email Address' autoComplete="username" />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={passwordInputRef} type='password' placeholder='Password' autoComplete="current-password"/>
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={passwordComfirmationInputRef} type='password' placeholder='Confirm Password'  />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={dateofBirthInputRef} type='date' />
          <form>
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={firstNameInputRef} type='email' placeholder='First Name' />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={lastNameInputRef} type='email' placeholder='Last Name' />
            <br />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={emailInputRef} type='email' placeholder='User Name' autoComplete="username" />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.5rem' }} ref={passwordInputRef} type='password' placeholder='Password' autoComplete="current-password"/>
            <button
              type='submit'
              style={{ padding: '5px', borderRadius: '3px', margin: '.5rem' }}
              onClick={e => {
                e.preventDefault()
                handleLoginForm()
              }}>
              Log In
            </button>
          </form>
      </>
    )
  }
  
  export default Signup