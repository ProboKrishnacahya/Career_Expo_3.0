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

  return (
    <div className="company-list">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up"></section>
      </div>

      <Footer />
    </div>
  );
}
