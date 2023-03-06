import React from 'react'
import DashboardNavigation from '../components/DashboardNavigation'
import { Link } from 'react-router-dom';

const AddEducation = () => {
    

  return (
    <div>
      <DashboardNavigation/>
      <div className='container py-5'>
        <Link className='btn btn-danger mb-3' to="/add-profile">Go Back</Link>
        <h1>Add Experience</h1>
        <form >
            <div className="row">
                <div className="col-md-6">
                    <label className='form-label' htmlFor="title">School</label>
                    <input className='form-control' type="text" placeholder='Stanford'/>
                </div>
                <div className="col-md-6">
                    <label className='form-label' htmlFor="company">Degree</label>
                    <input className='form-control' id='company' type="text" placeholder='Master' />
                </div>
                <div className="col-md-6">
                    <label className='form-label' htmlFor="company">Date</label>
                    <div className="input-group">
                        <input type="date" name='from' id='from' className='form-control' value />
                        <span className='input-group-text'>To</span>
                        <input type="date" name='to' id='to' className='form-control' value />
                    </div>
                    <div className="row g-5">
                        <div className="offset-6 col-6">
                            <input type="checkbox" name='current' id='current' value="false" />
                            <label className='form-label ps-3' htmlFor="current">Current</label>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="location" className="form-label">Field of Study</label>
                    <input className='form-control' type="text" placeholder='Computer Science'/>
                </div>
                <div className="col-md-12">
                    <label className='form-label' htmlFor="description">Description</label>
                    <textarea className='form-control' placeholder='Tell us a little bit about yourself' name="description" id="description"  rows="5"></textarea>
                </div>
            </div>
            <button className='btn btn-danger w-100 mt-3'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddEducation
