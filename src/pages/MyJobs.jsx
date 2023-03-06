import React from "react";
import DashboardNavigation from "../components/DashboardNavigation";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");

  const postLike = (id) => {
    (async () => {
      try {
        const data = await axios.put(`/jobs/like/${id}`);
        const jobs = await axios.get("/jobs");
        setJobs(jobs?.data);
        toast.success("Liked successfully")
      } catch (error) {
        toast.warning(error.response.data.msg);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/jobs");
        console.log(data);
        setTitle(data.data.title);
        setDescription(data.data.description);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <DashboardNavigation />
      <div className="container py-5">
        <h1>Do you want to create a job opportunities?</h1>
        <p>Enter necessary details and submit</p>
        <form className="my-3">
          <div>
            <label className="form-label" htmlFor="title">
              Job Title
            </label>
            <input
              className="form-control"
              type="text"
              id="title"
              placeholder="Senior React Developer"
            />
          </div>
          <div>
            <label className="form-label" htmlFor="description">
              Job Description
            </label>
            <textarea
              className="form-control"
              rows="5"
              id="description"
              placeholder="Tell a little bit job requirements and benefits..."
            />
          </div>
          <button className="btn btn-danger w-100 mt-3">
            Submit
          </button>
        </form>
        <h2>Jobs you posted</h2>
      </div>
    </div>
  );
};

export default MyJobs;
