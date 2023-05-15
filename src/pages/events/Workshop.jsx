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
      <NavLink to={workshop.daftarURL} className="workshop-list">
        <div className="card text-center p-0">
          <div>
            <img
              src={workshop.image1}
              alt="Workshop"
              className="workshop events-poster d-none d-lg-block"
            />
            <img
              src={workshop.image2}
              alt="Workshop"
              className="workshop events-poster d-block d-lg-none"
            />
          </div>
          <div className="card-body">
            <h4>{workshop.judul}</h4>
            <div className="d-grid gap-1 text-black">
              <strong className="fs-5">{workshop.namaPembicara}</strong>
              <p>{workshop.jabatan}</p>
            </div>
            <div className="text-muted">
              <div className="py-1">
                <i
                  className="bi bi-calendar4-week"
                  data-bs-toggle="tooltip"
                  title="Hari, Tanggal"
                ></i>
                &ensp;
                <span>{workshop.hariTanggal}</span>
              </div>
              <div className="py-1">
                <i
                  className="bi bi-clock"
                  data-bs-toggle="tooltip"
                  title="Jam"
                ></i>
                &ensp;
                <span>{workshop.jam}</span>
              </div>
              <div className="py-1">
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
          <div className="card-footer border-0 bg-transparent py-3">
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-plus"></i>&ensp;
              <strong>Daftar Sekarang</strong>
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  ));

  return (
    <div className="workshop">
      <Header />

      <img
        src="/images/backgrounds/1.svg"
        alt="Background"
        id="hero1"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/2.svg"
        alt="Background"
        id="hero2"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/3.svg"
        alt="Background"
        id="about_us-powered_by"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/4.svg"
        alt="Background"
        id="pelaksanaan_acara"
        width={96}
        className="d-none d-lg-block"
      />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">
            Workshop "HYPE: Hone Your Potential Expertise"
          </h2>
          <br />

          <div className="d-grid gap-4">{workshopList}</div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
