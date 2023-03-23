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
          <span>
            <h2>
              <i className="bi bi-exclamation-circle"></i>&ensp;404 Page Not
              Found
            </h2>
          </span>
          <hr />
          <p className="fs-5">
            Oops.. The page you are looking for was not found.
          </p>
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
