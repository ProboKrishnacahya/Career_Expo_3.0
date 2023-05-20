import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { sponsors } from "../../data/home/Sponsors";
import { testimonials } from "../../data/home/Testimonials";

export default function Home() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Career Expo 3.0";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const testimonialsList = testimonials.map((testimonials) => (
    <div key={testimonials.id} className="col">
      <div className="card h-100">
        <div className="d-grid gap-3">
          <img
            src={testimonials.image}
            alt="Testimonials"
            className="rounded-circle shadow-sm mx-auto"
            width={256}
            loading="lazy"
          />
          <div>
            <h4 className="text-center">{testimonials.name}</h4>
            <q>{testimonials.testimoni}</q>
          </div>
        </div>
      </div>
    </div>
  ));

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
    <div className="home">
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
        src="/images/backgrounds/4.svg"
        alt="Background"
        id="pelaksanaan_acara"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/5.svg"
        alt="Background"
        id="pelaksanaan_acara-testimonials"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/6.svg"
        alt="Background"
        id="testimonials"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/7.svg"
        alt="Background"
        id="testimonials-sponsors"
        width={128}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/8.svg"
        alt="Background"
        id="sponsors1"
        width={128}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/9.svg"
        alt="Background"
        id="sponsors2"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/10.svg"
        alt="Background"
        id="sponsors3"
        width={96}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/11.svg"
        alt="Background"
        id="sponsors4"
        width={128}
        className="d-none d-lg-block"
      />
      <img
        src="/images/backgrounds/12.svg"
        alt="Background"
        id="sponsors5"
        width={128}
        className="d-none d-lg-block"
      />

      {/* Hero */}
      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h1 className="text-center display-1 fw-bold" id="title">
            Career Expo 3.0
          </h1>
          <br />
          <br />
          <img
            src="/images/home/hero/HYPE_Desktop.svg"
            alt="HYPE"
            className="d-none d-md-block mx-auto"
          />
          <img
            src="/images/home/hero/HYPE_Mobile.svg"
            alt="HYPE"
            className="d-block d-md-none mx-auto w-75"
          />

          <div className="d-grid gap-4 d-md-flex gap-md-3 justify-content-md-center my-5">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#proposalKegiatanModal"
            >
              <i className="bi bi-card-checklist"></i>&ensp;
              <strong>Proposal Kegiatan</strong>
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#proposalSponsorshipModal"
            >
              <i className="bi bi-megaphone"></i>&ensp;
              <strong>Proposal Sponsorship</strong>
            </button>
          </div>
        </section>
      </div>

      <br />
      <div className="d-none d-lg-block">
        <br />
        <br />
      </div>

      {/* About Us */}
      <div className="row d-none d-lg-block" data-aos="fade-up">
        <div class="col-10" id="home-about_us__background">
          <section className="p-5">
            <h2 className="text-center">About Us</h2>
            <br />
            <div className="d-grid gap-3 align-items-center d-lg-flex gap-lg-5">
              <div>
                <img
                  src="/images/home/about_us/about_us.jpg"
                  className="rounded shadow-sm"
                  alt="About Us"
                  loading="lazy"
                />
              </div>
              <div>
                <p>
                  Career Expo adalah acara tahunan yang diselenggarakan oleh
                  mata kuliah Corporate Entrepreneurship Universitas Ciputra
                  Surabaya. Kegiatan Career Expo merupakan kegiatan yang
                  mempertemukan para calon intrapreneur dengan berbagai
                  perusahaan-perusahaan yang menjadi impiannya. Career Expo
                  tahun ini bertemakan HYPE: Hone Your Potential Expertise
                  dengan harapan para calon intrapreneur dapat mengasah potensi
                  dan keahliannya melalui Career Expo yang diselenggarakan.
                </p>
                <NavLink className="btn btn-primary" to="/about">
                  <i className="bi bi-arrow-right"></i>&ensp;
                  <strong>Read More</strong>
                </NavLink>
              </div>
            </div>
          </section>
        </div>
        <div class="col-1"></div>
      </div>
      <div className="container">
        <section className="d-block d-lg-none" data-aos="fade-up">
          <h2 className="text-center">About Us</h2>
          <br />
          <div className="d-grid gap-3 align-items-center d-lg-flex gap-lg-5">
            <div>
              <img
                src="/images/home/about_us/about_us.jpg"
                className="rounded shadow-sm"
                alt="About Us"
                loading="lazy"
              />
            </div>
            <div>
              <p>
                Career Expo adalah acara tahunan yang diselenggarakan oleh mata
                kuliah Corporate Entrepreneurship Universitas Ciputra Surabaya.
                Kegiatan Career Expo merupakan kegiatan yang mempertemukan para
                calon intrapreneur dengan berbagai perusahaan-perusahaan yang
                menjadi impiannya. Career Expo tahun ini bertemakan HYPE: Hone
                Your Potential Expertise dengan harapan para calon intrapreneur
                dapat mengasah potensi dan keahliannya melalui Career Expo yang
                diselenggarakan.
              </p>
              <NavLink className="btn btn-primary" to="/about">
                <i className="bi bi-arrow-right"></i>&ensp;
                <strong>Read More</strong>
              </NavLink>
            </div>
          </div>
        </section>
      </div>

      {/* Powered By */}
      <div className="d-none d-lg-block" data-aos="fade-up">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-10" id="powered_by__background">
            <section>
              <h2 className="text-center">Powered By</h2>
              <br />
              <div className="d-flex gap-4 justify-content-center align-items-center w-100">
                <div>
                  <img
                    src="/images/brand/universitas_ciputra.png"
                    alt="Universitas Ciputra Surabaya"
                    width={128}
                  />
                </div>
                <div>
                  <img
                    src="/images/brand/corporate_entrepreneurship.png"
                    alt="Corporate Entrepreneurship"
                    width={256}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <section
          className="d-block d-lg-none alert alert-info"
          data-aos="fade-up"
        >
          <h2 className="text-center">Powered By</h2>
          <br />
          <div className="d-flex gap-4 justify-content-center align-items-center w-100">
            <div>
              <img
                src="/images/brand/universitas_ciputra.png"
                alt="Universitas Ciputra Surabaya"
                width={128}
              />
            </div>
            <div>
              <img
                src="/images/brand/corporate_entrepreneurship.png"
                alt="Corporate Entrepreneurship"
                width={256}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Pelaksanaan Acara */}
      <div className="container">
        <section data-aos="fade-up">
          <div className="alert alert-primary d-grid gap-3 p-3" role="alert">
            <h2 className="text-center">Pelaksanaan Acara</h2>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.534970097948!2d112.71712061461693!3d-7.2936285737167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb8bdc3056ef%3A0xb940ebcd5368b020!2sCiputra%20World%2C%20Gn.%20Sari%2C%20Kec.%20Dukuhpakis%2C%20Kota%20SBY%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1679392399794!5m2!1sid!2sid"
                height={480}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Tempat"
                className="w-100 rounded shadow-sm"
              ></iframe>
            </div>
            <div className="row justify-content-center text-center align-items-center">
              <div className="py-1">
                <i
                  className="bi bi-calendar4-week"
                  data-bs-toggle="tooltip"
                  title="Hari, Tanggal"
                ></i>
                &ensp;
                <span>Jumat - Sabtu, 26 - 27 Mei 2023</span>
              </div>
              <div className="py-1">
                <i
                  className="bi bi-clock"
                  data-bs-toggle="tooltip"
                  title="Jam"
                ></i>
                &ensp;
                <span>10.00 - 21.00 WIB</span>
              </div>
              <div className="py-1">
                <i
                  className="bi bi-geo-alt"
                  data-bs-toggle="tooltip"
                  title="Tempat"
                ></i>
                &ensp;
                <span>Void-Linear East Atrium Ciputra World Surabaya</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Testimonials */}
      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">
            Testimonials Virtual Career Expo 2.0 2022
          </h2>
          <br />
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            {testimonialsList}
          </div>
        </section>
      </div>

      {/* Sponsors */}
      <div className="container">
        <section data-aos="fade-up">
          <h2 className="text-center">Sponsors</h2>
          <br />
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-lg-2 align-items-center">
            {sponsorsList}
          </div>
        </section>
      </div>

      {/* PDF Proposal Kegiatan */}
      <div
        className="modal fade"
        id="proposalKegiatanModal"
        tabindex="-1"
        aria-labelledby="proposalKegiatanModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header py-2">
              <div className="d-flex align-items-center">
                <h2 className="modal-title" id="proposalKegiatanModalLabel">
                  Proposal Kegiatan
                </h2>
                &emsp;
                <a
                  href="pdf/home/Proposal Career Expo 2023.pdf"
                  download="Proposal Career Expo 2023.pdf"
                >
                  <i className="bi bi-download fs-4"></i>
                </a>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <iframe
                src="pdf/home/Proposal Career Expo 2023.pdf"
                frameborder="0"
                title="Proposal Kegiatan"
                className="w-100 vh-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Proposal Sponsorship */}
      <div
        className="modal fade"
        id="proposalSponsorshipModal"
        tabindex="-1"
        aria-labelledby="proposalSponsorshipModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header py-2">
              <div className="d-flex align-items-center">
                <h2 className="modal-title" id="proposalSponsorshipModalLabel">
                  Proposal Sponsorship
                </h2>
                &emsp;
                <a
                  href="pdf/home/Proposal Sponsorship Career Expo 2023.pdf"
                  download="Proposal Sponsorship Career Expo 2023.pdf"
                >
                  <i className="bi bi-download fs-4"></i>
                </a>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <iframe
                src="pdf/home/Proposal Sponsorship Career Expo 2023.pdf"
                frameborder="0"
                title="Proposal Sponsorship"
                className="w-100 vh-100"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
