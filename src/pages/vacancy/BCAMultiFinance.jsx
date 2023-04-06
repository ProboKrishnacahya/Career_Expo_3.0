import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { bcamultifinance } from "../../data/vacancy/JobVacancy";

export default function BCAMultiFinance() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Company List";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const jobList = bcamultifinance.map((bcamultifinance) => (
    <div key={bcamultifinance.id} className="col">
      <div className="card text-center px-0 py-2 h-100">
        <div className="card-body py-2 d-grid justify-content-center align-items-center">
          <h4>{bcamultifinance.position}</h4>
          <span className="text-muted">{bcamultifinance.name}</span>
        </div>
        <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
          <a
            href={bcamultifinance.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-plus"></i>&ensp;
              <strong>Daftar</strong>
            </button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">BCA Multi Finance</h2>
          <img
            src="/images/vacancy/company_list/bcamultifinance.jpg"
            alt="Brand"
            className="d-block mx-auto my-4"
            width={512}
            loading="lazy"
          />
          <div className="my-4">
            <p>
              BCA Multi Finance merupakan anak perusahaan BCA yang bergerak di
              bidang pembiayaan roda dua, roda empat dan multiguna. Didirikan
              berdasarkan akta No.95 tanggal 29 April 2010 dari Kementerian
              Hukum dan HAM Republik Indonesia
            </p>
            <p>No. AHU-23631.AH.01.01 Tahun 2010 tanggal 10 Mei 2010</p>
            <p>
              Resmi beroperasi pada tanggal 17 September 2010 dengan izin dari
              Departemen Keuangan
            </p>
            <p>No. KEP-523/KM.10/2010 pada tanggal 3 September 2010</p>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4">{jobList}</div>

          <div
            className="modal fade"
            id="jobModal"
            tabindex="-1"
            aria-labelledby="jobModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title text-center" id="jobModalLabel">
                    Persyaratan
                  </h4>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <strong>Lowongan</strong>
                  <p>Staf Marketing (Part-time)</p>
                  <strong>Deskripsi Pekerjaan</strong>
                  <ol>
                    <li>
                      Memastikan target penjualan dan kualitas penjualan yang
                      baik
                    </li>
                  </ol>
                  <strong>Kriteria/Requirements</strong>
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
                  <strong>Daerah Penempatan</strong>
                  <p>Surabaya, Sidoarjo, Mojokerto, Malang</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <button
        type="button"
        className="btn btn-secondary w-100"
        data-bs-toggle="modal"
        data-bs-target="#jobModal"
      >
        <i className="bi bi-sticky"></i>&ensp;
        <strong>Persyaratan</strong>
      </button>
      <Footer />
    </div>
  );
}
