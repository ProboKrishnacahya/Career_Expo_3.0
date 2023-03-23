import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Webinar() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Webinar";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="webinar">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">
            Webinar "HYPE: Hone Your Potential Expertise"
          </h2>
          <br />
          <div className="row row-cols-1 row-cols-lg-2 g-4 text-center">
            <div className="col d-grid gap-3">
              <h4>Day 1</h4>
              <img src="images/events/webinar/Junarsyi.png" alt="Webinar" />
              <div className="vstack gap-2">
                <div>
                  <i
                    className="bi bi-calendar4-week"
                    data-bs-toggle="tooltip"
                    title="Hari, Tanggal"
                  ></i>
                  &ensp;
                  <span>Jumat, 3 Juni 2022</span>
                </div>
                <div>
                  <i
                    className="bi bi-clock"
                    data-bs-toggle="tooltip"
                    title="Jam"
                  ></i>
                  &ensp;
                  <span>09.30 WIB - selesai</span>
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
              <img src="images/events/webinar/Irwan.png" alt="Webinar" />
              <div className="vstack gap-2">
                <div>
                  <i
                    className="bi bi-calendar4-week"
                    data-bs-toggle="tooltip"
                    title="Hari, Tanggal"
                  ></i>
                  &ensp;
                  <span>Sabtu, 4 Juni 2022</span>
                </div>
                <div>
                  <i
                    className="bi bi-clock"
                    data-bs-toggle="tooltip"
                    title="Jam"
                  ></i>
                  &ensp;
                  <span>09.30 WIB - selesai</span>
                </div>
              </div>
              <div>
                <NavLink className="btn btn-primary" to="/register">
                  <i className="bi bi-person-plus"></i>&ensp;
                  <strong>Daftar Sekarang</strong>
                </NavLink>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
