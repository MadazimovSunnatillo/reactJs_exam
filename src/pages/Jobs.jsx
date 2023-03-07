import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardNavigation from "../components/DashboardNavigation";
import axios from "axios";
import { toast } from "react-toastify";

const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const jobs = await axios.get("/jobs");
        setJobs(jobs?.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const [like, setLike] = useState(0);
  const postLike = (id) => {
    (async () => {
      try {
        const data = await axios.put(`/jobs/like/${id}`);
        const jobs = await axios.get("/jobs");
        setLike(like + 1);
        console.log(jobs);
        setJobs(jobs?.data);
        toast.success("Liked successfully");
      } catch (error) {
        toast.warning(error.response.data.msg);
      }
    })();
  };
  const [unLike, setUnLike] = useState(0);
  const postUnLike = (id) => {
    (async () => {
      try {
        const data = await axios.put(`/jobs/unlike/${id}`);
        console.log(data);
        const jobs = await axios.get("/jobs");
        setUnLike(unLike + 1);
        setJobs(jobs?.data);
        toast.success("Disliked");
      } catch (error) {
        console.log(error.response.data.msg);
      }
    })();
  };

  return (
    <div>
      <DashboardNavigation />
      <div className="container py-5">
        <h1>Find the best opportunities...</h1>
        {jobs &&
          jobs.map((item, index) => (
            <div className="bg-white border my-3 p-3" key={index}>
              <div className="row">
                <div className="col-md-8">
                  <Link
                    className="text-decoration-none text-reset"
                    to={`/jobs/${item._id}`}
                  >
                    <h3>{item?.title}</h3>
                    <p>{item?.description}</p>
                    <p>By: {item?.name}</p>
                    <p>{item?.date}</p>
                  </Link>
                </div>
                <div className="col-md-2 d-flex flex-column gap-3">
                  <button
                    className="btn btn-primary"
                    onClick={() => postLike(item._id)}
                  >
                    <i className="fa-solid fa-thumbs-up p-1"></i>
                    <span className="badge text-bg-light">
                      {item?.likes?.length}
                    </span>
                  </button>
                  <button onClick={()=>postUnLike(item._id)} className="btn btn-secondary">
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
                    {item?.applicants?.length ? "Applied" : "Apply"}
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Jobs;
