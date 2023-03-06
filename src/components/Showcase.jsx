import React from 'react'
import { Link } from 'react-router-dom';
import "../../src/index.css"

const Showcase = () => {
  

  return (
    <div id='showcase' className='bg-opacity-50 min-vh-100 d-flex justify-content-center align-items-center flex-column '>
        <h1 className=' display-1 w-50 text-center text-white h-2'>Find the <span className='text-danger'>best</span> opportunities with <span className='text-danger'>us</span> </h1>
        <p className='text-center text-white w-50'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita eveniet incidunt placeat facere architecto saepe blanditiis delectus mollitia dignissimos perferendis odit deleniti, officia quidem doloremque? </p>
        <div className="buttons">
        <button className='btn btn-danger'><Link className='text-decoration-none text-white' to="/register">Register</Link></button>
        <button className='btn btn-outline-danger ms-3'><Link className='text-decoration-none text-white' to="/login">Login</Link></button>
        </div>
    </div>
  )
}

export default Showcase
