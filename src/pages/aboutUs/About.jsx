import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function About() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "About";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="about">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">About Us</h2>
          <br />
          <div className="d-grid gap-4">
            <div className="d-grid gap-3 d-lg-flex gap-lg-5 align-items-center">
              <div className="col col-lg-3 mx-auto">
                <img
                  src="images/about_us/about/2.jpg"
                  className="rounded shadow-sm"
                  alt="About Us"
                  loading="lazy"
                />
              </div>
              <div className="w-100">
                <h4>Corporate Entrepreneurship</h4>
                <p>
                  Cluster Corporate Entrepreneurship merupakan mata kuliah
                  peminatan di Universitas Ciputra Surabaya yang memfasilitasi
                  mahasiswa yang berminat menjadi profesional handal dengan
                  menciptakan nilai-nilai intrapreneurship yang akan diterapkan
                  dalam organisasi/corporate yang menjadi pilihannya melalui
                  pendekatan human capital base competence sehingga mahasiswa
                  sejak awal mampu mengakses kompetensi handal dan merancang
                  karirnya di masa depan
                </p>
              </div>
            </div>
            <div className="d-grid gap-3 d-lg-flex gap-lg-5 align-items-center flex-row-reverse">
            <div className="col col-lg-3 mx-auto">
                <img
                  src="images/about_us/about/3.jpg"
                  className="rounded shadow-sm"
                  alt="About Us"
                  loading="lazy"
                />
              </div>
              <div className="w-100">
                <h4>Career Expo</h4>
                <p>
                  Career Expo merupakan acara tahunan yang diselenggarakan
                  setiap tahun. Acara ini sudah berlangsung sejak tahun 2017.
                  Acara Career Expo akan dihadiri banyak perusahaan dari
                  berbagai macam sektor atau bidang yang berbeda. Perusahaan
                  yang akan hadir dalam kegiatan ini adalah perusahaan yang
                  terkenal dikalangan masyarakat luas dan menjadi incaran di
                  masyarakat luas. Harapan dari kami adalah perusahaan bisa
                  menemukan intrapreneur yang handal dan profesional. Sedangkan
                  pada calon intrapreneur harapannya bisa masuk kedalam
                  perusahaan yang di impikan
                </p>
              </div>
              
            </div>
            <div className="d-grid gap-3 d-lg-flex gap-lg-5 align-items-center">
              <div className="col col-lg-3 mx-auto">
                <img
                  src="images/about_us/about/4.jpg"
                  className="rounded shadow-sm"
                  alt="About Us"
                  loading="lazy"
                />
              </div>
              <div className="w-100">
                <h4>Family Day Fun Day</h4>
                <p>
                  Family Day Fun Day merupakan salah satu acara yang bertemakan
                  keluarga. Acara ini bertujuan untuk merekatkan hubungan orang
                  tua dan anak, serta melatih kreativitas anak melalui
                  kegiatan-kegiatan yang ada.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
