import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import { job } from "../../../data/vacancy/JobVacancy";

export default function CCCO() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "C+C&Co";

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
            data-bs-target="#jobModal1"
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
        <pre>{job.jobDescription}</pre>
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
          <h2 className="text-center">C+C&Co</h2>
          <img
            src="/images/vacancy/company_list/c+c&co.png"
            alt="Brand"
            className="d-block mx-auto my-4"
            width={512}
            loading="lazy"
          />
          <div className="my-4">
            <p>
              C+C&Co adalah agensi kreatif yang berbasis di Singapura dalam
              komunikasi dan pemasaran multi-disiplin, pengarahan seni,
              pengembangan merek & Intelijen desain. Toko komunikasi kreatif
              satu atap yang mengkhususkan diri dalam kebutuhan komunikasi.
              Mulai dari art direction, identitas, iklan, kolateral, desain
              kemasan hingga branding lingkungan. Kami menyesuaikan setiap
              proyek dengan kebutuhan klien dengan tetap unik dalam metodologi
              mereka sendiri. Proses desain yang menyeluruh didukung dengan
              pemahaman, pengamatan, konseptualisasi, penciptaan dan integrasi
              akhirnya secara efisien. Nilai-nilai kami berpikiran terbuka,
              efisien, beragam, kolaboratif, progresif. Kami telah berdiri sejak
              2012 dan kami percaya dalam menciptakan karya yang menyisipkan
              disiplin dan bergerak melampaui indera. Sudah menjadi budaya kita
              untuk mengkolaborasikan berbagai disiplin ilmu untuk
              mendefinisikan kembali situasi di luar batas normal
            </p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
            {jobList[1]}
          </div>
        </section>
      </div>

      <div
        className="modal fade"
        id="jobModal1"
        tabindex="-1"
        aria-labelledby="jobModal1Label"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg vw-100 modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title text-center" id="jobModal1Label">
                Persyaratan
              </h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-2">{persyaratan[1]}</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
