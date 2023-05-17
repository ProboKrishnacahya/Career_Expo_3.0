import React from "react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer text-white pt-4 pb-1">
      <footer className="navbar d-inline shadow-sm user-select-none mt-auto">
        <div>
          <div className="container d-grid gap-2">
            <div className="d-grid gap-2 justify-content-center justify-content-lg-between align-items-center">
              <div className="row justify-content-between">
                <div className="col-lg-3">
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
                <div className="col-lg-5 d-grid gap-2 justify-content-lg-center">
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
                      <h5>Contact Us</h5>
                      <strong>
                        <ul className="list-unstyled">
                          <li>
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
                          </li>
                          <li>
                            <a
                              href="https://www.tiktok.com/@careerexpouc"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-tiktok"
                                data-bs-toggle="tooltip"
                                title="TikTok"
                              ></i>
                              &ensp;
                              <span>careerexpouc</span>
                            </a>
                          </li>
                          <li>
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
                          </li>
                          <li>
                            <a
                              href="mailto:uccorporateentrepreneurship@gmail.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i
                                className="bi bi-envelope"
                                data-bs-toggle="tooltip"
                                title="Email"
                              ></i>
                              &ensp;
                              <span>uccorporateentrepreneurship@gmail.com</span>
                            </a>
                          </li>
                        </ul>
                      </strong>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <h5>Links</h5>
                  <ul className="list-unstyled">
                    <li>
                      <NavLink to="/company-list">Company List</NavLink>
                    </li>
                    <li>
                      <NavLink to="/job-vacancy">Job Vacancy</NavLink>
                    </li>
                    <li>
                      <NavLink to="/career-expo">Career Expo</NavLink>
                    </li>
                    <li>
                      <NavLink to="/workshop">Workshop</NavLink>
                    </li>
                    <li>
                      <NavLink to="/talkshow">Talkshow</NavLink>
                    </li>
                    <li>
                      <NavLink to="/register">Register Here</NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">Corporate Entrepreneurship</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/blog">Blog</NavLink>
                    </li>
                  </ul>
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
