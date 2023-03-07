import React from "react";
import { Link, useNavigate } from "react-router-dom";

const DashboardNavigation = () => {
  const navigate = useNavigate();
  function logOutBtn() {
    const confirmBtn = window.confirm("Are you use to logout");
    if (confirmBtn === true) {
      navigate("/login");
    }
  }

  return (
    <div className="sticky-top">
      <header className="bg-white shadow border-bottom ">
        <nav className="py-3 container d-flex justify-content-between align-items-center">
          <div className="nav-logo ">
            <Link to="/" className="text-decoration-none text-danger display-6">
              Jobify
            </Link>
          </div>
          <div className="nav-links d-flex gap-3 align-items-center">
            <Link
              to="/dashboard"
              className="text-reset text-decoration-none text-dark">
              Dashboard
            </Link>
            <Link
              to="/my-jobs"
              className="text-reset text-decoration-none text-dark">
              My jobs
            </Link>
            <Link to="/jobs" className="text-decoration-none text-dark">
              Explore
            </Link>
            <button onClick={logOutBtn} className="btn btn-danger">
              Logout
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default DashboardNavigation;
