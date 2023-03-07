import React, { useEffect, useState } from "react";
import DashboardNavigation from "../components/DashboardNavigation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const AddProfile = () => {
  const [authData, setAuthData] = useState({});
  const [message, setMessage] = useState("");
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  function createProfileBtn() {
    navigate("/create-profile");
  }
  function addExperience() {
    navigate("/add-experience");
  }
  function addEducation() {
    navigate("/add-education");
  }

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/profile/me");
        setProfile(data?.data);
        console.log(data);
      } catch (error) {
        setMessage(error.response.data.msg);
        toast.error(error.response.data.msg);
        console.log(error);
      }
      try {
        const auth = await axios.get("/auth");
        setAuthData(auth.data);
      } catch (error) {}
    })();
  }, []);

  return (
    <div>
      <DashboardNavigation />
      {message === "There is no profile for this user" ? (
        <div>
          <div className="container my-5">
            <h1>Hello, {authData.name}</h1>
            <p>You have not created an profile yet.</p>
            <button onClick={createProfileBtn} className="btn btn-danger">
              Create Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="container py-5">
          <h1>Hello, {authData.name}</h1>
          <p>What are you planning to do today?</p>
          <div className="d-flex gap-3">
            <Link to="/my-jobs" className="btn btn-primary">
              Post a job
            </Link>
            <Link to="/jobs" className="btn btn-info">
              Explore jobs
            </Link>
          </div>
          <div>
            <h2>Your Info</h2>
            <div className="bg-light border p-3">
              <div className="row">
                <div className="col-md-2">
                  <img
                    className="rounded-circle img-fluid"
                    src="https://gravatar.com/avatar/5c8bf2ce4b47f3a700ac96c275a07ca6?d=mm&r=pg&s=200"
                    alt=""
                  />
                </div>
                <div className="col-md-4">
                  <div>
                    Email: <a href="#">{authData.email}</a>
                  </div>
                  <div>Status: {profile.status}/</div>
                  <div>Location: {profile.location} </div>
                  <div>Bio: {profile.bio}</div>
                  <div>Joined: at {profile.date}</div>
                </div>
                <div className="col-md-4">
                  <div>Company: {profile.company}</div>
                  <div>Website: {profile.website}</div>
                  <div>Skills: </div>
                  <div className="d-flex gap-3 flex-wrap">
                    <div>
                      <i className="fa-solid fa-check text-danger"></i>
                      {profile.skills}
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <ul className="list-unstyled d-flex flex-column h-100 justify-content-evenly"></ul>
                </div>
                <div className="col text-end d-flex gap-3 justify-content-end pt-5 px-5">
                  <Link className="btn btn-info" to="/create-profile">
                    Edit profile
                  </Link>
                  <Link className="btn btn-primary" to="/edit-profile/socials">
                    Edit socials
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h2>Experiences</h2>
            <div className="bg-light border p-3">
              <h4 className="text-center">No Experience Added.</h4>
              <div className="text-center">
                <button onClick={addExperience} className="btn btn-danger">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h2>Educations</h2>
            <div className="bg-light border p-3">
              <h4 className="text-center">No Education Added.</h4>
              <div className="text-center">
                <button onClick={addEducation} className="btn btn-danger">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="py-3">
            <h2>Recent Git Repos</h2>
            <div className="bg-light border p-5">
              <h2 className="display-1 text-danger">!!!DANGER ZONE!!!</h2>
              <p>
                This area is so dangerous. You may delete all your data by
                accident in here! PLEASE BE CAREFUL!!!
              </p>
              <button className="btn btn-danger">Delete account</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProfile;
