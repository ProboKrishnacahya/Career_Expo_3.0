import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { job } from "../../data/vacancy/JobVacancy";

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

  const companyList = job.map((job) => (
    <div className="col">
      <NavLink to={job.companyURL} className="company-list">
        <div className="card text-center px-0 py-2 h-100">
          <img
            src={job.image}
            alt={job.name}
            loading="lazy"
            className="card-img-top w-75 h-75 mx-auto py-3"
          />
          <div className="card-body py-0 d-grid justify-content-center align-items-center">
            <h4>{job.name}</h4>
          </div>
          <div className="card-footer border-0 bg-transparent">
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-check"></i>&ensp;
              <strong>Join Us</strong>
            </button>
          </div>
        </div>
      </NavLink>
    </div>
  ));

  const perusahaan = companyList.filter((_item, index) =>
    [
      0, 2, 16, 20, 57, 75, 85, 88, 94, 98, 101, 111, 123, 125, 129, 132, 143,
      163, 172, 181, 199, 201, 211,
    ].includes(index)
  );

  return (
    <div className="company-list">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Company List</h2>
          <br />
          <div className="row row-cols-1 row-cols-md-3 g-3 g-lg-4">
            {perusahaan}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
