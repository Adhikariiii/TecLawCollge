import { BrowserRouter, Routes, Route } from "react-router-dom";

// data
import college from "./data/college";

// pages
import HomePage from "./components/homepage/homepage";
import BCA from "./components/BCA/bca";
import BscCsit from "./components/BSCcsIT/bsccsit";
import BALLB from "./components/BALLA/ballab";
import Alumni from "./components/Alumni/alumni";
import AboutUs from "./components/aboutus/aboutus";
import Location from "./components/Location/location";
import Contact from "./components/contact/contact";
import Courses from "./components/courses/courses";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage detail={college} />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/courses" element={<Courses />} />
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
