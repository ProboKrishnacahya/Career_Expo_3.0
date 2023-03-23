import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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

  return (
    <div className="home">
      <Header />

      {/* Hero Section */}
      <div className="container">
        <img
          src="images/backgrounds/1.png"
          alt="Background"
          id="hero1"
          width={240}
          className="d-none d-md-block"
        />
        <img
          src="images/backgrounds/1.png"
          alt="Background"
          id="hero2"
          width={240}
          className="d-none d-md-block"
        />

        <section className="my-5" data-aos="fade-up">
          <h1 className="text-center display-1 fw-bold mt-5">
            Career Expo 3.0
          </h1>
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
          <h3 className="scroll-down text-center my-5 py-5">
            <a href="#home">
              <i
                className="bi bi-chevron-double-down"
                data-bs-toggle="tooltip"
                title="Scroll Down"
              ></i>
            </a>
          </h3>
        </section>

        {/* About Us */}
        <section id="home" data-aos="fade-up">
          <h3 className="text-center">About Us</h3>
          <br />
          <div className="d-grid gap-3 align-items-center d-lg-flex gap-lg-5">
            <div>
              <img
                src="images/home/about_us/about_us.jpg"
                className="rounded shadow-sm"
                alt="About Us"
                loading="lazy"
              />
            </div>
            <div>
              <p>
                Virtual Career Expo 2.0 adalah acara tahunan yang di
                selenggarakan oleh mata kuliah Corporate Entrepreneurship
                Universitas Ciputra Surabaya. Kegiatan Virtual Career Expo 2.0
                merupakan kegiatan yang mempertemukan para calon intrapreneur
                dengan berbagai perusahaan-perusahaan yang menjadi impiannya.
              </p>
              <NavLink className="btn btn-primary" to="/about">
                <i className="bi bi-arrow-right"></i>&ensp;
                <strong>Read More</strong>
              </NavLink>
            </div>
          </div>
        </section>

        <img
          src="images/backgrounds/2.png"
          alt="Background"
          id="about_us-pelaksanaan_acara"
          width={240}
          className="d-none d-md-block"
        />

        {/* Pelaksanaan Acara */}
        <section className="my-5" data-aos="fade-up">
          <div className="alert alert-info d-grid gap-3 mb-5" role="alert">
            <h3 className="text-center">Pelaksanaan Acara</h3>
            <div className="row justify-content-center text-center align-items-center">
              <div className="col-lg-5">
                <i
                  className="bi bi-calendar4-week"
                  data-bs-toggle="tooltip"
                  title="Waktu"
                ></i>
                &ensp;
                <span>Jumat, 26 Mei 2023 s.d. Sabtu, 27 Mei 2023</span>
              </div>
              <div className="col-lg-1 d-none d-lg-block text-muted">
                &#124;
              </div>
              <div className="col-lg-5">
                <i
                  className="bi bi-geo-alt"
                  data-bs-toggle="tooltip"
                  title="Tempat"
                ></i>
                &ensp;
                <span>Mall Ciputra World Surabaya</span>
              </div>
            </div>
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
          </div>
        </section>

        {/* Testimonials */}
        <section data-aos="fade-up">
          <h3 className="text-center">Testimonials</h3>
          <br />
          <div className="row row-cols-1 row-cols-lg-3 g-4">
            <div className="col d-grid gap-3">
              <img
                src="images/home/testimonials/anetta.jpg"
                alt="Testimonials"
                className="rounded-circle shadow-sm"
                width={256}
                loading="lazy"
              />
              <div>
                <h5>Anetta TW</h5>
                <q>
                  Menurutku acaranya insightful bgt. Perusahaannya juga variatif
                  jadi aku banyak dapet insight juga tentang perusahaan2 yang
                  mungkin sebelumnya aku belum pernah denger. Selain itu
                  acaranya juga interaktif, kita dikasih kesempatan buat tanya2
                  ke narasumber langsung. Kita juga dibantu sama website virtual
                  career expo buat apply2 ke perusahaan yang kita pengen.
                </q>
              </div>
            </div>
            <div className="col d-grid gap-3">
              <img
                src="images/home/testimonials/berliana.jpg"
                alt="Testimonials"
                className="rounded-circle shadow-sm"
                width={256}
                loading="lazy"
              />
              <div>
                <h5>Berliana Fira</h5>
                <q>
                  Menurutku career expo virtual asik dan gak merepotkan untuk
                  antri dll untuk cari kerja dan mendukung kemajuan teknologi.
                  Tapi menurutku kekurangan tahun kmrn adalah keterbatasan untuk
                  mendapatkan info lowongan pada setiap perusahaan karena
                  keterbatasan saat dibagi breakout room itu jadi gak bisa join
                  banyak hehe dan kalo gak salah kmrn untuk ngelamar juga
                  dibatasi.
                </q>
              </div>
            </div>
            <div className="col d-grid gap-3">
              <img
                src="images/home/testimonials/sukma.jpeg"
                alt="Testimonials"
                className="rounded-circle shadow-sm"
                width={256}
                loading="lazy"
              />
              <div>
                <h5>Sukma Jenny</h5>
                <q>
                  UC Virtual Career Expo memperlihatkan saya pada
                  informasi-informasi terkait karir dan hal-hal yang
                  meliputinya. Berbagai korporasi yang terlibat cukup
                  representatif lintas bidang dan orientasi. Tidak sebatas
                  informasi, tetapi tautan yang disediakan Uc Career Expo dirasa
                  dapat mengkatalisasi pergerakan dari rekan-rekan yang sedang
                  mempersiapkan karirnya. Apresiasi tinggi bagi panitia yang
                  telah menyusun acara dengan begitu apik, terstruktur, dan
                  tidak prematur.
                </q>
              </div>
            </div>
          </div>
        </section>

        <img
          src="images/backgrounds/3.png"
          alt="Background"
          id="pelaksanaan_acara-testimonials"
          width={240}
          className="d-none d-md-block"
        />

        <img
          src="images/backgrounds/4.png"
          alt="Background"
          id="testimonials-sponsors"
          width={240}
          className="d-none d-md-block"
        />

        {/* Sponsors */}
        <section className="my-5" data-aos="fade-up">
          <h3 className="text-center">Sponsors</h3>
          <br />
          <div
            id="carouselSponsors"
            className="carousel carousel-dark slide"
            data-bs-ride="false"
            data-bs-interval="false"
          >
            <div className="carousel-indicators d-none d-lg-flex">
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="1"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="2"
                aria-label="Sponsors"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselSponsors"
                data-bs-slide-to="3"
                aria-label="Sponsors"
              ></button>
            </div>
            <div className="carousel-inner text-center mx-auto">
              <div className="carousel-item active">
                <img
                  src="images/home/sponsors/berkah.jpeg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/surya.jpeg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/indofood.jpg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/sponsors/biznet.jpg"
                  alt="Sponsors"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselSponsors"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Previous"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselSponsors"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Next"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <img
          src="images/backgrounds/5.png"
          alt="Background"
          id="sponsors-media_partners"
          width={240}
          className="d-none d-md-block"
        />

        {/* Media Partners */}
        <section className="mb-5" data-aos="fade-up">
          <h3 className="text-center">Media Partners</h3>
          <br />
          <div
            id="carouselMediaPartners"
            className="carousel carousel-dark slide"
            data-bs-ride="false"
            data-bs-interval="false"
          >
            <div className="carousel-indicators d-none d-lg-flex">
              <button
                type="button"
                data-bs-target="#carouselMediaPartners"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Media Partners"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselMediaPartners"
                data-bs-slide-to="1"
                aria-label="Media Partners"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselMediaPartners"
                data-bs-slide-to="2"
                aria-label="Media Partners"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselMediaPartners"
                data-bs-slide-to="3"
                aria-label="Media Partners"
              ></button>
            </div>
            <div className="carousel-inner text-center mx-auto">
              <div className="carousel-item active">
                <img
                  src="images/home/media_partners/info_event.jpg"
                  alt="Media Partners"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/media_partners/media_event.png"
                  alt="Media Partners"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/media_partners/event_aja.webp"
                  alt="Media Partners"
                  loading="lazy"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="images/home/media_partners/event_suroboyo.png"
                  alt="Media Partners"
                  loading="lazy"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselMediaPartners"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Previous"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselMediaPartners"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
                data-bs-toggle="tooltip"
                title="Next"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
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
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h5 className="modal-title" id="proposalKegiatanModalLabel">
                Proposal Kegiatan
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <iframe
                src="pdf/home/Proposal Kegiatan.pdf"
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
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h5 className="modal-title" id="proposalSponsorshipModalLabel">
                Proposal Sponsorship
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body p-0">
              <iframe
                src="pdf/home/Proposal Sponsorship.pdf"
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