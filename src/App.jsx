import Navbar from "./components/navbar/navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";

//data
import college from "./data/college";

//pages
import HomePage from "./components/homepage/homepage";
import BCA from "./components/BCA/bca";
import BscCsit from "./components/BSCcsIT/bsccsit";
import BALLB from "./components/BALLA/ballab";
import Alumni from "./components/Alumni/alumni";
import AboutUs from "./components/aboutus/aboutus";
import Location from "./components/Location/location";
import Contact from "./components/contact/contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage detail={college} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<h1>Courses</h1>} />
          <Route path="/courses/BCA" element={<BCA />} />
          <Route path="/courses/BSCcSIT" element={<BscCsit />} />
          <Route path="/courses/BALLB" element={<BALLB />} />

          <Route path="/location" element={<Location />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
