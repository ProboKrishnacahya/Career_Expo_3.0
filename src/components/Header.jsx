/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark user-select-none py-3">
        <div className="container">
          <NavLink
            className="navbar-brand d-flex gap-2 align-items-center"
            to="/"
          >
            <div>
              <img
                src="images/brand/universitas_ciputra.png"
                alt="Corporate Entrepreneurship"
                width={64}
              />
            </div>
            <div>
              <img
                src="images/brand/corporate_entrepreneurship.png"
                alt="Corporate Entrepreneurship"
                width={128}
              />
            </div>
            <div>
              <img
                src="images/brand/career_expo.png"
                alt="Corporate Entrepreneurship"
                width={96}
              />
            </div>
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
                      <a className="dropdown-item" href="/career-expo">
                        Career Expo 3.0
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/webinar">
                        Webinar
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/register">
                        Register Here
                      </a>
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
                    Collaborations
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/sponsors">
                        Sponsors
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/media-partners">
                        Media Partners
                      </a>
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
                      <a className="dropdown-item" href="/about">
                        Corporate Entrepreneurship
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/gallery">
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/blog">
                        Blog
                      </a>
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
