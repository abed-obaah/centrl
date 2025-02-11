import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './components/auth/signin';
import Pricing from './components/pricing/pricing';
import About from './components/about/about';
import Discover from './components/discover/discover';
import Details from './components/trending/details/details';
import Calenders from './components/trending/calenders';
import Dashboard from './components/dashboard/index';
import Admin from './components/Admin/index';
import CategoryPage from './components/Admin/CategoryPage';
import Home from './components/Home';

function Contact() {
  return <h1 className="text-3xl font-bold underline">Contact Page</h1>;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/details" element={<Details />} />
        <Route path="/calender" element={<Calenders />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/:admin" element={<Admin />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}
