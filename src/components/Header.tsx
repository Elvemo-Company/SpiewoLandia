import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Music } from 'lucide-react';
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

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
          isScrolled ? 'bg-white shadow-card' : 'bg-white/95 backdrop-blur-md'
        } ${className}`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
          <div className="flex justify-center items-center h-16 lg:h-20">
            <div className="hidden lg:flex items-center gap-x-4 px-2">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center pr-6 lg:pr-10">
                <Link to="/" className="flex items-center focus:outline-none focus:border-none">
                  <img src={logo} alt="ŚpiewoLandia Logo" className="h-12 w-12 mr-3 object-contain" />
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
            <div className="lg:hidden flex items-center justify-between w-full px-4">
              {/* Logo on mobile */}
              <Link to="/" className="flex items-center">
                <img src={logo} alt="ŚpiewoLandia Logo" className="h-8 w-8 mr-3 object-contain" />
                <span className="font-serif text-lg font-bold text-dark-brown">
                  ŚpiewoLandia
                </span>
              </Link>
              
              {/* Hamburger button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-3 rounded-lg bg-cream hover:bg-golden/20 text-dark-brown transition-all duration-300"
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
      <div className={`lg:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        {/* Background overlay */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-cream">
            <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
              <img src={logo} alt="ŚpiewoLandia Logo" className="h-6 w-6 mr-3 object-contain" />
              <span className="font-serif text-lg font-bold text-dark-brown">
                ŚpiewoLandia
              </span>
            </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-dark-brown hover:bg-cream transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-6">
              <nav className="px-6 space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 hover:bg-golden/10 hover:text-golden ${
                      isActivePage(item.href) 
                        ? 'text-golden bg-golden/10 font-semibold' 
                        : 'text-dark-brown'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            
            {/* Actions */}
            <div className="p-6 border-t border-cream space-y-4">
              <Link 
                to="/book-classes"
                className="block w-full bg-golden hover:bg-sunset text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 text-center shadow-md hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Zarezerwuj Zajęcia
              </Link>
              <a 
                href="tel:+48123456789"
                className="flex items-center justify-center w-full py-3 px-6 border-2 border-golden text-golden hover:bg-golden hover:text-white rounded-xl font-medium transition-all duration-300"
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