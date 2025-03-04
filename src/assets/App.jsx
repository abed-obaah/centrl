import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Signin from "./components/auth/signin";
import Pricing from "./components/pricing/pricing"
import About from "./components/about/about"
import Discover from "./components/discover/discover"
import Details from "./components/trending/details/details"
import DetailsPage from "./components/dashboard/details"
import Calenders from "./components/trending/calenders";
import Dashboard from "./components/dashboard/index";
import Admin from "./components/Admin/index";
import CategoryPage from "./components/Admin/CategoryPage";
import Block from "./components/dashboard/block";



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
        <Route path="/details-page" element={<DetailsPage />} />
        <Route path="/calender" element={<Calenders />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/block" element={<Block />} />
        <Route path="/:admin" element={<Admin/>} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
