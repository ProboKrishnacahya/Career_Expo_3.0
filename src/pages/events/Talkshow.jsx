import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { talkshow } from "../../data/events/Talkshow";

export default function Talkshow() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Talkshow";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const talkshowList = talkshow.map((talkshow) => (
    <div key={talkshow.id} className="col">
      <NavLink to={talkshow.daftarURL} className="talkshow-list">
        <div className="card text-center px-0 pt-0 pb-2 h-100">
          <img src={talkshow.image} alt="Talkshow" className="events-poster" />
          <div className="card-body py-3 d-grid justify-content-center align-items-center">
            <h4>{talkshow.judul}</h4>
            <div className="d-grid gap-1 text-black">
              <strong className="fs-5">{talkshow.namaPembicara}</strong>
              <p>{talkshow.jabatan}</p>
            </div>
            <div className="text-muted">
              <div className="py-1">
                <i
                  className="bi bi-calendar4-week"
                  data-bs-toggle="tooltip"
                  title="Hari, Tanggal"
                ></i>
                &ensp;
                <span>{talkshow.hariTanggal}</span>
              </div>
              <div className="py-1">
                <i
                  className="bi bi-clock"
                  data-bs-toggle="tooltip"
                  title="Jam"
                ></i>
                &ensp;
                <span>{talkshow.jam}</span>
              </div>
              <div className="py-1">
                <i
                  className="bi bi-geo-alt"
                  data-bs-toggle="tooltip"
                  title="Tempat"
                ></i>
                &ensp;
                <span>{talkshow.tempat}</span>
              </div>
            </div>
          </div>
          <div className="card-footer border-0 bg-transparent">
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
    <div className="talkshow">
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

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">
            Talkshow HYPE: Sudah diterima, yakin sudah finish?
          </h2>
          <br />

          <div className="row row-cols-1 row-cols-lg-2 g-4 text-center">
            {talkshowList}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
