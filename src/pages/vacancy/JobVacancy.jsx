import { Tooltip } from "bootstrap";
import React, { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { job } from "../../data/vacancy/JobVacancy";
import $ from "jquery";

export default function JobVacancy() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Job Vacancy";

    // * Enable Bootstrap's Tooltip Everywhere
    var tooltipElList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipElList.map(function (tooltipEl) {
      return new Tooltip(tooltipEl);
    });

    // * Filter Tipe Pekerjaan
    $(function () {
      $("select")
        .on("change", function () {
          $(this)
            .find("option:selected")
            .each(function () {
              var optionValue = $(this).val();
              if (optionValue) {
                $(".tipePekerjaan")
                  .not("." + optionValue)
                  .hide();
                $("." + optionValue).show();
              } else {
                $(".tipePekerjaan").hide();
              }
            });
        })
        .change();
    });
  }, []);

  const jobVacancy = job.map((job) => (
    <div className="col">
      <a href={job.companyURL} className="company-list">
        <div className="card text-center px-0 py-2 h-100" id={job.tipe}>
          <img
            src={job.image}
            alt={job.name}
            loading="lazy"
            className="card-img-top w-75 h-75 mx-auto py-2"
          />
          <div className="card-body py-3 d-grid justify-content-center align-items-center">
            <h4>{job.jabatan}</h4>
            <strong className="text-truncate text-black my-2">
              {job.divisi}
            </strong>
            <span className="text-muted text-truncate">{job.name}</span>
          </div>
          <div className="card-footer py-2 border-0 bg-transparent d-grid gap-2">
            <button className="btn btn-primary w-100">
              <i className="bi bi-briefcase"></i>&ensp;
              <strong>Lihat Lowongan</strong>
            </button>
          </div>
        </div>
      </a>
    </div>
  ));

  const lowonganFullTime = jobVacancy.filter((_item, index) =>
    [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 16, 17, 18, 20, 21, 22, 23, 24,
      25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
      43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
      61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
      79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 98,
      99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115,
      116, 117, 118, 119, 120, 121, 122, 123, 125, 126, 127, 128, 129, 130, 132,
      133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147,
      148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 163, 164, 165, 166, 167,
      168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182,
      183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197,
      198,
    ].includes(index)
  );
  const lowonganPartTime = jobVacancy.filter((_item, index) =>
    [199].includes(index)
  );
  const lowonganFreelance = jobVacancy.filter((_item, index) =>
    [83, 200].includes(index)
  );
  const lowonganInternship = jobVacancy.filter((_item, index) =>
    [13, 14, 15, 19, 97, 109, 110, 124, 131, 158, 159, 160, 161, 162].includes(
      index
    )
  );

  return (
    <div className="job-vacancy">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Job Vacancy</h2>
          <br />

          <div className="d-grid d-md-none gap-4">
            <div>
              <select className="form-select">
                <option value="fullTimeOption">Full Time</option>
                <option value="partTimeOption">Part Time</option>
                <option value="freelanceOption">Freelance</option>
                <option value="internshipOption">Internship</option>
              </select>
            </div>
            <div>
              <div className="fullTimeOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                <div className="col">
                  <div
                    className="alert alert-info d-flex align-items-center mb-0"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan
                      pekerjaan untuk jam kerja penuh (8 jam).
                    </div>
                  </div>
                </div>
                {lowonganFullTime}
              </div>
              <div className="partTimeOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                <div className="col">
                  <div
                    className="alert alert-info d-flex align-items-center mb-0"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan
                      pekerjaan untuk jam kerja yang tidak menentu dan melakukan
                      perhitungan gaji sesuai dengan jam kerja karyawan.
                    </div>
                  </div>
                </div>
                {lowonganPartTime}
              </div>
              <div className="freelanceOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                <div className="col">
                  <div
                    className="alert alert-info d-flex align-items-center mb-0"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan bagi
                      karyawan lepas yang tidak terikat dengan kontrak jangka
                      panjang.
                    </div>
                  </div>
                </div>
                {lowonganFreelance}
              </div>
              <div className="internshipOption tipePekerjaan row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                <div className="col">
                  <div
                    className="alert alert-info d-flex align-items-center mb-0"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan magang
                      kepada mahasiswa/i untuk melakukan pelatihan dengan terjun
                      langsung di perusahaan.
                    </div>
                  </div>
                </div>
                {lowonganInternship}
              </div>
            </div>
          </div>

          <div className="d-none d-md-block">
            <ul
              className="nav nav-pills nav-fill gap-2 p-1 rounded-3 mb-4"
              id="pillNav"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active rounded-3"
                  id="pills-fulltime-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-fulltime"
                  type="button"
                  role="tab"
                  aria-controls="pills-fulltime"
                  aria-selected="true"
                >
                  Full Time
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-parttime-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-parttime"
                  type="button"
                  role="tab"
                  aria-controls="pills-parttime"
                  aria-selected="false"
                >
                  Part Time
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-freelance-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-freelance"
                  type="button"
                  role="tab"
                  aria-controls="pills-freelance"
                  aria-selected="false"
                >
                  Freelance
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link rounded-3"
                  id="pills-internship-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-internship"
                  type="button"
                  role="tab"
                  aria-controls="pills-internship"
                  aria-selected="false"
                >
                  Internship
                </button>
              </li>
            </ul>

            <div className="col">
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-fulltime"
                  role="tabpanel"
                  aria-labelledby="pills-fulltime-tab"
                >
                  <div
                    className="alert alert-info d-flex align-items-center"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan
                      pekerjaan untuk jam kerja penuh (8 jam).
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {lowonganFullTime}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-parttime"
                  role="tabpanel"
                  aria-labelledby="pills-parttime-tab"
                >
                  <div
                    className="alert alert-info d-flex align-items-center"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan
                      pekerjaan untuk jam kerja yang tidak menentu dan melakukan
                      perhitungan gaji sesuai dengan jam kerja karyawan.
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {lowonganPartTime}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-freelance"
                  role="tabpanel"
                  aria-labelledby="pills-freelance-tab"
                >
                  <div
                    className="alert alert-info d-flex align-items-center"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan bagi
                      karyawan lepas yang tidak terikat dengan kontrak jangka
                      panjang.
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {lowonganFreelance}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-internship"
                  role="tabpanel"
                  aria-labelledby="pills-internship-tab"
                >
                  <div
                    className="alert alert-info d-flex align-items-center"
                    role="alert"
                  >
                    <i className="bi bi-info-circle"></i>&ensp;
                    <div>
                      Mengindikasikan bahwa perusahaan membuka lowongan magang
                      kepada mahasiswa/i untuk melakukan pelatihan dengan terjun
                      langsung di perusahaan.
                    </div>
                  </div>
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 g-lg-4">
                    {lowonganInternship}
                  </div>
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
