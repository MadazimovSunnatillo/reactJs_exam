import React from 'react'
import {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios  from 'axios';
import { localTokenKeys } from './../token/index';

const RegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmedPassword: "",
  })

  function handleInputChange (evt) {
    setValues((v)=> ({...v, [evt.target.name] :evt.target.value }))
  }
  const navigate = useNavigate()
 
  async function handleRegister(e) {
    e.preventDefault()

    if(!values.email || !values.password || !values.name || !values.confirmedPassword) 
    return toast ("Please fill all the fields! ", {type:"error"})

    if(values.password !== values.confirmedPassword) {
      return toast ("Password do not match! ", {type: "error"})
    }

    try {
      let { data } = await axios.post('/users', values)
      
      let {token } = data;

      localStorage.setItem(localTokenKeys, token)
      toast("Congrats", {type:"success"})
      navigate("/dashboard")
    } catch (error) { 
      toast.warning(error.response.data.errors[0].msg);
      if (error.response) {
        if(error.response.data.message) {
          toast(error.response.data.message, {type: "error"});
          error.response.data.errors?.forEach((err)=> toast(err.message, {type: "error"}))
        }
      }
      
    }
  }

  return (
    <div className='min-vh-100 d-flex align-items-center container'>
        <form onSubmit={handleRegister} className='w-50 mx-auto p-5 bg-light rounded-1 shadow '>
            <h1 className='text-center text-primary mb-4'>Register</h1>
            <div className='my-3'>
                <label className='form-label' htmlFor="name">Your name</label>
                <input className='form-control' type="text" name='name' id='name' value={values.name} onChange={handleInputChange} />
            </div>
            <div className='my-3'>
                <label className='form-label' htmlFor="email">Your email</label>
                <input className='form-control' type="email" name='email' id='email' value={values.email} onChange={handleInputChange} />
            </div>
            <div className='my-3'>
                <label className='form-label' htmlFor="password">Your password</label>
                <input className='form-control' type="password" name='password' id='password' value={values.password} onChange={handleInputChange} />
            </div>
            <div className='my-3'>
                <label className='form-label' htmlFor="confirmedPassword">Confirm password</label>
                <input className='form-control' type="password" name='confirmedPassword' id='confirmedPassword' value={values.confirmedPassword} onChange={handleInputChange} />
            </div>
            <button className='w-100 btn btn-danger my-3'>Register</button>
            <p className='text-center'>Already have an account? <Link className='text-decoration-none text-danger' to="/login">Login</Link></p>
        </form>
    </div>
  )
}

export default RegisterForm
