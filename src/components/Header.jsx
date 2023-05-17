/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              src="/images/brand/career-expo_complementary.svg"
              alt="Corporate Entrepreneurship"
              width={96}
            />
          </NavLink>
          <button
            className="navbar-toggler collapsed btn-primary"
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
              className="btn-close btn-close-white"
              aria-label="Close"
            ></button>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4 my-3 my-lg-0">
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
                      <NavLink to="/company-list" className="dropdown-item">
                        Company List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/job-vacancy" className="dropdown-item">
                        Job Vacancy
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Events
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/career-expo" className="dropdown-item">
                        Career Expo
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/workshop" className="dropdown-item">
                        Workshop
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/talkshow" className="dropdown-item">
                        Talkshow
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/register" className="dropdown-item">
                        Register Here
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <NavLink to="/about" className="dropdown-item">
                        Corporate Entrepreneurship
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery" className="dropdown-item">
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog" className="dropdown-item">
                        Blog
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
