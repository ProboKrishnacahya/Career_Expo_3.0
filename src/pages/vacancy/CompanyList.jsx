import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import { company } from "../../data/vacancy/CompanyList";
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

  const companyList = company.map((company) => (
    <div key={company.id} className="col">
      <a href={company.url} className="company-list">
        <div className="card text-center px-0 py-2 h-100">
          <img
            src={company.image}
            alt="Company List"
            loading="lazy"
            className="card-img-top w-75 h-75 mx-auto py-2"
          />
          <div className="card-body py-0 d-grid justify-content-center align-items-center">
            <h4>{company.name}</h4>
          </div>
          <div className="card-footer border-0 bg-transparent">
            <button className="btn btn-primary w-100">
              <i className="bi bi-person-check"></i>&ensp;
              <strong>Join Us</strong>
            </button>
          </div>
        </div>
      </a>
    </div>
  ));

  return (
    <div className="company-list">
      <Header />

      <div className="container">
        <h4 className="text-center">Company List</h4>
        <section className="my-5" data-aos="fade-up">
          <div className="row row-cols-1 row-cols-md-3 g-4">{companyList}</div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
