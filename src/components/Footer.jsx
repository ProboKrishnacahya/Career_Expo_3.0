import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer text-white pt-4 pb-1">
      <footer className="navbar d-inline shadow-sm user-select-none mt-auto">
        <div>
          <div className="container d-grid gap-2">
            <div className="d-grid gap-2 justify-content-center justify-content-lg-between align-items-center">
              <div className="row row-cols-1 row-cols-lg-3 g-4">
                <div className="col ">
                  <div className="d-grid gap-2">
                    <NavLink className="navbar-brand" to="/">
                      <img
                        src="/images/brand/career-expo_monochrome.svg"
                        alt="Corporate Entrepreneurship"
                        width={136}
                      />
                    </NavLink>
                    <a href="https://goo.gl/maps/kcKtWyQcjksTkcy18">
                      CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota
                      Surabaya, Jawa Timur, 60219, Indonesia
                    </a>
                  </div>
                </div>
                <div className="col d-grid gap-4">
                  <div>
                    <h5>Powered By</h5>
                    <div className="d-flex gap-2 align-items-center">
                      <div>
                        <img
                          src="/images/brand/universitas_ciputra.png"
                          alt="Universitas Ciputra Surabaya"
                          width={64}
                        />
                      </div>
                      <div>
                        <img
                          src="/images/brand/corporate_entrepreneurship.png"
                          alt="Corporate Entrepreneurship"
                          width={128}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="d-grid gap-1">
                        <h5>Contact Us</h5>
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
                          &ensp;
                          <span>uc_careerexpo</span>
                        </a>
                        <a
                          href="https://www.tiktok.com/@uc_corporateentrepreneur"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="bi bi-tiktok"
                            data-bs-toggle="tooltip"
                            title="TikTok"
                          ></i>
                          &ensp;
                          <span>uc_corporateentrepreneur</span>
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
                          &ensp;
                          <span>Universitas Ciputra Surabaya</span>
                        </a>
                        <a
                          href="mailto:careerexpouc2021@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="bi bi-envelope"
                            data-bs-toggle="tooltip"
                            title="Email"
                          ></i>
                          &ensp;
                          <span>careerexpouc2021@gmail.com</span>
                        </a>
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <h5>Links</h5>
                  <div className="d-grid gap-1">
                    <NavLink to="/company-list">Company List</NavLink>
                    <NavLink to="/job-vacancy">Job Vacancy</NavLink>
                    <NavLink to="/career-expo">Career Expo</NavLink>
                    <NavLink to="/workshop">Workshop</NavLink>
                    <NavLink to="/register">Register Here</NavLink>
                    <NavLink to="/sponsors">Sponsors</NavLink>
                    <NavLink to="/media-partners">Media Partners</NavLink>
                    <NavLink to="/about">Corporate Entrepreneurship</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <h3 className="text-center">UC Corporate Entrepreneurship 2023</h3>
            <div className="text-end">
              <h1>
                <i
                  className="bi bi-arrow-up-circle-fill text-link"
                  id="scrollToTop"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}
                  data-bs-toggle="tooltip"
                  data-bs-placement="left"
                  title="Scroll to Top Page"
                ></i>
              </h1>
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
