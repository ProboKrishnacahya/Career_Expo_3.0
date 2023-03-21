import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="images/corporate_entrepreneurship.png"
              alt="Corporate Entrepreneurship"
              width={128}
            />
          </NavLink>
          <button
            className="navbar-toggler collapsed border border-2 border-secondary bg-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <button
              type="button"
              className="btn-close btn-close-white p-2"
              aria-label="Close"
            ></button>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Vacancy
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/company-list">
                        Company List
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/job-vacancy">
                        Job Vacancy
                      </a>
                    </li>
                  </ul>
                </div>
                <NavLink className="nav-link" to="/vacancy">
                  Vacancy
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/skills">
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  Collaborations
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/blogs">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
