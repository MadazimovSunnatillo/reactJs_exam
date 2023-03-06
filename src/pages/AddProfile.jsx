import React, { useEffect, useState } from 'react'
import DashboardNavigation from '../components/DashboardNavigation'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddProfile = () => {
    const [name, setName] = useState("");
    const token = localStorage.getItem("token");

    useEffect(()=> {
        (async()=> {
           try {
            const data = await axios.get("/profile/me")
            console.log(data);
           } catch (error) {
            
           }
        })()
    })


  return (
    <div>
      <DashboardNavigation/>
      <div className='container py-5'>
        <h1>Hello, {name}</h1>
        <p>What are you planning to do today?</p>
        <div className='d-flex gap-3'>
            <Link to="/my-jobs" className='btn btn-primary'>Post a job</Link>
            <Link to="/jobs" className='btn btn-info'>Explore jobs</Link>
        </div>
        <div>
            <h2>Your Info</h2>
            <div className='bg-light border p-3'>
                <div className="row">
                    <div className="col-md-2">
                        <img className='rounded-circle img-fluid' src="https://gravatar.com/avatar/5c8bf2ce4b47f3a700ac96c275a07ca6?d=mm&r=pg&s=200" alt="" />
                    </div>
                    <div className="col-md-4">
                        <div>
                            Email: <a href="#">gexef85357@youke1.com</a>
                        </div>
                        <div>
                            Status: Open to work
                        </div>
                        <div>
                            Joined: at 04/03/2023 ()injanda az dashboard umadagi danniho
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div>
                            Company:
                        </div>
                        <div>
                            Website:
                        </div>
                        <div>
                            Skills:
                        </div>
                        <div className='d-flex gap-3 flex-wrap'>
                            <div>
                                <i className='fa-solid fa-check text-danger'></i>
                                adasd
                            </div>
                            <div>
                                <i className='fa-solid fa-check text-danger'></i>
                                adasd
                            </div>
                            <div>
                                <i className='fa-solid fa-check text-danger'></i>
                                adasd
                            </div>
                            <div>
                                <i className='fa-solid fa-check text-danger'></i>
                                adasd
                            </div>
                    </div>
                   
                        </div>
                            <div className="col-md-2">
                                <ul className='list-unstyled d-flex flex-column h-100 justify-content-evenly'></ul>
                            </div>
                        <div className='col text-end d-flex gap-3 justify-content-end pt-5 px-5'>
                            <Link className='btn btn-info' to="/create-profile">Edit profile</Link>
                            <Link className='btn btn-primary' to="/edit-profile/socials">Edit socials</Link>
                        </div>
                </div>
            </div>
        </div>
        <div className='py-3'>
            <h2>Experiences</h2>
            <div className="bg-light border p-3">
                <h4 className='text-center'>No Experience Added.</h4>
                <div className="text-center">
                    <button className='btn btn-danger'>Add</button>
                </div>
            </div>
        </div>
        <div className='py-3'>
            <h2>Educations</h2>
            <div className="bg-light border p-3">
                <h4 className='text-center'>No Education Added.</h4>
                <div className="text-center">
                    <button className='btn btn-danger'>Add</button>
                </div>
            </div>
        </div>
        <div className='py-3'>
            <h2>Recent Git Repos</h2>
            <div className="bg-light border p-5">
                <h2 className='display-1 text-danger'>!!!DANGER ZONE!!!</h2>
                <p>This area is so dangerous. You may delete all your data by accident in here! PLEASE BE CAREFUL!!!</p>
                    <button className='btn btn-danger'>Delete account</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddProfile
