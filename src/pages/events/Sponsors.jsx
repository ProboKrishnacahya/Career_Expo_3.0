import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
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

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Sponsors</h2>
          <br />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-2 align-items-center">
            <div className="col">
              <img
                src="/images/events/sponsors/Aromasphere.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Bank Syariah Tulen Amanah.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/BatterSlurp.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Bidy Tour _ Travel.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Body Garage.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/ConsoleTechID.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/CV Kian Sukses.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/CV Kreasi Unggul Perkasa.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/CV Nusantara Graphic.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Double T Tortoise.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Galantine Nyonya Elsye.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Herbivora Indonesia.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Insolite.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/JB Performance.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Jessi Jon_s Kitchen.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Kost Prameswari.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Logo Sendang Bagus Emas Farm.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Nashbox.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Platestore Surabaya.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/PT BPR Pedungan.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/PT BPR Pedungann.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Sambari.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Semillas.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Shirapot Meal.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Sleepeve.png"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/The Rani Garden Bali.jpg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
            <div className="col">
              <img
                src="/images/events/sponsors/Walic.co.jpeg"
                alt="Sponsors"
                loading="lazy"
                className="w-75 d-block mx-auto"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
