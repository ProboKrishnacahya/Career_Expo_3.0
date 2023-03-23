import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CompanyList() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Company List";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  const postsReadMore = [
    {
      id: 1,
      image:
        "https://static.wixstatic.com/media/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg/v1/fill/w_556,h_371,fp_0.50_0.50,q_90,enc_auto/325aa0_9f2f7da218a74084a3f12d25db292eb3~mv2.jpg",
      alt: "Artikel",
      title: "5 Hal Yang Dinilai HRD Saat Interview",
      time: 1,
      date: "14 Mei 2021",
      url: "/",
    },
  ];

  const blogsReadMore = [];

  for (const postReadMore of postsReadMore) {
    blogsReadMore.push(
      <div className="card p-2 mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={postReadMore.image}
              className="post-thumbnail img-fluid h-100 rounded shadow-sm"
              alt={postReadMore.alt}
              loading="lazy"
            />
          </div>
          <div className="col-md-8 vstack">
            <div className="card-body vstack gap-3 justify-content-between">
              <div>
                <h5 className="card-title mb-0">{postReadMore.title}</h5>
              </div>
              <div>
                <p className="card-text hstack flex-column flex-sm-row align-items-start text-truncate text-muted gap-md-5 gap-2">
                  <div>
                    <i
                      className="bi bi-stopwatch"
                      data-bs-toggle="tooltip"
                      title="Estimated Reading Time"
                    ></i>
                    &ensp;{postReadMore.time}&nbsp;minutes
                  </div>
                  <div>
                    <i
                      className="bi bi-calendar-date"
                      data-bs-toggle="tooltip"
                      title="Uploaded Date"
                    ></i>
                    &ensp;{postReadMore.date}
                  </div>
                </p>
                <p>Kamu sudah pernah melamar kerja dimana-mana tetapi gagal terus? Kamu tidak tau kesalahan kamu dimana saat melakukan interview? Mungkin kamu melakukan kesalahan yang tidak sengaja. Ada beberapa hal yang dinilai oleh HRD saat kamu wawancara / interview kerja. Berikut beberapa hal yang dinilai oleh HRD saat wawancara.</p>
              </div>
              <div>
                <a href={postReadMore.url} className="stretched-link">
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-arrow-right"></i>&ensp;
                    <strong>Baca Artikel</strong>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="blogs">
      <Header />
      <div className="container d-grid gap-5 my-5" data-aos="fade-up">
        <div>{blogsReadMore}</div>
      </div>
      <Footer />
    </div>
  );
}
