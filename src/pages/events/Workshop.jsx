import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { workshop } from "../../data/events/Workshop";

export default function Workshop() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Workshop";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const workshopList = workshop.map((workshop) => (
    <div key={workshop.id} className="col">
      <div className="card text-center px-0 pt-0 pb-2 h-100">
        <img src={workshop.image} alt="Workshop" className="rounded-5" />
        <div className="card-body py-3 d-grid justify-content-center align-items-center">
          <h4>{workshop.judul}</h4>
          <strong className="fs-5">{workshop.namaPembicara}</strong>
          <p>{workshop.jabatan}</p>
          <div className="text-muted">
            <div>
            <i
              className="bi bi-calendar4-week"
              data-bs-toggle="tooltip"
              title="Hari, Tanggal"
            ></i>
            &ensp;
            <span>{workshop.hariTanggal}</span>
          </div>
          <div>
            <i className="bi bi-clock" data-bs-toggle="tooltip" title="Jam"></i>
            &ensp;
            <span>{workshop.jam}</span>
          </div>
          <div>
            <i
              className="bi bi-geo-alt"
              data-bs-toggle="tooltip"
              title="Tempat"
            ></i>
            &ensp;
            <span>{workshop.tempat}</span>
          </div>
        </div>
        </div>
        <div className="card-footer border-0 bg-transparent">
          <NavLink className="btn btn-primary w-100" to={workshop.daftarURL}>
            <i className="bi bi-person-plus"></i>&ensp;
            <strong>Daftar Sekarang</strong>
          </NavLink>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="workshop">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">
            Workshop "HYPE: Hone Your Potential Expertise"
          </h2>
          <br />

          <div className="row row-cols-1 row-cols-lg-2 g-4 text-center">
            {workshopList}
            {/* <div className="col d-grid gap-3">
              <h4>Day 1</h4>
              <img
                src="/images/events/workshop/SAVE DATE-5.png"
                alt="Workshop"
              />
              <div className="vstack gap-2">
                <div>
                  <i
                    className="bi bi-calendar4-week"
                    data-bs-toggle="tooltip"
                    title="Hari, Tanggal"
                  ></i>
                  &ensp;
                  <span>Jumat, 26 Mei 2023</span>
                </div>
                <div>
                  <i
                    className="bi bi-clock"
                    data-bs-toggle="tooltip"
                    title="Jam"
                  ></i>
                  &ensp;
                  <span>14:00 - 16:40 WIB</span>
                </div>
                <div>
                  <i
                    className="bi bi-geo-alt"
                    data-bs-toggle="tooltip"
                    title="Tempat"
                  ></i>
                  &ensp;
                  <span>Ciputra World Surabaya</span>
                </div>
              </div>
              <div>
                <NavLink className="btn btn-primary" to="/register">
                  <i className="bi bi-person-plus"></i>&ensp;
                  <strong>Daftar Sekarang</strong>
                </NavLink>
              </div>
            </div>
            <div className="col d-grid gap-3">
              <h4>Day 2</h4>
              <img src="/images/events/workshop/SAVE DATE.png" alt="Workshop" />
              <div className="vstack gap-2">
                <div>
                  <i
                    className="bi bi-calendar4-week"
                    data-bs-toggle="tooltip"
                    title="Hari, Tanggal"
                  ></i>
                  &ensp;
                  <span>Sabtu, 27 Mei 2023</span>
                </div>
                <div>
                  <i
                    className="bi bi-clock"
                    data-bs-toggle="tooltip"
                    title="Jam"
                  ></i>
                  &ensp;
                  <span>12:00 - 14:00 WIB</span>
                </div>
                <div>
                  <i
                    className="bi bi-geo-alt"
                    data-bs-toggle="tooltip"
                    title="Tempat"
                  ></i>
                  &ensp;
                  <span>Ciputra World Surabaya</span>
                </div>
              </div>
              <div>
                <NavLink className="btn btn-primary" to="/register">
                  <i className="bi bi-person-plus"></i>&ensp;
                  <strong>Daftar Sekarang</strong>
                </NavLink>
              </div>
            </div> */}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
