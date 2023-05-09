import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Sponsors() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Sponsors";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="sponsors">
      <Header />

      <div className="container vh-100 d-grid justify-content-center align-items-center">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Sponsors</h2>
          <br />
          <Carousel />
        </section>
      </div>

      <Footer />
    </div>
  );
}
