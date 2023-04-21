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
      image: "/images/about_us/blog/article1.jpg",
      alt: "5 Kesalahan Yang Harus Dihindari Dalam Pembuatan CV",
      title: "5 Kesalahan Yang Harus Dihindari Dalam Pembuatan CV",
      time: 1,
      date: "20 April 2023",
      description:
        "CV tentunya menjadi komponen yang sangat penting ketika melamar kerja. Namun, tidak jarang HRD menemukan kesalahan-kesalahan dalam CV yang dikirimkan pelamar kerja. Maka dari itu, yuk ketahui 5 kesalahan yang harus dihindari pelamar kerja dalam pembuatan CV.",
      url: "/5-kesalahan-yang-harus-dihindari-dalam-pembuatan-cv",
    },
    {
      id: 2,
      image: "/images/about_us/blog/article2.jpg",
      alt: "Hard Skill VS Soft Skill, Mana Yang Lebih Penting?",
      title: "Hard Skill VS Soft Skill, Mana Yang Lebih Penting?",
      time: 1,
      date: "20 April 2023",
      description:
        "Ketika memasuki dunia kerja, pekerja dituntut untuk menguasai sejumlah kemampuan, baik hard skill atau pun soft skill. Dua kemampuan ini sebenarnya sangat berbeda. Akan tetapi, dalam dunia kerja, hard skill dan soft skill seringkali dibenturkan meskipun memiliki perbedaan. Terkadang, soft skill dianggap lebih penting dibandingkan hard skill. Namun, apakah benar seperti itu?",
      url: "/hard-skill-vs-soft-skill-mana-yang-lebih-penting",
    },
    {
      id: 3,
      image: "/images/about_us/blog/article3.jpg",
      alt: "Fresh Graduate, Siapkan Dulu Hal-Hal Ini Sebelum Mencari Kerja!",
      title: "Fresh Graduate, Siapkan Dulu Hal-Hal Ini Sebelum Mencari Kerja!",
      time: 1,
      date: "20 April 2023",
      description:
        "Setelah lulus dari universitas, melamar pekerjaan akan menjadi proses selanjutnya yang dilalui fresh graduate. Meski sudah lulus dan dibekali ilmu pendidikan, nyatanya hal itu tidak cukup untuk menarik perusahaan di luar sana untuk merekrut fresh graduate. Ada beberapa hal penting yang perlu disiapkan sebelum melamar pekerjaan. Mari simak pembahasan di bawah ini untuk mengetahui persiapan yang diperlukan fresh graduate sebelum mencari kerja.",
      url: "/fresh-graduate-siapkan-dulu-hal-hal-ini-sebelum-mencari-kerja",
    },
    {
      id: 4,
      image: "/images/about_us/blog/article4.png",
      alt: "5 Tips Untuk Mengembangkan Karir Dengan Maksimal",
      title: "5 Tips Untuk Mengembangkan Karir Dengan Maksimal",
      time: 1,
      date: "20 April 2023",
      description:
        "Setelah bekerja, semua karyawan tentunya berharap dapat mengembangkan karirnya dengan maksimal hingga mencapai puncak karir tertinggi. Oleh karena itu, karyawan perlu mengetahui cara-cara agar dapat mengembangkan karirnya dengan maksimal. Maka dari itu, yuk simak 5 tips untuk mengembangkan karir dengan maksimal berikut ini.",
      url: "/5-tips-untuk-mengembangkan-karir-dengan-maksimal",
    },
  ];

  const blogs = [];

  for (const article of articles) {
    blogs.push(
      <a href={article.url} id="blog">
        <div className="card p-2">
          <div className="row g-3">
            <div className="col-lg-4">
              <img
                src={article.image}
                className="w-100 h-100 rounded shadow-sm"
                alt={article.alt}
                loading="lazy"
              />
            </div>
            <div className="col-lg-8 p-3">
              <h4>{article.title}</h4>
              <p className="d-grid d-lg-flex align-items-start gap-2 gap-lg-4 text-black">
                <div>
                  <i
                    className="bi bi-person-circle"
                    data-bs-toggle="tooltip"
                    title="Writer"
                  ></i>
                  &ensp;UC Corporate Entrepreneurship
                </div>
                <div>
                  <i
                    className="bi bi-calendar-check"
                    data-bs-toggle="tooltip"
                    title="Uploaded Date"
                  ></i>
                  &ensp;{article.date}
                </div>
                <div>
                  <i
                    className="bi bi-stopwatch"
                    data-bs-toggle="tooltip"
                    title="Estimated Reading Time"
                  ></i>
                  &ensp;{article.time}&nbsp;minute read
                </div>
              </p>
              <p className="truncate text-muted">{article.description}</p>
              <button className="btn btn-primary w-100">
                <i className="bi bi-file-text"></i>&ensp;
                <strong>Baca Artikel</strong>
              </button>
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
