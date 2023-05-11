import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { sponsors } from "../../data/events/Sponsors";

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

  const sponsorsList = sponsors.map((sponsor) => (
    <div>
      <img
        src={sponsor.image}
        alt="Sponsors"
        loading="lazy"
        className="w-75 d-block mx-auto"
      />
    </div>
  ));

  return (
    <div className="sponsors">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Sponsors</h2>
          <br />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-2 align-items-center">
            {sponsorsList}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
