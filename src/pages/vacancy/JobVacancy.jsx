import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { company } from "../../data/vacancy/CompanyList";

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

  const jobVacancy = company.map((company) => (
    <div className="col">
      <div className="card text-center px-0 py-2 h-100">
        <img
          src={company.image}
          alt="Company List"
          loading="lazy"
          className="card-img-top w-50 h-50 mx-auto py-2"
        />
        <div className="card-body py-2 d-grid justify-content-center align-items-center">
          <h3>{company.position}</h3>
          <a href={company.companyURL}>{company.name}</a>
        </div>
        <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
          <a
            href={company.registerURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-plus"></i>&ensp;
              <strong>Daftar</strong>
            </button>
          </a>
          <button
            className="btn btn-secondary w-100"
            data-bs-toggle="modal"
            data-bs-target="#jobModal"
          >
            <i className="bi bi-sticky"></i>&ensp;
            <strong>Persyaratan</strong>
          </button>
        </div>
      </div>
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
                      <option selected>Full Time</option>
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

      <div
        className="modal fade"
        id="jobModal"
        tabindex="-1"
        aria-labelledby="jobModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModalLabel">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">
              <div>
                <h4>
                  <i className="bi bi-tag"></i>&ensp;Lowongan
                </h4>
                <p>Staf Marketing (Part-time)</p>
              </div>
              <div>
                <h4>
                  <i className="bi bi-briefcase"></i>&ensp;Deskripsi Pekerjaan
                </h4>
                <ol>
                  <li>
                    Memastikan target penjualan dan kualitas penjualan yang baik
                  </li>
                </ol>
              </div>
              <div>
                <h4>
                  <i className="bi bi-list-task"></i>&ensp;Kriteria/Requirements
                </h4>
                <ul>
                  <li>Diutamakan Fresh Graduate</li>
                  <li>Usia maksimal 27 tahun</li>
                  <li>Pendidikan minimal SMA</li>
                  <li>Memiliki SIM C dan kendaraan bermotor</li>
                  <li>Berpenampilan menarik</li>
                  <li>Mampu bekerja dengan target</li>
                  <li>Memiliki kemampuan komunikasi yang baik</li>
                  <li>Memiliki kemampuan negosiasi yang baik</li>
                </ul>
              </div>
              <div>
                <h4>
                  <i className="bi bi-geo"></i>&ensp;Daerah Penempatan
                </h4>
                <p>Surabaya, Sidoarjo, Mojokerto, Malang</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
