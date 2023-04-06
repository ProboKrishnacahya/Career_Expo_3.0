import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Blog() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Blog";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const articles = [
    {
      id: 1,
      image:
        "https://static.wixstatic.com/media/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg/v1/fill/w_556,h_371,fp_0.50_0.50,q_90,enc_auto/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg",
      alt: "5 Hal Yang Dinilai HRD Saat Interview",
      title: "5 Hal Yang Dinilai HRD Saat Interview",
      time: 1,
      date: "14 Mei 2021",
      description:
        "Kamu sudah pernah melamar kerja dimana-mana tetapi gagal terus? Kamu tidak tau kesalahan kamu dimana saat melakukan interview? Mungkin kamu melakukan kesalahan yang tidak sengaja. Ada beberapa hal yang dinilai oleh HRD saat kamu wawancara / interview kerja. Berikut beberapa hal yang dinilai oleh HRD saat wawancara.",
      url: "/1",
    },
    {
      id: 2,
      image:
        "https://static.wixstatic.com/media/325aa0_a5e7bb066e9147d1800ce26367a03ae5~mv2.jpg/v1/fill/w_925,h_617,al_c,q_90/325aa0_a5e7bb066e9147d1800ce26367a03ae5~mv2.webp",
      alt: "4 Tips Mencari Magang Buat Fresh Graduate & Mahasiswa",
      title: "4 Tips Mencari Magang Buat Fresh Graduate & Mahasiswa",
      time: 1,
      date: "14 Mei 2021",
      description:
        "Kamu fresh graduate? mahasiswa tingkat akhir? pasti kamu sedang mencari-cari program kerja magang. Buat kamu mahasiswa tingkat akhir pasti kampus kamu diminta untuk menyelesaikan program kerja magang sebelum kamu mulai susun skripsi. Magang biasanya dilakukan dengan waktu rata-rata 3 - 6 bulan",
      url: "/2",
    },
    {
      id: 3,
      image:
        "https://static.wixstatic.com/media/325aa0_08c335379dbf4de991c5428b3d377413~mv2.png/v1/fill/w_750,h_500,al_c,q_90/325aa0_08c335379dbf4de991c5428b3d377413~mv2.webp",
      alt: "Cara Membuat Curriculum Vitae (CV) Yang Baik dan Benar",
      title: "Cara Membuat Curriculum Vitae (CV) Yang Baik dan Benar",
      time: 1,
      date: "14 Mei 2021",
      description:
        "Banyak sekali perusahaan menemukan calon kandidat yang menulis riwayat hidup atau curriculum vitae (CV) yang salah saat melakukan interview. Apakah kamu pernah salah juga dalam membuat curriculum vitae ? atau kamu bingung gimana cara buat curicullum vitae? Yuk, mari kita bahas bagaimana cara membuat curriculum vitae dengan baik & benar agar perusahaan dapat melihat dirimu.",
      url: "/3",
    },
    {
      id: 4,
      image:
        "https://static.wixstatic.com/media/325aa0_ea9fdd8319a346489565f1daf14a14a1~mv2.jpg/v1/fill/w_925,h_617,al_c,q_90/325aa0_ea9fdd8319a346489565f1daf14a14a1~mv2.webp",
      alt: "7 Keterampilan Yang Harus Dimiliki Oleh Seorang Karyawan Perusahaan",
      title:
        "7 Keterampilan Yang Harus Dimiliki Oleh Seorang Karyawan Perusahaan",
      time: 1,
      date: "14 Mei 2021",
      description:
        "Karyawan harus memiliki keterampilan yang baik dalam bekerja. Keterampilan yang kompeten harus dimiliki oleh setiap karywan untuk karir masa depannya. Mungkin kamu memiliki beberapa keterampilan dibawah ini. Mungkin keterampilan ini sudah ada sejak kamu dibangku sekolah, sejak sekolah, atau sejak sekarang. Keterampilan dasar dibawah ini bisa kamu asah dari sekarang agar lebih baik lagi. Berikut ini ada 8 keterampilan yang wajib kamu miliki sebagai karyawan.",
      url: "/4",
    },
  ];

  const blogs = [];

  for (const article of articles) {
    blogs.push(
      <a href={article.url} id="blog">
        <div className="card p-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src={article.image}
                className="img-fluid h-100 rounded shadow-sm"
                alt={article.alt}
                loading="lazy"
              />
            </div>
            <div className="col-md-8 vstack">
              <div className="card-body vstack gap-3 justify-content-between">
                <div>
                  <h4 className="card-title mb-0">{article.title}</h4>
                </div>
                <div>
                  <p className="card-text hstack flex-column flex-sm-row align-items-start text-black gap-md-4 gap-2">
                    <div>
                      <i
                        className="bi bi-stopwatch"
                        data-bs-toggle="tooltip"
                        title="Estimated Reading Time"
                      ></i>
                      &ensp;{article.time}&nbsp;minute read
                    </div>
                    <div>
                      <i
                        className="bi bi-calendar-check"
                        data-bs-toggle="tooltip"
                        title="Uploaded Date"
                      ></i>
                      &ensp;{article.date}
                    </div>
                  </p>
                  <p className="truncate text-muted">{article.description}</p>
                </div>
                <div>
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-file-text"></i>&ensp;
                    <strong>Baca Artikel</strong>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="blog">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Blog</h2>
          <br />
          <div className="d-grid gap-4">{blogs}</div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
