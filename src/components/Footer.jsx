import React from "react";

export default function Footer() {
  return (
    <div className="footer bg-warning text-white pt-3 pb-2">
      <footer className="navbar d-inline shadow-sm text-center user-select-none mt-auto">
        <div className="mx-auto">
          <div className="container">
            <div className="d-grid gap-2">
              <div className="d-flex gap-2 justify-content-center align-items-center">
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
                    width={48}
                  />
                </div>
              </div>
              <h6>UC Corporate Entrepreneurship 2023</h6>
            </div>
            <a href="https://goo.gl/maps/kcKtWyQcjksTkcy18">
              CitraLand CBD Boulevard, Made, Kec. Sambikerep, Kota Surabaya,
              Jawa Timur, 60219, Indonesia
            </a>
            <hr />
            <h2 className="d-flex justify-content-center gap-4">
              <a
                href="https://www.instagram.com/uc_careerexpo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-instagram"
                  data-bs-toggle="tooltip"
                  title="@uc_careerexpo"
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
                  title="Universitas Ciputra Surabaya"
                ></i>
              </a>
              <a
                href="mailto:careerexpouc2021@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="bi bi-envelope"
                  data-bs-toggle="tooltip"
                  title="careerexpouc2021@gmail.com"
                ></i>
              </a>
            </h2>
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
