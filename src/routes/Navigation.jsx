import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  PageNotFound,
  Home,
  CompanyList,
  JobVacancy,
  Artax,
  BankMega,
  BMWAstra,
  CiputraGroup,
  HotelCiputraWorldSurabaya,
  HSBC,
  IndoprimaGroup,
  MapanGroup,
  PTAsiaPramulia,
  PTIndoprimaGemilang,
  PTLautanNaturalKrimerindo,
  PTSiantarTop,
  PTSuparma,
  PTSuperiorPrimaSukses,
  PTSurabayaMekabox,
  PTSuryaTimurSaktiJatim,
  PTTransporindoAgungSejahtera,
  RapiGroup,
  SideroomStudio,
  SPSCorporate,
  Tancorp,
  Tanobel,
  WinstonCitraland,
  CareerExpo,
  Workshop,
  Talkshow,
  Register,
  About,
  Gallery,
  Blog,
  Article1,
  Article2,
  Article3,
  Article4,
  NavLinkScroll,
} from "../script/export";

export default function Navigation() {
  return (
    <Router>
      <NavLinkScroll />

      <Routes>
        {/* 404 Not Found */}
        <Route path="*" element={<PageNotFound />} />
        {/* Home */}
        <Route path="/" element={<Home />} />
        {/* Vacancy */}
        <Route path="/company-list" element={<CompanyList />} />
        <Route path="/job-vacancy" element={<JobVacancy />} />
        <Route path="/company-list/artax" element={<Artax />} />
        <Route path="/company-list/bank-mega" element={<BankMega />} />
        <Route path="/company-list/bmw-astra" element={<BMWAstra />} />
        <Route path="/company-list/ciputra-group" element={<CiputraGroup />} />
        <Route
          path="/company-list/hotel-ciputra-world-surabaya"
          element={<HotelCiputraWorldSurabaya />}
        />
        <Route path="/company-list/hsbc" element={<HSBC />} />
        <Route
          path="/company-list/indoprima-group"
          element={<IndoprimaGroup />}
        />
        <Route path="/company-list/mapan-group" element={<MapanGroup />} />
        <Route
          path="/company-list/pt-asia-pramulia"
          element={<PTAsiaPramulia />}
        />
        <Route
          path="/company-list/pt-indoprima-gemilang"
          element={<PTIndoprimaGemilang />}
        />
        <Route
          path="/company-list/pt-lautan-natural-krimerindo"
          element={<PTLautanNaturalKrimerindo />}
        />
        <Route path="/company-list/pt-siantar-top" element={<PTSiantarTop />} />
        <Route path="/company-list/pt-suparma" element={<PTSuparma />} />
        <Route
          path="/company-list/pt-superior-prima-sukses"
          element={<PTSuperiorPrimaSukses />}
        />
        <Route
          path="/company-list/pt-surabaya-mekabox"
          element={<PTSurabayaMekabox />}
        />
        <Route
          path="/company-list/pt-surya-timur-sakti-jatim"
          element={<PTSuryaTimurSaktiJatim />}
        />
        <Route
          path="/company-list/pt-transporindo-agung-sejahtera"
          element={<PTTransporindoAgungSejahtera />}
        />
        <Route path="/company-list/rapi-group" element={<RapiGroup />} />
        <Route
          path="/company-list/sideroom-studio"
          element={<SideroomStudio />}
        />
        <Route path="/company-list/sps-corporate" element={<SPSCorporate />} />
        <Route path="/company-list/tancorp" element={<Tancorp />} />
        <Route path="/company-list/tanobel" element={<Tanobel />} />
        <Route
          path="/company-list/winston-citraland"
          element={<WinstonCitraland />}
        />
        {/* Events */}
        <Route path="/career-expo" element={<CareerExpo />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/register" element={<Register />} />
        <Route path="/talkshow" element={<Talkshow />} />
        {/* About Us */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/5-kesalahan-yang-harus-dihindari-dalam-pembuatan-cv"
          element={<Article1 />}
        />
        <Route
          path="/blog/hard-skill-vs-soft-skill-mana-yang-lebih-penting"
          element={<Article2 />}
        />
        <Route
          path="/blog/fresh-graduate-siapkan-dulu-hal-hal-ini-sebelum-mencari-kerja"
          element={<Article3 />}
        />
        <Route
          path="/blog/5-tips-untuk-mengembangkan-karir-dengan-maksimal"
          element={<Article4 />}
        />
      </Routes>
    </Router>
  );
}
