import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-warning bg-gradient pt-3 pb-2">
      <footer className="navbar d-inline shadow-sm text-center user-select-none mt-auto">
        <div className="mx-auto">
          <div className="container">
            <NavLink to="/">
              <img
                src="images/corporate_entrepreneurship.png"
                alt="Corporate Entrepreneurship"
                width={128}
              />
              <br />
              &nbsp;
              <span className="text-footer text-link">
                UC Corporate Entrepreneurship 2023
              </span>
            </NavLink>
            <br />
            <span className="text-footer">
              CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya,
              Jawa Timur, 60219, Indonesia
            </span>
            <hr />
            <h3 className="d-flex justify-content-center gap-4">
              <a
                href="mailto:careerexpouc2021@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-envelope"
                  data-bs-toggle="tooltip"
                  title="E-Mail"
                ></i>
              </a>
              <a
                href="https://www.youtube.com/@UniversitasCiputraOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-youtube"
                  data-bs-toggle="tooltip"
                  title="YouTube"
                ></i>
              </a>
              <a
                href="https://www.instagram.com/uc_careerexpo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-instagram"
                  data-bs-toggle="tooltip"
                  title="Instagram"
                ></i>
              </a>
            </h3>
            <div className="text-end mt-5">
              <i
                className="bi bi-arrow-up-circle-fill fs-1 text-link"
                id="scrollToTop"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToTop();
                }}
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Scroll to Top Page"
              ></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
