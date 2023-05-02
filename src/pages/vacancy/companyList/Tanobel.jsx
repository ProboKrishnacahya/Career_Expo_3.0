import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function Tanobel() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Tanobel";

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
        {jobList.slice(111, 123)}
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
          {companyProfile[111]}
        </section>
      </div>

      <div
        className="modal fade"
        id="jobModal111"
        tabindex="-1"
        aria-labelledby="jobModal111Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal111Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[111]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal112"
        tabindex="-1"
        aria-labelledby="jobModal112Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal112Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[112]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal113"
        tabindex="-1"
        aria-labelledby="jobModal113Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal113Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[113]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal114"
        tabindex="-1"
        aria-labelledby="jobModal114Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal114Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[114]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal115"
        tabindex="-1"
        aria-labelledby="jobModal115Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal115Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[115]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal116"
        tabindex="-1"
        aria-labelledby="jobModal116Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal116Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[116]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal117"
        tabindex="-1"
        aria-labelledby="jobModal117Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal117Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[117]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal118"
        tabindex="-1"
        aria-labelledby="jobModal118Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal118Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[118]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal119"
        tabindex="-1"
        aria-labelledby="jobModal119Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal119Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[119]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal120"
        tabindex="-1"
        aria-labelledby="jobModal120Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal120Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[120]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal121"
        tabindex="-1"
        aria-labelledby="jobModal121Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal121Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[121]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal122"
        tabindex="-1"
        aria-labelledby="jobModal122Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal122Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[122]}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
