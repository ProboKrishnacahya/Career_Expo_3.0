import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Article4() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "5 Tips Untuk Mengembangkan Karir Dengan Maksimal";

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
      title: "1. Memiliki keinginan untuk berkembang",
    },
    {
      id: "2",
      title: "2. Terbuka dengan kesempatan untuk belajar",
    },
    {
      id: "3",
      title: "3. Bangun networking yang kuat dan profesional",
    },
    {
      id: "4",
      title: "4. Berani mengambil risiko",
    },
    {
      id: "5",
      title: "5. Terbuka dengan peluang baru",
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
          5 Tips Untuk Mengembangkan Karir Dengan Maksimal
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
          src="/images/about_us/blog/article4.png"
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
                onClick={bagikanArtikel}
              >
                <i className="bi bi-link-45deg"></i>&ensp;
                <strong>Bagikan Artikel</strong>
              </button>
            </div>
          </div>

          <div className="col-lg-9">
            <p>
              Setelah bekerja, semua karyawan tentunya berharap dapat
              mengembangkan karirnya dengan maksimal hingga mencapai puncak
              karir tertinggi. Oleh karena itu, karyawan perlu mengetahui
              cara-cara agar dapat mengembangkan karirnya dengan maksimal. Maka
              dari itu, yuk simak 5 tips untuk mengembangkan karir dengan
              maksimal berikut ini.
            </p>
            {tableOfContentsTitle[0]}
            <p>
              Adanya niat untuk terus berkembang akan memberikan dorongan
              positif untuk selalu aktif mencari pengetahuan baru dan
              mengusahakan yang terbaik dalam bekerja. Adanya keinginan untuk
              berkembang juga akan membuat karyawan untuk tetap fokus pada
              tujuan karir yang diinginkannya.
            </p>
            {tableOfContentsTitle[1]}
            <p>
              Jangan lewatkan begitu saja kesempatan untuk menuntut ilmu yang
              ada, seperti mengikuti seminar, pelatihan, atau bahkan studi
              lanjut. Ikutilah kursus atau program sertifikasi yang relevan
              dengan bidang kerja. Ilmu-ilmu yang dimiliki tentunya akan
              menunjang usaha untuk mengembangkan karir.
            </p>
            {tableOfContentsTitle[2]}
            <p>
              Networking profesional yang kuat dapat membuka pintu untuk peluang
              baru dan memberikan akses ke informasi dan sumber daya yang
              berharga. Maka dari itu, selalu berusaha untuk membangun hubungan
              yang saling menguntungkan dengan orang-orang dalam industri kerja.
            </p>
            {tableOfContentsTitle[3]}
            <p>
              Jangan takut untuk mencoba hal-hal baru atau memulai proyek-proyek
              yang menantang. Terkadang, diperlukan untuk keluar dari zona
              nyaman dan berani mengambil risiko agar karir dapat berkembang
              dengan lebih maksimal.
            </p>
            {tableOfContentsTitle[4]}
            <p>
              Tetaplah terbuka dengan peluang baru dan berbagai jalur karir yang
              mungkin. Jangan ragu untuk mempertimbangkan pekerjaan atau
              kesempatan yang tampaknya di luar bidang keahlian saat ini.
            </p>

            <hr className="my-4" />
            <strong>Sumber referensi:</strong>
            <br />
            <a
              href="https://www.idntimes.com/life/career/ratna-ramadhani/tips-mengembangkan-karier-c1c2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.idntimes.com/life/career/ratna-ramadhani/tips-mengembangkan-karier-c1c2
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

// Web Share API
function bagikanArtikel() {
  if (navigator.canShare) {
    navigator.share({
      title: "5 Tips Untuk Mengembangkan Karir Dengan Maksimal",
      url: window.location.href,
    });
    window.location.reload();
  } else {
    copyToClipboard();
  }
}
