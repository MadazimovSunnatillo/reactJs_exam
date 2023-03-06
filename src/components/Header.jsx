import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-white shadow border-bottom sticky-top'>
      <nav className='py-3 container d-flex justify-content-between align-items-center' >
        <div className="nav-logo ">
            <Link to="/" className='text-decoration-none text-danger display-6'>Jobify</Link>
        </div>
        <div className="nav-links d-flex gap-3">
            <Link to="/login" className='text-reset text-decoration-none text-dark'>Explore</Link>
            <Link to="/register" className='text-reset text-decoration-none text-dark'>Register</Link>
            <Link to="/login" className='text-decoration-none text-dark'>Login</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header
