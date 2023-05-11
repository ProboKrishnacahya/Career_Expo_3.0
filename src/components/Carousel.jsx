import React from "react";
export default function Carousel() {
  const items = [
    { id: 1, image: "/images/home/sponsors/Aromasphere.png" },
    { id: 2, image: "/images/home/sponsors/Bank Syariah Tulen Amanah.jpg" },
    { id: 3, image: "/images/home/sponsors/Bidy Tour _ Travel.jpeg" },
    { id: 4, image: "/images/home/sponsors/Body Garage.png" },
    { id: 5, image: "/images/home/sponsors/ConsoleTechID.png" },
    { id: 6, image: "/images/home/sponsors/CV Kian Sukses.jpeg" },
    { id: 7, image: "/images/home/sponsors/CV Kreasi Unggul Perkasa.png" },
    { id: 8, image: "/images/home/sponsors/CV Nusantara Graphic.jpg" },
    { id: 9, image: "/images/home/sponsors/Double T Tortoise.png" },
    { id: 10, image: "/images/home/sponsors/Galantine Nyonya Elsye.png" },
    { id: 11, image: "/images/home/sponsors/Herbivora Indonesia.jpeg" },
    { id: 12, image: "/images/home/sponsors/Insolite.jpg" },
    { id: 13, image: "/images/home/sponsors/JB Performance.png" },
    { id: 14, image: "/images/home/sponsors/Jessi Jon_s Kitchen.jpg" },
    { id: 15, image: "/images/home/sponsors/Kost Prameswari.png" },
    { id: 16, image: "/images/home/sponsors/Logo Sendang Bagus Emas Farm.png" },
    { id: 17, image: "/images/home/sponsors/Nashbox.jpg" },
    { id: 18, image: "/images/home/sponsors/Platestore Surabaya.png" },
    { id: 19, image: "/images/home/sponsors/PT BPR Pedungan.jpg" },
    { id: 20, image: "/images/home/sponsors/PT BPR Pedungann.jpg" },
    { id: 21, image: "/images/home/sponsors/Sambari.png" },
    { id: 22, image: "/images/home/sponsors/Semillas.jpeg" },
    { id: 23, image: "/images/home/sponsors/Shirapot Meal.jpeg" },
    { id: 24, image: "/images/home/sponsors/Sleepeve.png" },
    { id: 25, image: "/images/home/sponsors/The Rani Garden Bali.jpg" },
    { id: 26, image: "/images/home/sponsors/Walic.co.jpeg" },
  ];

  return (
    <div
      id="carouselSponsors"
      className="carousel carousel-dark slide"
      data-bs-ride="false"
      data-bs-interval="false"
    >
      <div className="carousel-inner text-center mx-auto">
        {items.map((item) => (
          <div
            key={item.id}
            className={item.id === 1 ? "carousel-item active" : "carousel-item"}
          >
            <img src={item.image} alt="Sponsors" loading="lazy" />
          </div>
        ))}
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