import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Signin from "./components/auth/signin";
import Pricing from "./components/pricing/pricing"
import About from "./components/about/about"
import Discover from "./components/discover/discover"
import Details from "./components/trending/details/details"
import Calenders from "./components/trending/calenders"


function Contact() {
  return <h1 className="text-3xl font-bold underline">Contact Page</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/details" element={<Details />} />
        <Route path="/calender" element={<Calenders />} />
      </Routes>
    </Router>
  );
}
