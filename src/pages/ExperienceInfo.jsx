import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DashboardNavigation from "./../components/DashboardNavigation";
import { toast } from "react-toastify";

const ExperienceInfo = () => {
  const [jobs, setJobs] = useState([]);
  const url = window.location.href.split("/");
  const id = url[url.length - 1];

  useEffect(() => {
    (async () => {
      try {
        const jobs = await axios.get(`/jobs/${id}`);
        setJobs(jobs?.data);
        console.log(jobs.data);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <DashboardNavigation />
      <div className="container">
        <Link to="/jobs" className="btn btn-danger my-4">
          Go Back
        </Link>
        <div className="bg-white border my-3 p-3">
          <div className="row">
            <div className="col-md-8">
              <h3>{jobs.title}</h3>
              <p>{jobs.name}</p>
              <p>By: {jobs.description}</p>
              <p>{jobs.date}</p>
            </div>
            <div className="col-md-2 d-flex flex-column gap-3">
              <button className="btn btn-primary">
                <i className="fa-solid fa-thumbs-up p-1"></i>
                <span className="badge text-bg-light">0</span>
              </button>
              <button className="btn btn-secondary">
                <i className="fa-solid fa-thumbs-down"></i>
              </button>
              <button className="btn btn-success">
                <i className="fa-solid fa-graduation-cap p-1"></i>
                <span className="badge text-bg-light">0</span>
              </button>
            </div>
            <div className="col-md-2 d-flex flex-column justify-content-center gap-3">
              <button className="btn btn-danger">
                <i className="fa-solid fa-plus p-1"></i>
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceInfo;
