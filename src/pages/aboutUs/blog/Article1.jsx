import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Article1() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "5 Hal Yang Dinilai HRD Saat Interview";

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
        <h2 className="text-center">5 Hal Yang Dinilai HRD Saat Interview</h2>
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
            &ensp;<span>May 14, 2021</span>
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
          src="https://static.wixstatic.com/media/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg/v1/fill/w_556,h_371,fp_0.50_0.50,q_90,enc_auto/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg"
          alt="Article"
          className="rounded shadow-sm d-block mx-auto my-4"
          width={512}
          loading="lazy"
        />

        <div className="row">
          <div className="col-lg-3 mb-4 my-lg-0">
            <ul className="list-unstyled alert alert-info" id="toc">
              <strong>Daftar isi:</strong>
              <li>
                <a href="#toc1">1. Kompetensi Calon Karyawan</a>
              </li>
              <li>
                <a href="#toc2">2. Etika</a>
              </li>
              <li>
                <a href="#toc3">3. Penampilan Diri</a>
              </li>
              <li>
                <a href="#toc4">4. Komunikasi</a>
              </li>
              <li>
                <a href="#toc5">5. Pengalaman</a>
              </li>
            </ul>
            <button className="btn btn-primary w-100" onClick={copyToClipboard}>
              <i className="bi bi-link-45deg"></i>&ensp;
              <strong>Bagikan Artikel</strong>
            </button>
          </div>

          <div className="col-lg-9">
            <p>
              Kamu sudah pernah melamar kerja dimana-mana tetapi gagal terus?
              Kamu tidak tau kesalahan kamu dimana saat melakukan interview?
              Mungkin kamu melakukan kesalahan yang tidak sengaja. Ada beberapa
              hal yang dinilai oleh HRD saat kamu wawancara / interview kerja.
              Berikut beberapa hal yang dinilai oleh HRD saat wawancara.
            </p>
            <h4 id="toc1">1. Kompetensi Calon Karyawan</h4>
            <p>
              Kompetensi seorang calon karyawan biasanya dilihat dari pendidikan
              yang ditempuh, pengalaman kerja, dan skill yang dimiliki. Apakah
              latar belakang pendidikan kamu & pengalaman kerja telah sesuai
              dengan kualifikasi yang menjadi persyaratan posisi kamu? Jika iya,
              maka kesempatan kamu akan menjadi lebih terbuka.
            </p>
            <h4 id="toc2">2. Etika</h4>
            <p>
              Proses wawancara, sikap sopan dan ramah juga menjadi penilaian
              bagi HRD sendiri. Setiap wawancara pasti akan dilihat gerak-gerik
              yang dilakukan calon. Oleh karena itu, kamu harus menjaga perilaku
              dan sikap kamu pada saat proses wawancara yaa.
            </p>
            <h4 id="toc3">3. Penampilan Diri</h4>
            <p>
              Penampilan diri adalah penilaian awal bagi seorang HRD. Dari
              penampilan dapat terlihat kamu orangnya seperti apa. Maka dari
              itu, gunakan pakaian yang pantas dan rapi agar kamu terlihat
              profesional.
            </p>
            <h4 id="toc4">4. Komunikasi</h4>
            <p>
              Pasti saat wawancara kamu akan berbicara dengan pewawancara. Kamu
              harus memperhatikan gaya bicara kamu dengan mengatur intonasi,
              volume suara yang jelas dan yakin dengan apa yang kamu katakan
              kepada pewawancara. Jadi, kamu harus pastikan cara komunikasi kamu
              jelas & tegas. Sebelum melakukan wawancara cobalah berbicara
              didepan cermin dan latihan agar lancar.
            </p>
            <h4 id="toc5">5. Pengalaman</h4>
            <p>
              Jika kamu memiliki pengalaman di bidang yang kamu daftarkan
              tersebut. Ceritakanlah pengalaman kamu sebelum kamu mendaftar di
              perusahaan tersebut. Jika sesuai dengan kualifikasi perusahaan
              maka kesempatan kamu diterima akan menjadi lebih besar.
            </p>
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
