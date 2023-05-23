import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function PTIndoprimaGemilang() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "PT Indoprima Gemilang";

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
        {jobList[181]}
        {jobList[182]}
        {jobList[183]}
        {jobList[184]}
        {jobList[185]}
        {jobList[186]}
        {jobList[187]}
        {jobList[188]}
        {jobList[189]}
        {jobList[190]}
        {jobList[191]}
        {jobList[192]}
        {jobList[193]}
        {jobList[194]}
        {jobList[195]}
        {jobList[196]}
        {jobList[197]}
        {jobList[198]}
        {jobList[217]}
        {jobList[218]}
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
          {companyProfile[181]}
        </section>
      </div>

      <div
        className="modal fade"
        id="jobModal181"
        tabindex="-1"
        aria-labelledby="jobModal181Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal181Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[181]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal182"
        tabindex="-1"
        aria-labelledby="jobModal182Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal182Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[182]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal183"
        tabindex="-1"
        aria-labelledby="jobModal183Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal183Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[183]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal184"
        tabindex="-1"
        aria-labelledby="jobModal184Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal184Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[184]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal185"
        tabindex="-1"
        aria-labelledby="jobModal185Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal185Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[185]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal186"
        tabindex="-1"
        aria-labelledby="jobModal186Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal186Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[186]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal187"
        tabindex="-1"
        aria-labelledby="jobModal187Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal187Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[187]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal188"
        tabindex="-1"
        aria-labelledby="jobModal188Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal188Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[188]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal189"
        tabindex="-1"
        aria-labelledby="jobModal189Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal189Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[189]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal190"
        tabindex="-1"
        aria-labelledby="jobModal190Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal190Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[190]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal191"
        tabindex="-1"
        aria-labelledby="jobModal191Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal191Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[191]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal192"
        tabindex="-1"
        aria-labelledby="jobModal192Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal192Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[192]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal193"
        tabindex="-1"
        aria-labelledby="jobModal193Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal193Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[193]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal194"
        tabindex="-1"
        aria-labelledby="jobModal194Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal194Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[194]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal195"
        tabindex="-1"
        aria-labelledby="jobModal195Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal195Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[195]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal196"
        tabindex="-1"
        aria-labelledby="jobModal196Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal196Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[196]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal197"
        tabindex="-1"
        aria-labelledby="jobModal197Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal197Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[197]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal198"
        tabindex="-1"
        aria-labelledby="jobModal198Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal198Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[198]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal217"
        tabindex="-1"
        aria-labelledby="jobModal217Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal217Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[217]}</div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobModal218"
        tabindex="-1"
        aria-labelledby="jobModal218Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal218Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{persyaratan[218]}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
