import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Article2() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Hard Skill VS Soft Skill, Mana Yang Lebih Penting?";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="blog">
      <Header />

      <div className="container my-5" data-aos="fade-up">
        <h2 className="text-center">
          Hard Skill VS Soft Skill, Mana Yang Lebih Penting?
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
          src="/images/about_us/blog/article2.jpg"
          alt="Article"
          className="rounded shadow-sm d-block mx-auto my-4"
          width={512}
          loading="lazy"
        />

        <div className="row">
          <div className="col-lg-3 mb-4 my-lg-0">
            <div id="side">
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
              Ketika memasuki dunia kerja, pekerja dituntut untuk menguasai
              sejumlah kemampuan, baik hard skill atau pun soft skill. Dua
              kemampuan ini sebenarnya sangat berbeda. Akan tetapi, dalam dunia
              kerja, hard skill dan soft skill seringkali dibenturkan meskipun
              memiliki perbedaan. Terkadang, soft skill dianggap lebih penting
              dibandingkan hard skill. Namun, apakah benar seperti itu?
            </p>
            <p>
              Hard skill sendiri merujuk pada keterampilan teknis dan
              pengetahuan yang terkait dengan pekerjaan tertentu, seperti
              pemrograman komputer, keahlian bahasa asing, atau kemampuan
              analisis data. Hard skill umumnya lebih mudah untuk diukur dan
              dinilai, misalnya melalui nilai akhir kuliah, kemampuan
              menggunakan aplikasi tertentu, dan lain-lain. Hard skill
              seringkali diidentikan dengan kemampuan intelegensi (IQ).
            </p>
            <p>
              Sementara itu, soft skill merujuk pada keterampilan interpersonal
              dan kepribadian, seperti kemampuan berkomunikasi dengan baik,
              kepemimpinan, atau kerjasama tim. Maka dari itu, dibandingkan
              dengan hard skill, soft skill lebih sulit untuk diukur dan
              dinilai. Soft skill biasanya diidentikan dengan kecerdasan
              emosional (EQ) dan kemampuan untuk berempati.
            </p>
            <p>
              Untuk berhasil dalam karir, seorang pekerja perlu mengembangkan
              kedua kemampuan tersebut. Hard skill diperlukan untuk melakukan
              tugas-tugas spesifik dalam pekerjaan serta kemampuan hard skill
              yang relevan dengan pekerjaan yang dilamar akan membuat HR yakin
              jika calon karyawan tersebut benar-benar cocok untuk melakukan
              pekerjaan di posisi yang dilamarnya. Sementara, soft skill
              diperlukan untuk membangun hubungan yang baik dengan orang lain
              dan memimpin dengan efektif. Soft skill juga penting untuk
              dimiliki karena selama bekerja, pekerja tidak mungkin bekerja
              sendiri dan akan berdinamika dalam kelompok kerja.
            </p>
            <p>
              Baik soft skill dan hard skill keduanya sama-sama penting untuk
              dimiliki dan tidak dapat dipisahkan. Akan tetapi, ada hal yang
              lebih penting untuk ditunjukkan saat bekerja, yaitu tunjukkan jika
              pekerja tidak hanya sekadar memiliki kedua skill tersebut, tetapi
              tunjukkan juga jika skill yang dimiliki berkualitas dan tak asal
              punya saja. Sehingga, pekerja harus terus-menerus mengasah skill
              yang dimiliki selama bekerja.
            </p>

            <hr className="my-4" />
            <strong>Sumber referensi:</strong>
            <br />
            <a
              href="https://glints.com/id/lowongan/hard-skill-atau-soft-skill/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://glints.com/id/lowongan/hard-skill-atau-soft-skill/
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
      title: "Hard Skill VS Soft Skill, Mana Yang Lebih Penting?",
      url: window.location.href,
    });
    window.location.reload();
  } else {
    copyToClipboard();
  }
}
