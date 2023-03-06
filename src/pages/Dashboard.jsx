import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import  axios  from 'axios';
import DashboardNavigation from '../components/DashboardNavigation';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate()
    function createProfileBtn() {
            navigate('/create-profile');
      }

    const [name, setName] = useState("");
    const token = localStorage.getItem("token");
    useEffect(() => {
      (async ()=> {
        try {
            const data = await axios.get("/auth", {
                headers: {
                    ['access-token']: token
                }
            })
            setName(data.data.name)
            
        }catch (err) {
            toast.error(err.message)
        }
      })()
    },[])

  return (

    <div>
       <DashboardNavigation/>
        <div className='container my-5'>
        <h1>Hello, {name}</h1>
        <p>You have not created an profile yet.</p>
        <button onClick={createProfileBtn} className="btn btn-danger">Create Profile</button>
        </div>
    </div>
  )
}

export default Dashboard
