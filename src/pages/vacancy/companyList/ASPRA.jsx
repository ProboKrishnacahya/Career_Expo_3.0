import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function ASPRA() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "ASPRA";

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
          <h3 className="text-truncate">{job.jabatan}</h3>
          <span className="badge text-bg-info rounded-pill mt-2 text-truncate">
            {job.divisi}
          </span>
        </div>
        <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
          <a href={job.registerURL} target="_blank" rel="noopener noreferrer">
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
        {jobList[2]}
        {jobList[3]}
        {jobList[4]}
        {jobList[5]}
        {jobList[6]}
        {jobList[7]}
        {jobList[8]}
        {jobList[9]}
        {jobList[10]}
        {jobList[11]}
        {jobList[12]}
        {jobList[13]}
        {jobList[14]}
      </div>
    </div>
  ));

  const persyaratan = job.map((job) => (
    <div>
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
        <pre>{job.daerah}</pre>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          {companyProfile[2]}
        </section>
      </div>

      <div
        className="modal fade"
        id="jobModal2"
        tabindex="-1"
        aria-labelledby="jobModal2Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal2Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[2]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal3"
        tabindex="-1"
        aria-labelledby="jobModal3Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal3Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[3]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal4"
        tabindex="-1"
        aria-labelledby="jobModal4Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal4Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[4]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal5"
        tabindex="-1"
        aria-labelledby="jobModal5Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal5Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[5]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal6"
        tabindex="-1"
        aria-labelledby="jobModal6Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal6Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[6]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal7"
        tabindex="-1"
        aria-labelledby="jobModal7Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal7Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[7]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal8"
        tabindex="-1"
        aria-labelledby="jobModal8Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal8Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[8]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal9"
        tabindex="-1"
        aria-labelledby="jobModal9Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal9Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[9]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal10"
        tabindex="-1"
        aria-labelledby="jobModal10Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal10Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[10]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal11"
        tabindex="-1"
        aria-labelledby="jobModal11Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal11Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[11]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal12"
        tabindex="-1"
        aria-labelledby="jobModal12Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal12Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[12]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal13"
        tabindex="-1"
        aria-labelledby="jobModal13Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal13Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[13]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal14"
        tabindex="-1"
        aria-labelledby="jobModal14Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal14Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[14]}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
