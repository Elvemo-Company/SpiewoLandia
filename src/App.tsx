import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import CookiesBanner from './components/CookiesBanner';
import HomePage from './pages/HomePage';
import VocalLessons from './pages/VocalLessons';
import PreschoolPrograms from './pages/PreschoolPrograms';
import WeddingServices from './pages/WeddingServices';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import BookClasses from './pages/BookClasses';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-cream text-dark-brown">
        <Header />
        <main className="pt-16 lg:pt-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/vocal-lessons" element={<VocalLessons />} />
            <Route path="/preschool-programs" element={<PreschoolPrograms />} />
            <Route path="/wedding-services" element={<WeddingServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-classes" element={<BookClasses />} />
          </Routes>
        </main>
        <Footer />
        <CookiesBanner />
      </div>
    </Router>
  );
}

export default App;