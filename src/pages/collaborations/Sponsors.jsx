import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Sponsors() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Sponsors";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="sponsors">
      <Header />

      <div className="container vh-100 d-grid justify-content-center align-items-center">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Sponsors</h2>
          <br />
          <div
            id="carouselSponsors"
            className="carousel carousel-dark slide"
            data-bs-ride="false"
            data-bs-interval="false"
          >
            <div className="carousel-indicators d-none d-lg-flex">
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="1"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="2"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="3"
                aria-label="Sponsors"
              ></button>
            </div>
            <div className="carousel-inner text-center mx-auto">
              <div className="carousel-item active">
                <img
                  src="images/home/sponsors/berkah.jpeg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/surya.jpeg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/indofood.jpg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/biznet.jpg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselSponsors"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Previous"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselSponsors"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Next"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
