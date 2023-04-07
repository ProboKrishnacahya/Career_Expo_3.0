import React from "react";

export default function Footer() {
  return (
    <div className="footer text-white pt-4 pb-1">
      <footer className="navbar d-inline shadow-sm text-center user-select-none mt-auto">
        <div>
          <div className="container d-grid gap-2">
            <div className="d-grid d-lg-flex gap-2 justify-content-center justify-content-lg-between align-items-center">
              <div>
                <img
                  src="/images/brand/career-expo_monochrome.svg"
                  alt="Corporate Entrepreneurship"
                  width={128}
                />
              </div>
              <div className="d-flex gap-2 align-items-center">
                <div>
                  <img
                    src="/images/brand/universitas_ciputra.png"
                    alt="Corporate Entrepreneurship"
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

            <hr />
            <a href="https://goo.gl/maps/kcKtWyQcjksTkcy18">
              CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya,
              Jawa Timur, 60219, Indonesia
            </a>
            <strong className="d-grid gap-2 justify-content-center d-lg-flex gap-lg-4">
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
