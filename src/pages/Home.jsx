import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Tooltip } from "bootstrap";
import $ from "jquery";
import Header from "./../components/Header";
import Footer from "./../components/Footer";

export default function Home() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Career Expo 3.0";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });

    // * Dropdown Filter Locations for Photography
    $(document).ready(function () {
      $("select")
        .change(function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).attr("value");
              if (optionValue) {
                $(".photos")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".photos").hide();
              }
            });
        })
        .change();
    });
  }, []);

  // * About Me
  const profiles = [
    {
      id: 1,
      icon: "bi bi-person-circle",
      title: "Full Name",
      text: "Probo Krishnacahya",
    },
    {
      id: 2,
      icon: "bi bi-geo-alt",
      title: "City of Domicile",
      text: "Surabaya, East Java",
    },
    {
      id: 3,
      icon: "bi bi-flag",
      title: "Nationality",
      text: "Indonesia",
    },
    {
      id: 4,
      icon: "bi bi-suit-heart",
      title: "Religion",
      text: "Catholic",
    },
    {
      id: 5,
      icon: "bi bi-gender-male",
      title: "Gender",
      text: "Male",
    },
  ];

  const aboutMe = [];

  for (const profile of profiles) {
    aboutMe.push(
      <div className="vstack justify-content-center">
        <div>
          <i
            className={profile.icon}
            data-bs-toggle="tooltip"
            title={profile.title}
          ></i>
          &emsp;{profile.text}
        </div>
      </div>
    );
  }

  // * Professional Experiences
  const works = [
    {
      id: 1,
      url: "https://appledeveloperacademy.uc.ac.id/#academy-experience",
      name: "Tech (Coder) Intern Cohort 2023",
      description:
        "The 10 months Internship at Apple Developer Academy @ UC is a program to forge oneself into a World-Class Developer via Industry Leading Frameworks including Challenge Based Learning, Design Thinking, and Project Management that combined with a T-Shaped Curriculum Model to become a well-rounded professional.",
      type: "Internship - Onsite",
      date: "Mar 2022 - present",
    },
    {
      id: 2,
      url: "https://www.uc.ac.id/ejourney/entrepreneurship-cluster/",
      name: "Student Assistant",
      description:
        "Digital Entrepreneurship and Innovation class which is under the management of Faculty of Entrepreneurship and Humanities is intended for Students to be able to create innovative business models in the technology/digital industry that are validated through a process of exploration and exploitation opportunities, resource mobilization, and process validation using the Business Model Canvas. At this assistance, I am responsible to manage E-Learning contents using Moodle LMS, preparing presentation slides as a learning module, and guiding Students in the practice of working on projects as assignments of class participants.",
      type: "Contract - Onsite",
      date: "Feb 2022 - present",
    },
    {
      id: 3,
      url: "https://comfypace.com/",
      name: "Lecturer Research Assistant",
      description:
        "ComfyPace is a Web Application that implemented MVC Architecture and created using PHP (Laravel), JavaScript, HTML5, CSS3, Tailwind CSS, Alpine.js, and Livewire. This Education application can be used by Teachers to monitor and find out the progress of Students' understanding during the learning process. By obtaining an overview of Students' understanding progress, the Teachers can determine a suitable learning scheme. ComfyPace is intended to help increase the effectiveness and quality of Students' understanding of the learning process in the classroom through a system designed so that all material can be studied according to each Student's learning style and learning speed. As for, the output of this Research entitled 'Sistem Pendukung Metode Pembelajaran Self-Paced Learning bagi Mahasiswa di dalam Kelas Berbasis Web' is a Website Application Prototype and Scientific Article which will be published in the form of a Scientific Journal. At this assistance, I am responsible to conducting surveys (Requirement Testing and User Acceptance Testing) to manage its data into presentation slides and preparing image documents (Entity Relationship Diagram and Use Case Diagram) for Scientific Journal writing purposes.",
      type: "Contract - Remote",
      date: "Aug 2022 - Jan 2023",
    },
  ];

  const professional = [];

  for (const work of works) {
    professional.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a
            href={work.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <h3 className="text-center">{work.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle"
            data-bs-toggle="tooltip"
            title="Professional Experience Description"
          ></i>
          &emsp;{work.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-diagram-3"
            data-bs-toggle="tooltip"
            title="Professional Experience Employment Type"
          ></i>
          &emsp;{work.type}
        </p>
        <p className="text-muted">
          <i
            className="bi bi-clock category-time"
            data-bs-toggle="tooltip"
            title="Professional Experience Time"
          ></i>
          &emsp;{work.date}
        </p>
      </div>
    );
  }

  // * Volunteering
  const events = [
    {
      id: 1,
      url: "https://bebras.or.id/v3/bebras-indonesia-challenge-2022/",
      name: "Bebras Indonesia Computational Thinking Challenge 2022",
      description:
        "Bebras Indonesia Computational Thinking Challenge is an online challenge for Students to educate problem solving skills that contain the concept of Computational Thinking. This activity was divided into 4 categories according to the education level of the participants, namely SiKecil, Siaga, Penggalang, and Penegak. At this event, I am responsible as a member of the committee through data recapitulation of all workshop participants for competition preparation training and uploading competition participant registration data from various Elementary Schools, Junior High Schools, and Senior High Schools in Indonesia to the central information system.",
      position: "Member of UC Bureau Committee",
      date: "Nov 2022 - Jan 2023",
    },
    {
      id: 2,
      url: "https://sites.google.com/ciputra.ac.id/ct-for-educators/",
      name: "Best Practices on Computational Thinking for Future Educators Workshop",
      description:
        "Best Practices on Computational Thinking for Future Educators Workshop is a special program designed by Universitas Ciputra Techno Center for Teachers to train Computational Thinking successfully. This program empowers Educators to become Experts in embedding Computational Thinking in their teaching strategies. Workshop topics include Introduction to Computational Thinking, Computational Thinking in Class & Developing Computational Thinking Tasks, and Computational Thinking Tools. At this event, I am responsible as a member of the Module (Presentation Slides) Division through designing the layout of the content and making illustrations of the material that has been prepajakarta by the Trainer.",
      position:
        "Member of Module (Presentation Slides) Division (Ad Hoc Committee)",
      date: "Jul 2022 - Sep 2022",
    },
    {
      id: 3,
      url: "https://informatika.uc.ac.id/id/2022/04/technopreneurship-workshop-2022-day-1/",
      name: "Technopreneurship Workshop",
      description:
        "Technopreneurship Workshop is a Department Camp for Informatics Students at Universitas Ciputra Surabaya, where there are activities in the form of workshops and webinars. It was held with the aim of honing the Technopreneurship skills of students through designing business ideas engaged in technology using the Business Model Canvas, Pitching Deck, and User Interface Design Prototype to get investment from investors. At this event, I am responsible as a Member of IT - Inventory Division for Configure the Discord's Community Server which is used for Bonding sessions between Mentors with their Mentees and Prepare the needs of Mini Games equipment.",
      position: "Member of IT - Inventory Division (Ad Hoc Committee)",
      date: "Apr 2022",
    },
    {
      id: 4,
      url: "https://nplc.uc.ac.id/",
      name: "8th National Programming & Logic Competition",
      description:
        "National Programming & Logic Competition is a yearly programming and logic competition for High School Students and equivalent organized by the Informatics Student Union at Universitas Ciputra Surabaya. It was held with the aim of honing correct logic and programming skills, strengthening teamwork, and fostering a competitive spirit among participants. At this event, I am responsible as a Member of Marketing Division for Inviting High School Students and equivalent to register as participants in the competition and Contacting Young Influencers to participate in promoting the competition through social media.",
      position: "Member of Marketing Division (Ad Hoc Committee)",
      date: "Nov 2020 - Jan 2021",
    },
  ];

  const volunteering = [];

  for (const event of events) {
    volunteering.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <h3 className="text-center">{event.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle"
            data-bs-toggle="tooltip"
            title="Event Description"
          ></i>
          &emsp;{event.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-diagram-3"
            data-bs-toggle="tooltip"
            title="Event Position"
          ></i>
          &emsp;{event.position}
        </p>
        <p className="text-muted">
          <i
            className="bi bi-clock category-time"
            data-bs-toggle="tooltip"
            title="Event Time"
          ></i>
          &emsp;{event.date}
        </p>
      </div>
    );
  }

  // * Awards
  const achievements = [
    {
      id: 1,
      url: "https://informatika.uc.ac.id/id/2022/11/prestasi-nasional-team-informatika-uc-juara-lo-kreatif-2022/",
      name: "2nd Place in Lomba Nasional Kreativitas Mahasiswa 2022 - Web/Mobile Application Category",
      description: `Lomba Nasional Kreativitas Mahasiswa (LO Kreatif) 2022 is a national scale competition in the form of 9 categories that organized by Asosiasi Perguruan Tinggi Swasta Indonesia Wilayah VII Jawa Timur. Archotech Team representing Universitas Ciputra Surabaya in the Web/Mobile Application competition category with the competition theme "Mewujudkan Inovasi Kreatif Anak Bangsa Untuk Merdeka Belajar" managed to win by occupying the Runner up. At this competition, I am responsible as a Frontend Developer and UI/UX Designer.`,
      publisher:
        "Asosiasi Perguruan Tinggi Swasta Indonesia Wilayah VII Jawa Timur",
      date: "Nov 2022",
    },
    {
      id: 2,
      url: "https://informatika.uc.ac.id/id/2022/08/juara-2-ui-ux-design-competition-national-informatic-fun-competition-2022/",
      name: "2nd Place in National Informatic Fun Competition 2K22 - UI/UX Design Category",
      description: `National Informatic Fun Competition (NIFC) 2K22 is a national scale activity in the form of 8 categories of Competition, Workshop, Webinars, and Bazaars organized by HIMA Teknik Informatika Universitas Muhammadiyah Riau. Weerausaha Team representing Universitas Ciputra Surabaya in the User Interface - User Experience (UI/UX) Design competition category with the competition theme "The Role of Digital Technology in the Development of Educational Ideas and Innovation" along with the sub-theme "Education" managed to win by occupying the Runner up. At this competition, I am responsible as a Lead UI/UX Designer.`,
      publisher: "Universitas Muhammadiyah Riau",
      date: "Aug 2022",
    },
    {
      id: 3,
      url: "https://informatika.uc.ac.id/id/2022/08/prestasi-fit-competition-2022-juara-1-harapan-2-dan-ide-terbaik/",
      name: "9th Place in Faculty of Information Technology Competition 2022 - Web Developer Category",
      description: `Faculty of Information Technology (FIT) Competition 2022 is a national scale competition in the field of information technology held by Himpunan Mahasiswa S1 Teknik Informatika Fakultas Teknologi Informasi Universitas Kristen Satya Wacana. This competition aims to foster a competitive spirit and spur students to realize creative and innovative ideas in the field of Informatics Engineering that have technology-based business values ​​(mobile and website applications) and are beneficial to the community. SK Team representing Universitas Ciputra Surabaya in the Web Developer category with the competition theme "Innovation For a Better World" managed to rank 9th as a finalist. At this competition, I am responsible as a Lead Full Stack Web Developer.`,
      publisher: "Universitas Kristen Satya Wacana Salatiga",
      date: "Aug 2022",
    },
    {
      id: 4,
      url: "https://drive.google.com/file/d/15ydpPZhchkpiBSl9l5dyzWO2O69V4GY2/view?usp=share_link",
      name: "Full Score Achievement",
      description:
        "Reached Grade Point Average 4.0 in 2021/2022 Odd (3rd Semester).",
      publisher: "Universitas Ciputra Surabaya",
      date: "Jan 2022",
    },
  ];

  const awards = [];

  for (const achievement of achievements) {
    awards.push(
      <div className="card mb-4 pt-4 pb-2">
        <p className="mb-0">
          <a
            href={achievement.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            <h3 className="text-center">{achievement.name}</h3>
          </a>
          <hr />
        </p>
        <p className="mb-3">
          <i
            className="bi bi-info-circle"
            data-bs-toggle="tooltip"
            title="Award Description"
          ></i>
          &emsp;{achievement.description}
        </p>
        <p className="mb-3">
          <i
            className="bi bi-patch-check"
            data-bs-toggle="tooltip"
            title="Publisher"
          ></i>
          &emsp;{achievement.publisher}
        </p>
        <p className="text-muted">
          <i
            className="bi bi-clock category-time"
            data-bs-toggle="tooltip"
            title="Published Date"
          ></i>
          &emsp;{achievement.date}
        </p>
      </div>
    );
  }

  // * Hobbies
  // Jakarta
  const jkt = [
    { id: 1, image: "images/home/photography/gedung-1.jpg" },
    { id: 2, image: "images/home/photography/gedung-2.jpg" },
    { id: 3, image: "images/home/photography/gedung-3.jpg" },
    { id: 4, image: "images/home/photography/gedung-4.jpg" },
    { id: 5, image: "images/home/photography/gedung-5.jpg" },
    { id: 6, image: "images/home/photography/gedung-6.jpg" },
    { id: 7, image: "images/home/photography/gedung-7.jpg" },
    { id: 8, image: "images/home/photography/gedung-8.jpg" },
    { id: 9, image: "images/home/photography/mall-1.jpg" },
    { id: 10, image: "images/home/photography/mall-2.jpg" },
  ];

  const jakarta = [];

  for (const shoot of jkt) {
    jakarta.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  // Malang
  const mlg = [
    { id: 1, image: "images/home/photography/candi-3.jpg" },
    { id: 2, image: "images/home/photography/chochin.jpg" },
    { id: 3, image: "images/home/photography/tanaman-1.jpg" },
    { id: 4, image: "images/home/photography/tanaman-2.jpg" },
    { id: 5, image: "images/home/photography/tanaman-3.jpg" },
    { id: 6, image: "images/home/photography/tanaman-4.jpg" },
  ];

  const malang = [];

  for (const shoot of mlg) {
    malang.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  // Surabaya
  const sby = [
    { id: 1, image: "images/home/photography/golf.jpg" },
    { id: 2, image: "images/home/photography/hujan.jpg" },
    { id: 3, image: "images/home/photography/lilin.jpg" },
  ];

  const surabaya = [];

  for (const shoot of sby) {
    surabaya.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  // Yogyakarta
  const yyk = [
    { id: 1, image: "images/home/photography/candi-1.jpg" },
    { id: 2, image: "images/home/photography/candi-2.jpg" },
    { id: 3, image: "images/home/photography/pantai-1.jpg" },
    { id: 4, image: "images/home/photography/pantai-2.jpg" },
    { id: 5, image: "images/home/photography/pantai-3.jpg" },
    { id: 6, image: "images/home/photography/permukiman.jpg" },
  ];

  const yogyakarta = [];

  for (const shoot of yyk) {
    yogyakarta.push(
      <div key={shoot.id}>
        <img
          src={shoot.image}
          className="d-block rounded shadow-sm w-100"
          loading="lazy"
          alt="Photography"
        />
      </div>
    );
  }

  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="text-center my-5" data-aos="fade-up">
          <p className="display-2 fw-bold" id="fullName">
            Career Expo 3.0
          </p>
          <br />
          <p className="display-4" id="typewriting"></p>
          <br />
          <div className="d-grid gap-4 d-md-flex gap-md-3 justify-content-md-center my-5">
            <NavLink className="btn btn-primary btn-lg" to="/contacts">
              <i className="bi bi-card-checklist"></i>&emsp;
              <strong>Proposal Kegiatan</strong>
            </NavLink>
            <NavLink className="btn btn-secondary btn-lg" to="/contacts">
              <i className="bi bi-megaphone"></i>&emsp;
              <strong>Proposal Sponsorship</strong>
            </NavLink>
          </div>
          <h3 className="scroll-down text-center mt-5 pt-5">
            <a href="#home">
              <i
                className="bi bi-chevron-double-down"
                data-bs-toggle="tooltip"
                title="Scroll Down"
              ></i>
            </a>
          </h3>
        </div>
        <div
          className="modal fade"
          id="resumeModal"
          tabindex="-1"
          aria-labelledby="resumeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen">
            <div className="modal-content bg-dark">
              <div className="modal-header">
                <h5 className="modal-title" id="resumeModalLabel">
                  <i className="bi bi-file-earmark-person"></i>&emsp;Probo
                  Krishnacahya&#39;s Resume
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <iframe
                  src="pdf/home/ProboKrishnacahya_Resume.pdf"
                  frameborder="0"
                  title="Resume"
                  className="w-100 vh-100"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <section id="home" data-aos="fade-up">
          <h4 className="text-center section-title">About Us</h4>
          <br />
          <div className="hstack">
            <div>
              <img
                src="images/corporate_entrepreneurship.png"
                id="assets"
                alt="Probo Krishnacahya"
                loading="lazy"
              />
            </div>
            <div>
              <p>
                Virtual Career Expo 2.0 adalah acara tahunan yang di
                selenggarakan oleh mata kuliah Corporate Entrepreneurship
                Universitas Ciputra Surabaya. Kegiatan Virtual Career Expo 2.0
                merupakan kegiatan yang mempertemukan para calon intrapreneur
                dengan berbagai perusahaan-perusahaan yang menjadi impiannya.
              </p>
            </div>
          </div>
        </section>

        <section id="below-the-fold">
          <div className="vstack gap-5 mb-5">
            <div data-aos="fade-up">
              <h4 className="text-center section-title">
                &#128188;&ensp;Professional Experiences
              </h4>
              <br />
              {professional}
            </div>
          </div>

          <div className="vstack gap-5">
            <div data-aos="fade-up">
              <h4 className="text-center section-title">
                &#128293;&ensp;Volunteering
              </h4>
              <br />
              {volunteering}
            </div>

            <div data-aos="fade-up">
              <h4 className="text-center section-title">
                &#127942;&ensp;Awards
              </h4>
              <br />
              {awards}
            </div>
          </div>
        </section>

        <div className="container mb-5" data-aos="fade-up">
          <h4 className="text-center section-title">&#10024;&ensp;Hobbies</h4>
          <br />
          <div
            id="carouselHobbies"
            className="carousel slide"
            data-bs-ride="false"
            data-bs-interval="false"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="0"
                data-bs-toggle="tooltip"
                title="Photography"
                className="active"
                aria-current="true"
                aria-label="Photography"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="1"
                data-bs-toggle="tooltip"
                title="Sports"
                aria-label="Sports"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="2"
                data-bs-toggle="tooltip"
                title="Cooking"
                aria-label="Cooking"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="3"
                data-bs-toggle="tooltip"
                title="Watch Movies and Series"
                aria-label="Watch Movies and Series"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="4"
                data-bs-toggle="tooltip"
                title="Listen to Songs"
                aria-label="Listen to Songs"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselHobbies"
                data-bs-slide-to="5"
                data-bs-toggle="tooltip"
                title="Playing Games"
                aria-label="Playing Games"
              ></button>
            </div>
            <div className="carousel-inner text-center mx-auto">
              <div className="carousel-item active">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <img
                        src="images/home/hobbies/photography.svg"
                        className="card-img-top mx-auto pt-5 pb-3"
                        alt="Photography"
                        loading="lazy"
                      />
                      <figcaption className="figure-caption text-muted">
                        Landscape Genre
                      </figcaption>
                      <p className="card-title mb-3">Photography</p>
                      <button
                        type="button"
                        className="btn btn-primary mb-5"
                        data-bs-toggle="modal"
                        data-bs-target="#modalPhotography"
                      >
                        <i className="bi bi-image"></i>&emsp;
                        <strong>Look Photos</strong>
                      </button>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <a
                        href="https://storyset.com/illustration/jiu-jitsu/rafiki"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="images/home/hobbies/sports.svg"
                          className="card-img-top mx-auto py-3"
                          alt="Sports"
                          loading="lazy"
                        />
                      </a>
                      <figcaption className="figure-caption text-muted">
                        Martial Arts
                      </figcaption>
                      <p className="card-title mb-5">Sports</p>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <img
                        src="images/home/hobbies/cooking.svg"
                        className="card-img-top mx-auto py-3"
                        alt="Cooking"
                        loading="lazy"
                      />
                      <figcaption className="figure-caption text-muted">
                        Main Course and Dessert
                      </figcaption>
                      <p className="card-title mb-5">Cooking</p>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <img
                        src="images/home/hobbies/watch-movies-and-series.svg"
                        className="card-img-top mx-auto py-3"
                        alt="Watch Movies and Series"
                        loading="lazy"
                      />
                      <figcaption className="figure-caption text-muted">
                        Action and Science Fiction Genres
                      </figcaption>
                      <p className="card-title mb-5">Watch Movies and Series</p>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <img
                        src="images/home/hobbies/listen-to-songs.svg"
                        className="card-img-top mx-auto pt-5 pb-3"
                        alt="Listen to Songs"
                        loading="lazy"
                      />
                      <figcaption className="figure-caption ">
                        Pop Genre
                      </figcaption>
                      <p className="card-title mb-5">Listen to Songs</p>
                    </figure>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="col">
                  <div className="kartu h-100">
                    <figure className="figure d-block mx-auto">
                      <img
                        src="images/home/hobbies/playing-games.svg"
                        className="card-img-top mx-auto pt-5 pb-3"
                        alt="Playing Games"
                        loading="lazy"
                      />
                      <figcaption className="figure-caption text-muted">
                        Action, Racing, Sports, Third Person Shooter, and Open
                        World Genres
                      </figcaption>
                      <p className="card-title mb-5">Playing Games</p>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselHobbies"
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
              data-bs-target="#carouselHobbies"
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
        </div>
      </div>
      <div
        className="modal fade"
        id="modalPhotography"
        data-bs-backdrop="static"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content bg-dark">
            <div className="modal-header text-center">
              <h5 className="modal-title" id="staticBackdropLabel">
                <i className="bi bi-camera"></i>&emsp;Collection of My Shoots
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-grid gap-4">
              <div className="d-flex justify-content-end">
                <select className="form-select border-0 bg-primary text-white w-auto align-self-end">
                  <option value="jakarta">Jakarta</option>
                  <option value="surabaya">Surabaya</option>
                  <option value="yogyakarta">Yogyakarta</option>
                  <option value="malang">Malang</option>
                </select>
              </div>
              <div className="jakarta photos">
                <div
                  id="carouselPhotography1"
                  className="carousel slide"
                  data-bs-ride="false"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="1"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="2"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="3"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="4"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="5"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="6"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="7"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="8"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography1"
                      data-bs-slide-to="9"
                      aria-label="Photography"
                    ></button>
                  </div>
                  <div className="carousel-inner text-center mx-auto">
                    <div className="carousel-item active">
                      <div className="col">{jakarta[0]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[1]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[2]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[3]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[4]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[5]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[6]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[7]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[8]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{jakarta[9]}</div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselPhotography1"
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
                    data-bs-target="#carouselPhotography1"
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
              </div>
              <div className="surabaya photos">
                <div
                  id="carouselPhotography3"
                  className="carousel slide"
                  data-bs-ride="false"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography3"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography3"
                      data-bs-slide-to="1"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography3"
                      data-bs-slide-to="2"
                      aria-label="Photography"
                    ></button>
                  </div>
                  <div className="carousel-inner text-center mx-auto">
                    <div className="carousel-item active">
                      <div className="col">{surabaya[0]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{surabaya[1]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{surabaya[2]}</div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselPhotography3"
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
                    data-bs-target="#carouselPhotography3"
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
              </div>
              <div className="yogyakarta photos">
                <div
                  id="carouselPhotography4"
                  className="carousel slide"
                  data-bs-ride="false"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="1"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="2"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="3"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="4"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography4"
                      data-bs-slide-to="5"
                      aria-label="Photography"
                    ></button>
                  </div>
                  <div className="carousel-inner text-center mx-auto">
                    <div className="carousel-item active">
                      <div className="col">{yogyakarta[0]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{yogyakarta[1]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{yogyakarta[2]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{yogyakarta[3]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{yogyakarta[4]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{yogyakarta[5]}</div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselPhotography4"
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
                    data-bs-target="#carouselPhotography4"
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
              </div>
              <div className="malang photos">
                <div
                  id="carouselPhotography2"
                  className="carousel slide"
                  data-bs-ride="false"
                  data-bs-interval="false"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="1"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="2"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="3"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="4"
                      aria-label="Photography"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselPhotography2"
                      data-bs-slide-to="5"
                      aria-label="Photography"
                    ></button>
                  </div>
                  <div className="carousel-inner text-center mx-auto">
                    <div className="carousel-item active">
                      <div className="col">{malang[0]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{malang[1]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{malang[2]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{malang[3]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{malang[4]}</div>
                    </div>
                    <div className="carousel-item">
                      <div className="col">{malang[5]}</div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselPhotography2"
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
                    data-bs-target="#carouselPhotography2"
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
