import React from "react";
export default function Carousel() {
  

  return (
    <div
      id="carouselSponsors"
      className="carousel carousel-dark slide"
      data-bs-ride="false"
      data-bs-interval="false"
    >
      <div className="carousel-inner text-center mx-auto">
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselSponsors"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          data-bs-toggle="tooltip"
          title="Previous"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselSponsors"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          data-bs-toggle="tooltip"
          title="Next"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
