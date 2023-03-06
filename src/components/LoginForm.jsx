import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <div className='min-vh-100 d-flex align-items-center container'>
        <form className='w-50 mx-auto p-5 bg-light rounded-1 shadow '>
            <h1 className='text-center text-primary mb-4'>Login</h1>
            <div className='my-3'>
                <label className='form-label' htmlFor="email">Your email</label>
                <input className='form-control' type="email" name='email' id='email' />
            </div>
            <div className='my-3'>
                <label className='form-label' htmlFor="password">Your password</label>
                <input className='form-control' type="password" name='password' id='password' />
            </div>
            <button className='w-100 btn btn-danger my-3'>Login</button>
            <p className='text-center'>Already have an account? <Link className='text-decoration-none text-danger' to="/register">Register</Link></p>
        </form>
    </div>
  )
}

export default LoginForm
