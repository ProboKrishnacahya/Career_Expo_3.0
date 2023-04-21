import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function PageNotFound() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "404 Page Not Found";
  }, []);

  return (
    <div className="container">
      <div
        className="vh-100 d-grid justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <div className="card text-center">
          <h2 className="text-danger">
            <i className="bi bi-exclamation-circle display-1"></i>
            <br />
            404 Page Not Found
          </h2>
          <hr />
          <p>Oops.. The page you are looking for was not found.</p>
          <br />
          <NavLink className="btn btn-primary btn-lg" to="/">
            <i className="bi bi-house-door"></i>&ensp;
            <strong>Back to Home</strong>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
