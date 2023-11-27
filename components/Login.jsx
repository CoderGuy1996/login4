import React from 'react'
import './Login.css';
function Login() {
  return (
    <div className='container'>
      <div className='box'>
        <h1>Login</h1>
        <input type="name" placeholder='Enter your username' />
        <input type="email" placeholder='Enter your email' />
        <input type="password" placeholder='Enter your password' />
        <button>Login</button>
        <p>Don't have an account?</p>
        <button>Signup</button>
      </div>
    </div>
  )
}

export default Login
