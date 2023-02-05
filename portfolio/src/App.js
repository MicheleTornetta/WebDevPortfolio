import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/pages/About';
import PortolioPage from './components/pages/Portfolio';
import ContactPage from './components/pages/Contact';
import ResumePage from './components/pages/Resume';

import { HashRouter, Route, Routes } from "react-router-dom";

// In our main App component, we are rendering only single instances of Header, Footer and Navbar
function App() {
  return (

    <div>
      <HashRouter>
        <Header />
        <Navbar />
        {/* This router controls which page is displayed */}
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortolioPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
