import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-6">
                <Music className="h-8 w-8 text-golden mr-3" />
                <span className="font-serif text-2xl font-bold">ŚpiewoLandia</span>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Odkrywamy radość muzyki od 10 lat. Profesjonalne zajęcia dla dzieci i dorosłych 
                w przyjaznej, inspirującej atmosferze.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h3 className="font-serif text-xl font-bold mb-6 text-golden">Nasze Usługi</h3>
              <ul className="space-y-3">
                <li><Link to="/book-classes" className="text-white/80 hover:text-golden transition-colors duration-300">Zajęcia dla Dzieci</Link></li>
                <li><Link to="/vocal-lessons" className="text-white/80 hover:text-golden transition-colors duration-300">Lekcje Wokalne</Link></li>
                <li><Link to="/preschool-programs" className="text-white/80 hover:text-golden transition-colors duration-300">Programy dla Przedszkoli</Link></li>
                <li><Link to="/wedding-services" className="text-white/80 hover:text-golden transition-colors duration-300">Oprawa Ślubu</Link></li>
                <li><Link to="/about" className="text-white/80 hover:text-golden transition-colors duration-300">O Nas</Link></li>
                <li><Link to="/contact" className="text-white/80 hover:text-golden transition-colors duration-300">Kontakt</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="font-serif text-xl font-bold mb-6 text-golden">Kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <a href="tel:+48123456789" className="text-white/80 hover:text-golden transition-colors duration-300">
                      +48 123 456 789
                    </a>
                    <p className="text-sm text-white/60">Pon-Pt: 9:00-20:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                  <a href="mailto:info@spiewolandia.pl" className="text-white/80 hover:text-golden transition-colors duration-300">
                    info@spiewolandia.pl
                  </a>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white/80">ul. Muzyczna 12</p>
                    <p className="text-white/80">00-123 Warszawa</p>
                    <div className="mt-2 bg-white/10 rounded-lg p-2 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                      <p className="text-sm text-white/80">Zobacz na mapie →</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-span-1">
              <h3 className="font-serif text-xl font-bold mb-6 text-golden">Newsletter</h3>
              <p className="text-white/80 mb-4">
                Bądź na bieżąco z naszymi zajęciami i otrzymuj ekskluzywne oferty!
              </p>
              <form className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Twój email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-golden hover:bg-sunset text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Zapisz się
                </button>
              </form>
              <p className="text-xs text-white/60 mt-3">
                * Otrzymasz 10% zniżki na pierwszą lekcję!
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-white/60 text-sm mb-4 md:mb-0">
                © 2024 ŚpiewoLandia. Wszelkie prawa zastrzeżone.
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
                <Link to="/contact" className="text-white/60 hover:text-golden transition-colors duration-300">
                  Polityka Prywatności
                </Link>
                <Link to="/contact" className="text-white/60 hover:text-golden transition-colors duration-300">
                  Regulamin
                </Link>
                <Link to="/contact" className="text-white/60 hover:text-golden transition-colors duration-300">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-golden hover:bg-sunset text-white p-3 rounded-full shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-110 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </>
  );
};

export default Footer;