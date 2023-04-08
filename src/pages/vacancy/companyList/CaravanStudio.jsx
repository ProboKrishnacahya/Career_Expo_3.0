import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function CaravanStudio() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Caravan Studio";

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
        <div className="card-body py-2 d-grid justify-content-center align-items-center">
          <h3>{job.position}</h3>
          <span className="text-muted">{job.name}</span>
        </div>
        <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
          <a
            href={job.registerURL}
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
            data-bs-target={job.persyaratan}
          >
            <i className="bi bi-sticky"></i>&ensp;
            <strong>Persyaratan</strong>
          </button>
        </div>
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
          {job.position} ({job.type})
        </p>
      </div>
      <div>
        <h4>
          <i className="bi bi-briefcase"></i>&ensp;Deskripsi Pekerjaan
        </h4>
        <pre>{job.deskripsi}</pre>
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
          <h2 className="text-center">Caravan Studio</h2>
          <img
            src="/images/vacancy/company_list/caravanstudio.webp"
            alt="Brand"
            className="d-block mx-auto my-4"
            width={512}
            loading="lazy"
          />
          <div className="my-4">
            <p>
              Caravan Studio adalah sebuah studio art outsourcing kelas dunia
              dengan pengalaman lebih dari 10 tahun membuat desain dan ilustrasi
              untuk perusahaan di dunia, seperti Marvel Comics, Wizard of the
              Coast, Hasbro, Mattel, DeNA, Gree, Capcom, Konami, Sony Online
              Entertainment, Riot Games, dan HBO Asia.
            </p>
            <p>
              Caravan Studio fokus pada produksi artwork 2D dalam bentuk komik,
              ilustrasi, desain mainan, desain konsep visual untuk video game
              dan film. Berlokasi di Indonesia, Caravan Studio saat ini
              merupakan salah satu studio konsep desain terbesar di Asia
              Tenggara
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
            {jobList[2]}
            {jobList[3]}
          </div>
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

      <Footer />
    </div>
  );
}
