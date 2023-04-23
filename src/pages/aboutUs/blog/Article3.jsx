import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Article3() {
  useEffect(() => {
    // * Tab Page Title
    document.title =
      "Fresh Graduate, Siapkan Dulu Hal-Hal Ini Sebelum Mencari Kerja!";

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
      title: "1. Perbarui CV dan portofolio",
    },
    {
      id: "2",
      title: "2. Pelajari tentang perusahaan yang dituju",
    },
    {
      id: "3",
      title: "3. Persiapkan diri untuk wawancara",
    },
    {
      id: "4",
      title: "4. Bersiap untuk menyesuaikan diri",
    },
    {
      id: "5",
      title: "5. Kembangkan keterampilan",
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
          Fresh Graduate, Siapkan Dulu Hal-Hal Ini Sebelum Mencari Kerja!
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
          src="/images/about_us/blog/article3.jpg"
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
              Setelah lulus dari universitas, melamar pekerjaan akan menjadi
              proses selanjutnya yang dilalui fresh graduate. Meski sudah lulus
              dan dibekali ilmu pendidikan, nyatanya hal itu tidak cukup untuk
              menarik perusahaan di luar sana untuk merekrut fresh graduate. Ada
              beberapa hal penting yang perlu disiapkan sebelum melamar
              pekerjaan. Mari simak pembahasan di bawah ini untuk mengetahui
              persiapan yang diperlukan fresh graduate sebelum mencari kerja.
            </p>
            {tableOfContentsTitle[0]}
            <p>
              Buatlah CV dan portofolio yang menarik dan sesuai dengan bidang
              pekerjaan yang ingin dilamar. Pastikan informasi yang tercantum
              akurat dan terbaru. Sertakan pula hasil karya yang sudah pernah
              dibuat dalam portofolio, seperti hasil karya tulis, desain, atau
              fotografi.
            </p>
            {tableOfContentsTitle[1]}
            <p>
              Lakukan riset tentang perusahaan yang akan dilamar. Ketahui visi,
              misi, dan nilai-nilai perusahaan tersebut, serta informasi tentang
              produk atau layanan yang ditawarkan. Lakukan juga riset terkait
              jenjang karir yang ditawarkan perusahaan tersebut.
            </p>
            {tableOfContentsTitle[2]}
            <p>
              Pelajari pertanyaan yang mungkin diajukan dalam wawancara kerja
              dan persiapkan jawaban yang tepat. Lakukan juga latihan wawancara
              dengan teman atau keluarga untuk meningkatkan kepercayaan diri.
            </p>
            {tableOfContentsTitle[3]}
            <p>
              Setiap perusahaan memiliki budaya kerja yang berbeda-beda. Maka
              dari itu, bersiaplah untuk menyesuaikan diri dengan budaya dan
              lingkungan kerja yang baru.
            </p>
            {tableOfContentsTitle[4]}
            <p>
              Tingkatkan keterampilan dengan mengikuti kursus atau pelatihan dan
              sertifikasi yang relevan dengan bidang pekerjaan yang diinginkan.
              Dengan mengikuti pelatihan dan sertifikasi, fresh graduate bisa
              menambah kompetensi sebelum terjun ke dunia kerja serta mempunyai
              bukti kompetensi yang sudah diakui yang akan meningkatkan daya
              saing dalam mencari pekerjaan.
            </p>

            <hr className="my-4" />
            <strong>Sumber referensi:</strong>
            <br />
            <a
              href="https://www.topkarir.com/article/detail/hal-penting-yang-harus-disiapkan-fresh-graduate-sebelum-melamar-pekerjaan"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.topkarir.com/article/detail/hal-penting-yang-harus-disiapkan-fresh-graduate-sebelum-melamar-pekerjaan
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
      title: "Fresh Graduate, Siapkan Dulu Hal-Hal Ini Sebelum Mencari Kerja!",
      url: window.location.href,
    });
    window.location.reload();
  } else {
    copyToClipboard();
  }
}
