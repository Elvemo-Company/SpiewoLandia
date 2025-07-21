import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
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
        {/* Hero background for HomePage overlay */}
        <Routes>
          <Route path="/" element={
            <>
              <div className="relative">
                <Header className="fixed top-0 left-0 w-full z-50" />
                <HomePage />
                <MobileNav />
              </div>
            </>
          } />
          {/* Other routes with normal header placement */}
          <Route path="/about" element={<><Header /><MobileNav /><AboutUs /></>} />
          <Route path="/vocal-lessons" element={<><Header /><MobileNav /><VocalLessons /></>} />
          <Route path="/preschool-programs" element={<><Header /><MobileNav /><PreschoolPrograms /></>} />
          <Route path="/wedding-services" element={<><Header /><MobileNav /><WeddingServices /></>} />
          <Route path="/contact" element={<><Header /><MobileNav /><Contact /></>} />
          <Route path="/book-classes" element={<><Header /><MobileNav /><BookClasses /></>} />
        </Routes>
        <Footer />
        <CookiesBanner />
      </div>
    </Router>
  );
}

export default App;