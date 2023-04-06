import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Register() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Register";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="register">
      <Header />

      <div className="container d-grid gap-5">
        <section className="mt-5" data-aos="fade-up">
          <div className="d-grid gap-4">
            <h2 className="text-center">Alur Pendaftaran</h2>
            <div className="card">
              <h4 className="text-center">Virtual Career Expo 2.0</h4>
              <hr />
              <p>
                Peserta berkunjung pada link&nbsp;
                <strong>
                  <a
                    href="bit.ly/UCCareerExpo2022"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bit.ly/UCCareerExpo2022
                  </a>
                </strong>
                &nbsp;atau klik tombol daftar sekarang di bawah Peserta mengisi
                pertanyaan-pertanyaan yang sudah tertera di dalam G-form. Jika
                peserta ingin mengikuti seluruh kegiatan Virtual Career Expo 2.0
                (2 hari berturut-turut) maka dapat mencentang (checklist) Day 1
                & Day 2 kemudian peserta mengklik “submit”. Peserta memilih link
                untuk dapat bergabung dalam grup WhatsApp sesuai dengan hari
                yang telah dipilih oleh peserta (bila mendaftar dua hari maka
                dapat bergabung ke grup Day 1 sekaligus grup Day 2). Informasi
                lebih lanjut akan diinformasikan oleh pihak penyelenggara di
                dalam grup Whatsapp (ID & password zoom, pengumuman, dll).
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf1UYSLbcKz3G7dX496TL8N2Qarg1PzM6gLvF1MhIQS9nkMng/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary w-100">
                  <i className="bi bi-person-plus"></i>&ensp;
                  <strong>Daftar Sekarang</strong>
                </button>
              </a>
            </div>
            <div className="card">
              <h4 className="text-center">Webinar</h4>
              <hr />
              <p>
                Peserta berkunjung pada link&nbsp;
                <strong>
                  <a
                    href="bit.ly/WebinarCE22"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    bit.ly/WebinarCE22
                  </a>
                </strong>
                &nbsp;atau klik tombol daftar sekarang di bawah Peserta mengisi
                pertanyaan-pertanyaan yang sudah tertera di dalam G-form. Jika
                peserta ingin mengikuti seluruh kegiatan Virtual Career Expo 2.0
                (2 hari berturut-turut) maka dapat mencentang (checklist) Day 1
                & Day 2 kemudian peserta mengklik “submit”. Peserta memilih link
                untuk dapat bergabung dalam grup WhatsApp sesuai dengan hari
                yang telah dipilih oleh peserta (bila mendaftar dua hari maka
                dapat bergabung ke grup Day 1 sekaligus grup Day 2). Informasi
                lebih lanjut akan diinformasikan oleh pihak penyelenggara di
                dalam grup Whatsapp (ID & password zoom, pengumuman, dll).
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfSvdlbTcVVRkG9hP_fLhlcMco-kQ8MXO4JlYuXTXFq9T7inQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-primary w-100">
                  <i className="bi bi-person-plus"></i>&ensp;
                  <strong>Daftar Sekarang</strong>
                </button>
              </a>
            </div>
          </div>
        </section>

        <section className="mb-5" data-aos="fade-up">
          <h2 className="text-center">Alur</h2>
          <br />
          <div className="d-grid gap-3 d-lg-flex text-center align-items-center">
            <div className="col">
              <div className="d-grid gap-2" role="alert">
                <i className="bi bi-globe2 display-4"></i>
                <span>Berkunjung ke Website Pendaftaran</span>
              </div>
            </div>
            <i className="bi bi-arrow-right display-4 d-none d-lg-block"></i>
            <i className="bi bi-arrow-right display-4 vertical d-block d-lg-none"></i>
            <div className="col">
              <div className="d-grid gap-2" role="alert">
                <i className="bi bi-clipboard2-check display-4"></i>
                <span>Mengisi Formulir Pendaftaran</span>
              </div>
            </div>
            <i className="bi bi-arrow-right display-4 d-none d-lg-block"></i>
            <i className="bi bi-arrow-right display-4 vertical d-block d-lg-none"></i>
            <div className="col">
              <div className="d-grid gap-2" role="alert">
                <i className="bi bi-whatsapp display-4"></i>
                <span>Join Grup WhatsApp</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
