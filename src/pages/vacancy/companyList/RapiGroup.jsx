import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function RapiGroup() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Rapi Group";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const jobList = job.map((job) => (
    <div key={job.id} className="col">
      <div className="card text-center px-0 py-2 h-100">
        <div className="card-body py-3 d-grid justify-content-center align-items-center">
          <h4>{job.jabatan}</h4>
          <strong className="text-truncate mt-3">{job.divisi}</strong>
        </div>
        <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
          <a href={job.daftarURL} target="_blank" rel="noopener noreferrer">
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-plus"></i>&ensp;
              <strong>Daftar</strong>
            </button>
          </a>
          <button
            className="btn btn-secondary w-100"
            data-bs-toggle="modal"
            data-bs-target={`#jobModal${job.id}`}
          >
            <i className="bi bi-sticky"></i>&ensp;
            <strong>Persyaratan</strong>
          </button>
        </div>
      </div>
    </div>
  ));

  const companyProfile = job.map((job) => (
    <div>
      <h2 className="text-center">{job.name}</h2>
      <div className="row align-items-center">
        <div className="col-lg-4">
          <img
            src={job.image}
            alt={job.name}
            className="d-block mx-auto my-4"
            width={512}
            loading="lazy"
          />
        </div>
        <div className="col-lg-8">
          <div className="my-4">
            <pre>{job.deskripsiPerusahaan}</pre>
          </div>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4 mt-1">
        {jobList[94]}
        {jobList[95]}
        {jobList[96]}
        {jobList[205]}
        {jobList[97]}
        {jobList[206]}
        {jobList[207]}
      </div>
    </div>
  ));

  const persyaratan = job.map((job) => (
    <div className="d-grid gap-2">
      <div>
        <h4>
          <i className="bi bi-tag"></i>&ensp;Lowongan
        </h4>
        <p>
          {job.jabatan}&nbsp;({job.tipe})
        </p>
      </div>
      <div>
        <h4>
          <i className="bi bi-briefcase"></i>&ensp;Deskripsi Pekerjaan
        </h4>
        <pre>{job.deskripsiPekerjaan}</pre>
      </div>
      <div>
        <h4>
          <i className="bi bi-list-task"></i>&ensp;Kriteria/Requirements
        </h4>
        <pre>{job.kriteria}</pre>
      </div>
      <div>
        <h4>
          <i className="bi bi-geo"></i>&ensp;Daerah Penempatan
        </h4>
        <pre>{job.daerahPenempatan}</pre>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          {companyProfile[94]}
        </section>
      </div>

      <div
        className="modal fade"
        id="jobModal94"
        tabindex="-1"
        aria-labelledby="jobModal94Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal94Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[94]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal95"
        tabindex="-1"
        aria-labelledby="jobModal95Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal95Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[95]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal96"
        tabindex="-1"
        aria-labelledby="jobModal96Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal96Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[96]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal97"
        tabindex="-1"
        aria-labelledby="jobModal97Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal97Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[97]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal205"
        tabindex="-1"
        aria-labelledby="jobModal205Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal205Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[205]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal206"
        tabindex="-1"
        aria-labelledby="jobModal206Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal206Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[206]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal207"
        tabindex="-1"
        aria-labelledby="jobModal207Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal207Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[207]}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
