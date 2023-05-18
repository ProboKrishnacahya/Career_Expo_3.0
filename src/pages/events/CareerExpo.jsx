import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { day1, day2 } from "../../data/events/CareerExpo";

export default function CareerExpo() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Career Expo";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="career-expo">
      <Header />

      <div className="container">
        <img
          src="/images/backgrounds/1.svg"
          alt="Background"
          id="hero1"
          width={96}
          className="d-none d-lg-block"
        />
        <img
          src="/images/backgrounds/2.svg"
          alt="Background"
          id="hero2"
          width={96}
          className="d-none d-lg-block"
        />
        <img
          src="/images/backgrounds/3.svg"
          alt="Background"
          id="about_us-powered_by"
          width={96}
          className="d-none d-lg-block"
        />
        <img
          src="/images/backgrounds/4.svg"
          alt="Background"
          id="pelaksanaan_acara"
          width={96}
          className="d-none d-lg-block"
        />

        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Career Expo</h2>
          <br />
          <ul
            className="nav nav-pills nav-fill gap-2 p-1 rounded-3 mb-4"
            id="pillNav"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active rounded-3"
                id="pills-day1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-day1"
                type="button"
                role="tab"
                aria-controls="pills-day1"
                aria-selected="true"
              >
                Day 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-3"
                id="pills-day2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-day2"
                type="button"
                role="tab"
                aria-controls="pills-day2"
                aria-selected="false"
              >
                Day 2
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-day1"
              role="tabpanel"
              aria-labelledby="pills-day1-tab"
            >
              <table className="table table-responsive table-light table-striped table-hover">
                <thead>
                  <tr className="text-white">
                    <th scope="col" className="bg-dark">
                      Start
                    </th>
                    <th scope="col" className="bg-dark">
                      End
                    </th>
                    <th scope="col" className="bg-dark">
                      Durasi
                    </th>
                    <th scope="col" className="bg-dark">
                      Kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {day1.map((rundown) => (
                    <tr>
                      <td>{rundown.start}</td>
                      <td>{rundown.end}</td>
                      <td>{rundown.duration + "'"}</td>
                      <td>{rundown.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              className="tab-pane fade"
              id="pills-day2"
              role="tabpanel"
              aria-labelledby="pills-day2-tab"
            >
              <table className="table table-responsive table-light table-striped table-hover">
                <thead>
                  <tr className="text-white">
                    <th scope="col" className="bg-dark">
                      Start
                    </th>
                    <th scope="col" className="bg-dark">
                      End
                    </th>
                    <th scope="col" className="bg-dark">
                      Durasi
                    </th>
                    <th scope="col" className="bg-dark">
                      Kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {day2.map((rundown) => (
                    <tr>
                      <td>{rundown.start}</td>
                      <td>{rundown.end}</td>
                      <td>{rundown.duration + "'"}</td>
                      <td>{rundown.activity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="d-grid gap-4 d-md-flex gap-md-3">
            <NavLink className="btn btn-primary w-100" to="/register">
              <i className="bi bi-person-plus"></i>&ensp;
              <strong>Daftar Sekarang</strong>
            </NavLink>
            <button
              type="button"
              className="btn btn-secondary w-100"
              data-bs-toggle="modal"
              data-bs-target="#posterCareerExpoModal"
            >
              <i className="bi bi-image"></i>&ensp;
              <strong>Poster Career Expo</strong>
            </button>
          </div>
        </section>
      </div>

      <div
        className="modal fade"
        id="posterCareerExpoModal"
        tabindex="-1"
        aria-labelledby="posterCareerExpoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header py-2">
              <div className="d-flex align-items-center">
                <h2 className="modal-title" id="posterCareerExpoModalLabel">
                  Poster Career Expo
                </h2>
                &emsp;
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <img
                src="/images/events/career_expo/Career Expo.jpg"
                alt="Career Expo"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
