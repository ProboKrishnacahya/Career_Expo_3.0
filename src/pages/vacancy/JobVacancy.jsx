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
        <div className="card text-center px-0 py-2 h-100">
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
                  <select
                    className="form-select m-0 p-0 border-0"
                    aria-label="Job Select Option"
                    size={15}
                  >
                    <optgroup label="Kategori Industri">
                      <hr className="my-2 opacity-0" />
                      <option selected>Semua Industri</option>
                      <option value="Advertisement">Advertisement</option>
                      <option value="Art">Art</option>
                      <option value="Automotif">Automotif</option>
                      <option value="Banking">Banking</option>
                      <option value="Consumer">Consumer</option>
                      <option value="Goods">Goods</option>
                      <option value="FoodandBeverage">Food and Beverage</option>
                      <option value="FinancialTechnology">
                        Financial Technology
                      </option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Insurance">Insurance</option>
                      <option value="LogisticTransportation">
                        Logistic Transportation
                      </option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Printing">Printing</option>
                      <option value="Property">Property</option>
                    </optgroup>
                    <hr className="my-4" />
                    <optgroup label="Tipe Pekerjaan">
                      <hr className="my-2 opacity-0" />
                      <option value="FullTime">Full Time</option>
                      <option value="PartTime">Part Time</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Internship">Internship</option>
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="col-md-8">
                <div className="row row-cols-1 row-cols-lg-2 g-3">
                  {jobVacancy}
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
