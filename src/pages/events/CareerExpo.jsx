import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CareerExpo() {
  useEffect(() => {
    // * Tab Page Title
    document.title = "Career Expo";
  }, []);

  return (
    <div className="career-expo">
      <Header />

      <div className="container">
        <section className="my-5" data-aos="fade-up">
          <h2 className="text-center">Career Expo 3.0</h2>
          <br />
          <ul
            className="nav nav-pills nav-fill gap-2 p-1 rounded-3 mb-4"
            id="pillNav"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active rounded-3"
                id="pills-1-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-1"
                type="button"
                role="tab"
                aria-controls="pills-1"
                aria-selected="true"
              >
                Day 1
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-3"
                id="pills-2-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-2"
                type="button"
                role="tab"
                aria-controls="pills-2"
                aria-selected="false"
              >
                Day 2
              </button>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-1"
              role="tabpanel"
              aria-labelledby="pills-1-tab"
            >
              <table className="table table-responsive table-light table-striped table-hover">
                <thead>
                  <tr className="text-white">
                    <th scope="col" className="bg-dark">
                      Start
                    </th>
                    <th scope="col" className="bg-dark">
                      End
                    </th>
                    <th scope="col" className="bg-dark">
                      Durasi
                    </th>
                    <th scope="col" className="bg-dark">
                      Kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09.30</td>
                    <td>10:00</td>
                    <td>30'</td>
                    <td>Open Gate</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                    <td>10:10</td>
                    <td>10'</td>
                    <td>Opening</td>
                  </tr>
                  <tr>
                    <td>10:10</td>
                    <td>10:15</td>
                    <td>5'</td>
                    <td>Doa Pembuka</td>
                  </tr>
                  <tr>
                    <td>10:15</td>
                    <td>12:15</td>
                    <td>120'</td>
                    <td>Workshop "Reach Your Dream Company"</td>
                  </tr>
                  <tr>
                    <td>12:15</td>
                    <td>13:00</td>
                    <td>45'</td>
                    <td>ISHOMA</td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                    <td>13:05</td>
                    <td>5'</td>
                    <td>Opening Expo</td>
                  </tr>
                  <tr>
                    <td>13:05</td>
                    <td>13:10</td>
                    <td>5'</td>
                    <td>Kata Sambutan Ketua Acara</td>
                  </tr>
                  <tr>
                    <td>13:10</td>
                    <td>13:15</td>
                    <td>5'</td>
                    <td>
                      Kata Sambutan Koordinator Corporate Entrepreneurship
                    </td>
                  </tr>
                  <tr>
                    <td>13:15</td>
                    <td>13:20</td>
                    <td>5'</td>
                    <td>Kata Sambutan Mentri/Individu yang berkaitan</td>
                  </tr>
                  <tr>
                    <td>13:20</td>
                    <td>13:40</td>
                    <td>20'</td>
                    <td>
                      Talk Session 1 : "How to Strike an Opportunity on Dream
                      Company"
                    </td>
                  </tr>
                  <tr>
                    <td>13:40</td>
                    <td>14:50</td>
                    <td>70'</td>
                    <td>Company Session</td>
                  </tr>
                  <tr>
                    <td>14:50</td>
                    <td>15:20</td>
                    <td>30'</td>
                    <td>
                      Talk Session 2 : "CV ATS Friendly: Rahasia Bisa Dapat
                      Panggilan Kerja?"
                    </td>
                  </tr>
                  <tr>
                    <td>15:20</td>
                    <td>15:35</td>
                    <td>15'</td>
                    <td>BREAK</td>
                  </tr>
                  <tr>
                    <td>15:35</td>
                    <td>15:40</td>
                    <td>5'</td>
                    <td>MC Greetings Back</td>
                  </tr>
                  <tr>
                    <td>15:40</td>
                    <td>16:50</td>
                    <td>70'</td>
                    <td>Company Session</td>
                  </tr>
                  <tr>
                    <td>16:50</td>
                    <td>16:55</td>
                    <td>5'</td>
                    <td>Doa Penutup</td>
                  </tr>
                  <tr>
                    <td>16:55</td>
                    <td>17:00</td>
                    <td>5'</td>
                    <td>Closing</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="tab-pane fade"
              id="pills-2"
              role="tabpanel"
              aria-labelledby="pills-2-tab"
            >
              <table className="table table-responsive table-light table-striped table-hover">
                <thead>
                  <tr className="text-white">
                    <th scope="col" className="bg-dark">
                      Start
                    </th>
                    <th scope="col" className="bg-dark">
                      End
                    </th>
                    <th scope="col" className="bg-dark">
                      Durasi
                    </th>
                    <th scope="col" className="bg-dark">
                      Kegiatan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09.30</td>
                    <td>10:00</td>
                    <td>30'</td>
                    <td>Open Gate</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                    <td>10:10</td>
                    <td>10'</td>
                    <td>Opening</td>
                  </tr>
                  <tr>
                    <td>10:10</td>
                    <td>10:15</td>
                    <td>5'</td>
                    <td>Doa Pembuka</td>
                  </tr>
                  <tr>
                    <td>10:15</td>
                    <td>12:15</td>
                    <td>120'</td>
                    <td>Workshop "Step Up Your Career"</td>
                  </tr>
                  <tr>
                    <td>12:15</td>
                    <td>13:00</td>
                    <td>45'</td>
                    <td>ISHOMA</td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                    <td>13:05</td>
                    <td>5'</td>
                    <td>Opening Expo</td>
                  </tr>
                  <tr>
                    <td>13:05</td>
                    <td>13:10</td>
                    <td>5'</td>
                    <td>Kata Sambutan Ketua Acara</td>
                  </tr>
                  <tr>
                    <td>13:10</td>
                    <td>13:15</td>
                    <td>5'</td>
                    <td>
                      Kata Sambutan Koordinator Corporate Entrepreneurship
                    </td>
                  </tr>
                  <tr>
                    <td>13:15</td>
                    <td>13:20</td>
                    <td>5'</td>
                    <td>Kata Sambutan Mentri/Individu yang berkaitan</td>
                  </tr>
                  <tr>
                    <td>13:20</td>
                    <td>13:40</td>
                    <td>20'</td>
                    <td>
                      Talk Session 3 : "How to Align Your Major for Internship
                      and Find Your Career"
                    </td>
                  </tr>
                  <tr>
                    <td>13:40</td>
                    <td>14:50</td>
                    <td>70'</td>
                    <td>Company Session</td>
                  </tr>
                  <tr>
                    <td>14:50</td>
                    <td>15:20</td>
                    <td>30'</td>
                    <td>
                      Talk Session 4 : "Having an Analytical Thinking Skill"
                    </td>
                  </tr>
                  <tr>
                    <td>15:20</td>
                    <td>15:35</td>
                    <td>15'</td>
                    <td>BREAK</td>
                  </tr>
                  <tr>
                    <td>15:35</td>
                    <td>15:40</td>
                    <td>5'</td>
                    <td>MC Greetings Back</td>
                  </tr>
                  <tr>
                    <td>15:40</td>
                    <td>16:50</td>
                    <td>70'</td>
                    <td>Company Session</td>
                  </tr>
                  <tr>
                    <td>16:50</td>
                    <td>16:55</td>
                    <td>5'</td>
                    <td>Doa Penutup</td>
                  </tr>
                  <tr>
                    <td>16:55</td>
                    <td>17:00</td>
                    <td>5'</td>
                    <td>Closing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <NavLink className="btn btn-primary" to="/register">
            <i className="bi bi-person-plus"></i>&ensp;
            <strong>Daftar Sekarang</strong>
          </NavLink>
        </section>
      </div>

      <Footer />
    </div>
  );
}
