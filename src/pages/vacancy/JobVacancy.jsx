import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { job } from "../../data/vacancy/JobVacancy";

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
  }, []);

  const jobVacancy = job.map((job) => (
    <div className="col">
      <a href={job.companyURL} className="company-list">
        <div
          className="card text-center px-0 py-2 h-100"
          id={job.industry + job.type}
        >
          <img
            src={job.image}
            alt="Company List"
            loading="lazy"
            className="card-img-top w-50 h-50 mx-auto py-2"
          />
          <div className="card-body py-2 d-grid justify-content-center align-items-center">
            <h3>{job.position}</h3>
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

          <div className="tab-content" id="pills-tabContent">
            <div className="row gap-3 gap-md-0">
              <div className="col-md-4">
                <div className="card" id="side">
                  <ul className="nav d-grid" role="tablist">
                    <details open>
                      <summary className="pb-3">
                        <strong>Kategori Industri</strong>
                      </summary>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active rounded-3"
                          id="pills-advertisement-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-advertisement"
                          type="button"
                          role="tab"
                          aria-controls="pills-advertisement"
                          aria-selected="true"
                        >
                          Advertisement
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-art-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-art"
                          type="button"
                          role="tab"
                          aria-controls="pills-art"
                          aria-selected="false"
                        >
                          Art
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-automotif-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-automotif"
                          type="button"
                          role="tab"
                          aria-controls="pills-automotif"
                          aria-selected="false"
                        >
                          Automotif
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-banking-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-banking"
                          type="button"
                          role="tab"
                          aria-controls="pills-banking"
                          aria-selected="false"
                        >
                          Banking
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-consumer-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-consumer"
                          type="button"
                          role="tab"
                          aria-controls="pills-consumer"
                          aria-selected="false"
                        >
                          Consumer
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-goods-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-goods"
                          type="button"
                          role="tab"
                          aria-controls="pills-goods"
                          aria-selected="false"
                        >
                          Goods
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-foodandbeverage-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-foodandbeverage"
                          type="button"
                          role="tab"
                          aria-controls="pills-foodandbeverage"
                          aria-selected="false"
                        >
                          Food and Beverage
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-financialtechnology-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-financialtechnology"
                          type="button"
                          role="tab"
                          aria-controls="pills-financialtechnology"
                          aria-selected="false"
                        >
                          Financial Technology
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-hospitality-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-hospitality"
                          type="button"
                          role="tab"
                          aria-controls="pills-hospitality"
                          aria-selected="false"
                        >
                          Hospitality
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-insurance-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-insurance"
                          type="button"
                          role="tab"
                          aria-controls="pills-insurance"
                          aria-selected="false"
                        >
                          Insurance
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-logistictransportation-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-logistictransportation"
                          type="button"
                          role="tab"
                          aria-controls="pills-logistictransportation"
                          aria-selected="false"
                        >
                          Logistic Transportation
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-manufacturing-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-manufacturing"
                          type="button"
                          role="tab"
                          aria-controls="pills-manufacturing"
                          aria-selected="false"
                        >
                          Manufacturing
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-printing-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-printing"
                          type="button"
                          role="tab"
                          aria-controls="pills-printing"
                          aria-selected="false"
                        >
                          Printing
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-property-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-property"
                          type="button"
                          role="tab"
                          aria-controls="pills-property"
                          aria-selected="false"
                        >
                          Property
                        </button>
                      </li>
                    </details>
                    <hr />
                    <details>
                      <summary className="pb-3">
                        <strong>Tipe Pekerjaan</strong>
                      </summary>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link rounded-3"
                          id="pills-fulltime-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-fulltime"
                          type="button"
                          role="tab"
                          aria-controls="pills-fulltime"
                          aria-selected="false"
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
                    </details>
                  </ul>
                </div>
              </div>

              <div className="col-md-8">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="pills-advertisement"
                    role="tabpanel"
                    aria-labelledby="pills-advertisement-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[0]}
                      {jobVacancy[2]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-art"
                    role="tabpanel"
                    aria-labelledby="pills-art-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[1]}
                      {jobVacancy[4]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-automotif"
                    role="tabpanel"
                    aria-labelledby="pills-automotif-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[3]}
                      {jobVacancy[9]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-banking"
                    role="tabpanel"
                    aria-labelledby="pills-banking-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[2]}
                      {jobVacancy[4]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-consumer"
                    role="tabpanel"
                    aria-labelledby="pills-consumer-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[1]}
                      {jobVacancy[5]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-goods"
                    role="tabpanel"
                    aria-labelledby="pills-goods-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[11]}
                      {jobVacancy[4]}
                      {jobVacancy[0]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-foodandbeverage"
                    role="tabpanel"
                    aria-labelledby="pills-foodandbeverage-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[0]}
                      {jobVacancy[8]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-financialtechnology"
                    role="tabpanel"
                    aria-labelledby="pills-financialtechnology-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[11]}
                      {jobVacancy[1]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-hospitality"
                    role="tabpanel"
                    aria-labelledby="pills-hospitality-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[10]}
                      {jobVacancy[2]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-insurance"
                    role="tabpanel"
                    aria-labelledby="pills-insurance-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[3]}
                      {jobVacancy[5]}
                      {jobVacancy[6]}
                      {jobVacancy[8]}
                      {jobVacancy[9]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-logistictransportation"
                    role="tabpanel"
                    aria-labelledby="pills-logistictransportation-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[6]}
                      {jobVacancy[7]}
                      {jobVacancy[8]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-manufacturing"
                    role="tabpanel"
                    aria-labelledby="pills-manufacturing-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[2]}
                      {jobVacancy[3]}
                      {jobVacancy[5]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-printing"
                    role="tabpanel"
                    aria-labelledby="pills-printing-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[4]}
                      {jobVacancy[7]}
                      {jobVacancy[11]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-property"
                    role="tabpanel"
                    aria-labelledby="pills-property-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[8]}
                      {jobVacancy[2]}
                      {jobVacancy[6]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-fulltime"
                    role="tabpanel"
                    aria-labelledby="pills-fulltime-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[7]}
                      {jobVacancy[5]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-parttime"
                    role="tabpanel"
                    aria-labelledby="pills-parttime-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[9]}
                      {jobVacancy[10]}
                      {jobVacancy[11]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-freelance"
                    role="tabpanel"
                    aria-labelledby="pills-freelance-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[8]}
                      {jobVacancy[9]}
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-internship"
                    role="tabpanel"
                    aria-labelledby="pills-internship-tab"
                  >
                    <div className="row row-cols-1 row-cols-lg-2 g-3">
                      {jobVacancy[10]}
                      {jobVacancy[11]}
                    </div>
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
