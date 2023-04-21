import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Article1() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "5 Kesalahan Yang Harus Dihindari Dalam Pembuatan CV";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const tableOfContents = [
    {
      id: "1",
      title: "1. Salah ketik atau typo",
    },
    {
      id: "2",
      title: "2. Membuat CV dengan format yang terlalu kreatif",
    },
    {
      id: "3",
      title: "3. Berbohong",
    },
    {
      id: "4",
      title: "4. Membuat CV yang terlalu panjang",
    },
    {
      id: "5",
      title: "5. Terlalu banyak informasi dalam CV",
    },
  ];

  const tableOfContentsList = tableOfContents.map((toc) => (
    <li>
      <a href={`#toc${toc.id}`}>{toc.title}</a>
    </li>
  ));

  const tableOfContentsTitle = tableOfContents.map((toc) => (
    <h4 id={`toc${toc.id}`}>{toc.title}</h4>
  ));

  return (
    <div className="blog">
      <Header />
      <div className="container my-5" data-aos="fade-up">
        <h2 className="text-center">
          5 Kesalahan Yang Harus Dihindari Dalam Pembuatan CV
        </h2>
        <div className="d-grid gap-2 d-lg-flex gap-lg-4 justify-content-lg-center text-muted my-3">
          <div>
            <i
              className="bi bi-person-circle"
              data-bs-toggle="tooltip"
              title="Writer"
            ></i>
            &ensp;<span>UC Corporate Entrepreneurship</span>
          </div>
          <div className="vr d-none d-lg-block"></div>
          <div>
            <i
              className="bi bi-calendar-check"
              data-bs-toggle="tooltip"
              title="Uploaded Date"
            ></i>
            &ensp;<span>20 April 2023</span>
          </div>
          <div className="vr d-none d-lg-block"></div>
          <div>
            <i
              className="bi bi-stopwatch"
              data-bs-toggle="tooltip"
              title="Estimated Reading Time"
            ></i>
            &ensp;<span>1 minute read</span>
          </div>
        </div>

        <img
          src="/images/about_us/blog/article1.jpg"
          alt="Article"
          className="rounded shadow-sm d-block mx-auto my-4"
          width={512}
          loading="lazy"
        />

        <div className="row">
          <div className="col-lg-3 mb-4 my-lg-0">
            <div id="side">
              <ul className="list-unstyled alert alert-info">
                <strong>Daftar isi</strong>
                {tableOfContentsList}
              </ul>
              <button
                className="btn btn-primary w-100"
                onClick={copyToClipboard}
              >
                <i className="bi bi-link-45deg"></i>&ensp;
                <strong>Bagikan Artikel</strong>
              </button>
            </div>
          </div>

          <div className="col-lg-9">
            <p>
              CV tentunya menjadi komponen yang sangat penting ketika melamar
              kerja. Namun, tidak jarang HRD menemukan kesalahan-kesalahan dalam
              CV yang dikirimkan pelamar kerja. Maka dari itu, yuk ketahui 5
              kesalahan yang harus dihindari pelamar kerja dalam pembuatan CV.
            </p>
            {tableOfContentsTitle[0]}
            <p>
              Salah ketik atau typo menjadi kesalahan paling umum yang ditemui
              dalam pembuatan CV. CV akan mempengaruhi kesan pertama HRD kepada
              anda dan adanya typo dalam CV akan membuat kesan pertama yang
              ditampilkan menjadi kurang baik. Maka dari itu, ada baiknya untuk
              memeriksa kembali CV setelah selesai diketik untuk memastikan
              tidak ada typo yang mengganggu.
            </p>
            {tableOfContentsTitle[1]}
            <p>
              CV dengan format kreatif cenderung sulit dibaca oleh applicant
              tracking system (ATS) yang digunakan HRD perusahaan. Ketika CV
              sulit dibaca oleh ATS, maka peluang pelamar kerja untuk lolos
              seleksi akan semakin kecil.
            </p>
            <p>
              Meskipun begitu, beberapa pekerjaan yang bergerak di industri
              kreatif biasanya tidak terlalu kaku dalam format CV, sehingga
              creative CV tidak akan menjadi masalah. Maka dari itu, pelamar
              kerja harus menyesuaikan format CV yang digunakan dengan
              perusahaan dan posisi yang ingin dilamar.
            </p>
            {tableOfContentsTitle[2]}
            <p>
              Pelamar kerja sering kali berbohong dalam menuliskan CVnya,
              seperti memalsukan pengalaman kerja atau melebih-lebihkan isi dari
              CVnya. Hindari kebohongan dalam menuliskan CV karena kemampuan
              anda akan diuji oleh HRD ketika sesi wawancara.
            </p>
            {tableOfContentsTitle[3]}
            <p>
              CV yang terlalu panjang akan membuat HRD sulit menemukan poin
              penting dari CV pelamar kerja. Idealnya, CV dibuat paling banyak
              dalam dua sampai 3 halaman agar profil diri dapat dibaca oleh HRD
              dengan lebih efektif.
            </p>
            {tableOfContentsTitle[4]}
            <p>
              Hindari menuliskan terlalu banyak informasi yang tidak relevan
              dengan pekerjaan yang ingin dilamar. Sebaiknya, tulis informasi
              seperti prestasi dan pengalaman kerja yang relevan dan berhubungan
              dengan posisi yang ingin dilamar.
            </p>

            <hr className="my-4" />
            <strong>Sumber referensi:</strong>
            <br />
            <a
              href="https://www.detik.com/edu/detikpedia/d-6050694/fresh-graduate-ini-5-kesalahan-yang-harus-dihindari-agar-cv-dilirik-hrd"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.detik.com/edu/detikpedia/d-6050694/fresh-graduate-ini-5-kesalahan-yang-harus-dihindari-agar-cv-dilirik-hrd
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Copy Uniform Resource Locator to Clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(window.location.href);
}
