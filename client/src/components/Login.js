import { useRef } from 'react'
import bcrypt from 'bcryptjs'

// SALT should be created ONE TIME upon sign up
const salt = bcrypt.genSaltSync(14)
// example =>  $2a$10$CwTycUXWue0Thq9StjUM0u => to be added always to the password hash

function Login() {
    const emailInputRef = useRef()
    const passwordInputRef = useRef()

  
    function handleLoginForm() {
      console.log(salt)
      const email = emailInputRef.current.value
      const password = passwordInputRef.current.value
      const hashedPassword = bcrypt.hashSync(password, salt) // hash created previously created upon sign up
      console.log(password)
      fetch('https://localhost:3000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: hashedPassword,
        }),
      })
    }
  
    return (
      <>         
         <div style={{padding:'.5rem',display:'flex',flexDirection:'column', width:'250px', textAlign:'center', color:'#054a91', fontSize:'12px'}}>
          <form>
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.25rem' }} ref={emailInputRef} type='email' placeholder='Email' autoComplete="username" />
            <input style={{ padding: '.25rem', borderRadius: '10px', margin: '.25rem' }} ref={passwordInputRef} type='password' placeholder='Password' autoComplete='current-password' />
              <br />By clicking log in below, you agree to Socializr’s Terms of Service and have <br />read the Privacy Policy<br />
            <button
              type='submit'
              style={{ padding: '.25rem', borderRadius: '10px', margin: '.25rem' }}
              onClick={e => {
                e.preventDefault()
                handleLoginForm()
              }}>
              Log In
            </button>
          </form>
        </div>
      </>
    )
  }
  
  export default Login