import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className='bg-dark'>
        <div className='min-vh-100 container d-flex align-items-center justify-content-center flex-column'>
            <h1 className='text-danger'>Sorry, the page you are looking for is not found 😕</h1>
            <Link className='btn btn-danger ' to="/">Go back to home</Link>
        </div>
    </div>
  )
} 

export default NotFoundPage
