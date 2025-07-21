import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo.svg';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    {
      name: 'Dla Dzieci',
      href: '/book-classes'
    },
    { name: 'Lekcje', href: '/vocal-lessons' },
    { name: 'Dla Przedszkoli', href: '/preschool-programs' },
    { name: 'Śluby', href: '/wedding-services' },
    { name: 'O Mnie', href: '/about' },
    { name: 'Kontakt', href: '/contact' }
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-card' : 'bg-transparent'
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-center items-center h-16 lg:h-20">
            <div className="hidden lg:flex items-center gap-x-4 px-2">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center pr-6 lg:pr-10">
                <Link to="/" className="flex items-center focus:outline-none focus:border-none">
                  <img src={logo} alt="Logo" className="h-16 w-16 mr-4 object-contain" />
                  <span className="font-serif text-xl lg:text-2xl font-bold text-dark-brown transition-colors duration-300">
                    ŚpiewoLandia
                  </span>
                </Link>
              </div>
              {/* Menu Items */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center justify-center py-2 text-base font-medium transition-colors duration-300 rounded-lg text-dark-brown focus:outline-none focus:border-none`}
                  style={{ letterSpacing: '0.02em', minWidth: 140, textAlign: 'center' }}
                >
                  {item.name}
                </Link>
              ))}
              {/* Button */}
              <Link 
                to="/book-classes"
                className="bg-sunset hover:bg-golden text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-md text-base tracking-wide flex items-center justify-center focus:outline-none focus:border-none"
                style={{ minWidth: 120, letterSpacing: '0.02em', textAlign: 'center' }}
              >
                Zarezerwuj
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <a 
                href="tel:+48123456789" 
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled ? 'text-dark-brown hover:bg-cream' : 'text-white hover:bg-white/20'
                }`}
              >
                <Phone className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled ? 'text-dark-brown hover:bg-cream' : 'text-white hover:bg-white/20'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="bg-white h-full overflow-y-auto pt-20 pb-6">
          <div className="px-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name} className="border-b border-cream pb-4">
                <Link
                  to={item.href}
                  className={`block text-lg font-medium hover:text-golden transition-colors py-2 ${
                    isActivePage(item.href) ? 'text-golden font-semibold' : 'text-dark-brown'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            
            <div className="pt-6">
              <Link 
                to="/book-classes"
                className="block w-full bg-sunset hover:bg-golden text-white py-3 rounded-full font-medium transition-all duration-300 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zarezerwuj Zajęcia
              </Link>
              <a 
                href="tel:+48123456789"
                className="flex items-center justify-center w-full mt-4 p-3 border-2 border-golden text-golden hover:bg-golden hover:text-white rounded-full font-medium transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                +48 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;