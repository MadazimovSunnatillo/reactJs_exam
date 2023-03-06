import React, { useEffect, useState } from "react";
import DashboardNavigation from "../components/DashboardNavigation";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const CreateProfile = () => {
  const token = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/auth");
        console.log(data);
        const dataMe = await axios.get("/me");
        console.log(dataMe);
      } catch (error) {
        toast.error(error.message);
      }
    })();
  }, []);
  return (
    <div>
      <DashboardNavigation />
      <form className="container py-5">
        <p className="text-danger">* = required fields</p>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="status">
              * Work Status
            </label>
            <select
              id="status"
              name="status"
              className="form-select"
              aria-label="Default select example"
            >
              <option>Select your work status</option>
              <option value="1">Open to Work</option>
              <option value="2">Open to Hire</option>
              <option value="3">Looking for new opportunities</option>
            </select>
            <p className="form-text">Select the best option that fits you</p>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="skills">
              * Skills
            </label>
            <input
              className="form-control"
              id="skills"
              type="text"
              placeholder="HTML, CSS, JS"
            />
            <p className="form-text">Separate each skill with comma(,)</p>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="company">
              Company
            </label>
            <input
              className="form-control"
              id="company"
              type="text"
              placeholder="Apple Inc."
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="location">
              Location
            </label>
            <input
              className="form-control"
              id="location"
              type="text"
              placeholder="One Apple Park Way; Cuppertino, CA 95014, U.S.A"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="website">
              Website
            </label>
            <input
              className="form-control"
              id="website"
              type="text"
              placeholder="apple.com"
            />
            <p className="form-text">
              You do not need to specify https protocol
            </p>
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="username">
              GitHub user name
            </label>
            <input
              className="form-control"
              id="username"
              type="text"
              placeholder="apple"
            />
            <p className="form-text">
              You need to specify only username (without https://github.com)
            </p>
          </div>
          <div className="col-md-12">
            <label className="form-label" htmlFor="bio">
              Bio
            </label>
            <textarea
              className="form-control"
              name="bio"
              id="bio"
              cols=""
              rows="5"
              placeholder="Tell us a little bit about yourself"
            ></textarea>
            <p className="form-text">
              You may say about your recent experience or what you are up to.
            </p>
          </div>
        </div>
        <button  className="btn btn-danger w-100">Create</button>
      </form>
    </div>
  );
};

export default CreateProfile;
