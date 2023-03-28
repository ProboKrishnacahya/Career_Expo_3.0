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

  const companies = [
    {
      id: 1,
      image: "images/vacancy/company_list/bcamultifinance.jpg",
      name: "BCA Multi Finance",
      url: "/company-list/bcamultifinance",
    },
    {
      id: 2,
      image: "images/vacancy/company_list/c+c&co.png",
      name: "C+C&CO",
      url: "/company-list/c+c&co",
    },
    {
      id: 3,
      image: "images/vacancy/company_list/caravanstudio.webp",
      name: "Caravan Studio",
      url: "/companylist/CaravanStudio",
    },
    {
      id: 4,
      image: "images/vacancy/company_list/hotelcw.png",
      name: "Hotel Ciputra World",
      url: "/companylist/HotelCiputraWorld",
    },
    {
      id: 5,
      image: "images/vacancy/company_list/komunal.png",
      name: "Komunal",
      url: "/companylist/komunal",
    },
    {
      id: 6,
      image: "images/vacancy/company_list/marketingciputra.png",
      name: "Marketing Office Ciputra",
      url: "/companylist/marketingofficeciputra",
    },
    {
      id: 7,
      image: "images/vacancy/company_list/mceasy.png",
      name: "Mc Easy",
      url: "/companylist/mceasy",
    },
    {
      id: 8,
      image: "images/vacancy/company_list/prudential.png",
      name: "Prudential Life Assurance",
      url: "/companylist/prudential",
    },
    {
      id: 9,
      image: "images/vacancy/company_list/astraizuzu.gif",
      name: "PT Astra International",
      url: "/companylist/AstraIzuzu",
    },
  ];

  const companyList = [];

  for (const company of companies) {
    companyList.push(
      <div className="col">
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
      );
  }

  return (
    <div className="company-list">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {companyList}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
