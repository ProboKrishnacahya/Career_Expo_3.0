import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { job } from "../../data/vacancy/JobVacancy";
import $ from "jquery";

export default function JobVacancy() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Job Vacancy";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });

    // * Filter Tipe Pekerjaan
    $(function () {
      $("select")
        .on("change", function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).val();
              if (optionValue) {
                $(".tipePekerjaan")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".tipePekerjaan").hide();
              }
            });
        })
        .change();
    });
  }, []);

  const jobVacancy = job.map((job) => (
    <div className="col">
      <a href={job.companyURL} className="company-list">
        <div className="card text-center px-0 py-2 h-100" id={job.type}>
          <img
            src={job.image}
            alt={job.name}
            loading="lazy"
            className="card-img-top w-75 h-75 mx-auto py-2"
          />
          <div className="card-body py-2 d-grid justify-content-center align-items-center">
            <h3>{job.jabatan}</h3>
            <span className="text-bg-info rounded-pill my-2 p-1">
              {job.divisi}
            </span>
            <span className="text-muted">{job.name}</span>
          </div>
          <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
            <button className="btn btn-primary w-100">
              <i className="bi bi-briefcase"></i>&ensp;
              <strong>Lihat Lowongan</strong>
            </button>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="job-vacancy">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Job Vacancy</h2>
          <br />

          <div className="d-grid d-md-none gap-4">
            <div>
              <select className="form-select">
                <option value="fullTimeOption">Full Time</option>
                <option value="partTimeOption">Part Time</option>
                <option value="freelanceOption">Freelance</option>
                <option value="internshipOption">Internship</option>
              </select>
            </div>
            <div>
              <div className="fullTimeOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                {jobVacancy[2]}
                {jobVacancy[1]}
                {jobVacancy[0]}
              </div>
              <div className="partTimeOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                {jobVacancy[0]}
                {jobVacancy[2]}
                {jobVacancy[1]}
              </div>
              <div className="freelanceOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                {jobVacancy[1]}
                {jobVacancy[2]}
                {jobVacancy[0]}
              </div>
              <div className="internshipOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                {jobVacancy[1]}
                {jobVacancy[0]}
                {jobVacancy[2]}
              </div>
            </div>
          </div>

          <div className="d-none d-md-block">
            <ul
              className="nav nav-pills nav-fill gap-2 p-1 rounded-3 mb-4"
              id="pillNav"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active rounded-3"
                  id="pills-fulltime-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-fulltime"
                  type="button"
                  role="tab"
                  aria-controls="pills-fulltime"
                  aria-selected="true"
                >
                  Full Time
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-parttime-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-parttime"
                  type="button"
                  role="tab"
                  aria-controls="pills-parttime"
                  aria-selected="false"
                >
                  Part Time
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-freelance-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-freelance"
                  type="button"
                  role="tab"
                  aria-controls="pills-freelance"
                  aria-selected="false"
                >
                  Freelance
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-internship-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-internship"
                  type="button"
                  role="tab"
                  aria-controls="pills-internship"
                  aria-selected="false"
                >
                  Internship
                </button>
              </li>
            </ul>

            <div className="col">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-fulltime"
                  role="tabpanel"
                  aria-labelledby="pills-fulltime-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {jobVacancy[2]}
                    {jobVacancy[1]}
                    {jobVacancy[0]}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-parttime"
                  role="tabpanel"
                  aria-labelledby="pills-parttime-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {jobVacancy[0]}
                    {jobVacancy[2]}
                    {jobVacancy[1]}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-freelance"
                  role="tabpanel"
                  aria-labelledby="pills-freelance-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {jobVacancy[1]}
                    {jobVacancy[2]}
                    {jobVacancy[0]}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-internship"
                  role="tabpanel"
                  aria-labelledby="pills-internship-tab"
                >
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {jobVacancy[1]}
                    {jobVacancy[0]}
                    {jobVacancy[2]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
