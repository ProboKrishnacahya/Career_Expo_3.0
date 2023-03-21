import React, { useEffect } from "react";
import { Tooltip } from "bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      alt: "Lorem ipsum",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      time: 11,
      category: "Machine Learning",
      date: "Jun 10th, 2022",
      url: "/",
    },
  ];

  const blogsReadMore = [];

  for (const postReadMore of postsReadMore) {
    blogsReadMore.push(
      <div className="postTarget card p-0 mb-4">
        <div className="row">
          <div className="col-md-4">
            <img
              src={postReadMore.image}
              className="post-thumbnail img-fluid h-100"
              alt={postReadMore.alt}
              loading="lazy"
            />
          </div>
          <div className="col-md-8 vstack justify-content-between">
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
                    &emsp;{postReadMore.time}&nbsp;minutes
                  </div>
                  <div>
                    <i
                      className="bi bi-calendar-date"
                      data-bs-toggle="tooltip"
                      title="Uploaded Date"
                    ></i>
                    &emsp;{postReadMore.date}
                  </div>
                  <div className="text-truncate">
                    <i
                      className="bi bi-tag"
                      data-bs-toggle="tooltip"
                      title="Category"
                    ></i>
                    &emsp;{postReadMore.category}
                  </div>
                </p>
              </div>
              <div>
                <a href={postReadMore.url} className="stretched-link">
                  <button className="btn btn-primary w-100">
                    <i className="bi bi-arrow-right"></i>&emsp;
                    <strong>Read More</strong>
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
