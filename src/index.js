import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { PageNotFound, Home, CompanyList, JobVacancy, CareerExpo } from "./script/export";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      {/* 404 Not Found */}
      <Route path="*" element={<PageNotFound />} />
      {/* Home */}
      <Route path="/" element={<Home />} />
      {/* Vacancy */}
      <Route path="/company-list" element={<CompanyList />} />
      <Route path="/job-vacancy" element={<JobVacancy />} />
      {/* Events */}
      <Route path="/career-expo" element={<CareerExpo />} />
      <Route path="/webinar" element={<JobVacancy />} />
      <Route path="/register" element={<JobVacancy />} />
      {/* Collaborations */}
      <Route path="/sponsors" element={<CompanyList />} />
      <Route path="/media-partners" element={<JobVacancy />} />
      {/* About Us */}
      <Route path="/about" element={<JobVacancy />} />
      <Route path="/gallery" element={<JobVacancy />} />
      <Route path="/blog" element={<JobVacancy />} />
    </Routes>
  </Router>
);

// * Web Preload
const preload = document.querySelector('#preload');

window.addEventListener('load', function () {
  preload.classList.add('fade-out');
});

// * Initialize Animate On Scroll (Scrolling Effect)
AOS.init();
AOS.refreshHard();

// * Measuring performance
reportWebVitals();