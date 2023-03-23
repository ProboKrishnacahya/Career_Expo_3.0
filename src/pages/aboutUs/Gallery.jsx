import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Gallery() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Gallery";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });
  }, []);

  return (
    <div className="gallery">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Gallery</h2>
          <br />
          <div className="d-grid gap-3">
            <div>
              <iframe
                src="https://drive.google.com/file/d/1M-fehIcbdrbdpKeXGrwyvU0vzLmw-OJy/preview"
                className="rounded shadow-sm w-100"
                title="Video"
                allow="autoplay"
                allowFullScreen="true"
                height={560}
              ></iframe>
            </div>
            <div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                  <img
                    src="images/about_us/gallery/5.jpg"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/about_us/gallery/6.jpg"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/about_us/gallery/7.png"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/about_us/gallery/8.png"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/about_us/gallery/9.png"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="col">
                  <img
                    src="images/about_us/gallery/10.png"
                    alt="Foto"
                    className="rounded shadow-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
