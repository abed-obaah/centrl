import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Signin from "./components/auth/signin";
import Pricing from "./components/pricing/pricing"

function Home() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

function About() {
  return <h1 className="text-3xl font-bold underline">About Page</h1>;
}

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
      </Routes>
    </Router>
  );
}
