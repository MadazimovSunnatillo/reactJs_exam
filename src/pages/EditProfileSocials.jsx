import React from 'react'
import { Link } from 'react-router-dom'
import DashboardNavigation from '../components/DashboardNavigation'

const EditProfileSocials = () => {
  return (
    <div>
      <DashboardNavigation/>
      <div className='container py-5'>
        <Link className='btn btn-danger' to="/add-profile">Back to Dashboard</Link>
        <h1>Your Social Links</h1>
        <form >
            <div className="row g-3">
                <div className='col-md-6'>
                    <label className='form-label' htmlFor="facebook">Facebook</label>
                    <input className='form-control' id='facebook' type="url" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label' htmlFor="instagram">Instagram</label>
                    <input className='form-control' id='instagram' type="url" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label' htmlFor="twitter">Twitter</label>
                    <input className='form-control' id='twitter' type="url" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label' htmlFor="youTube">YouTube</label>
                    <input className='form-control' id='youTube' type="url" />
                </div>
                <div className='col-md-6'>
                    <label className='form-label' htmlFor="linkedIn">LinkedIn</label>
                    <input className='form-control' id='linkedIn' type="url" />
                </div>
                <div className='col-md-6 d-flex align-items-center'>
                    <button disabled className='btn btn-danger mt-auto w-100'>Save</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default EditProfileSocials
