import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu, X, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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
      name: 'Zajęcia dla Dzieci',
      href: '/book-classes',
      dropdown: [
        { name: 'Warszawa Centrum', href: '/book-classes' },
        { name: 'Kraków', href: '/book-classes' },
        { name: 'Gdańsk', href: '/book-classes' },
        { name: 'Harmonogram', href: '/book-classes' },
        { name: 'Cennik', href: '/book-classes' }
      ]
    },
    { name: 'Lekcje Wokalne', href: '/vocal-lessons' },
    { name: 'Programy dla Przedszkoli', href: '/preschool-programs' },
    { name: 'Oprawa Ślubu', href: '/wedding-services' },
    { name: 'O Nas', href: '/about' },
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
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="flex items-center">
                  <Music className={`h-8 w-8 mr-2 transition-colors duration-300 ${
                    isScrolled ? 'text-golden' : 'text-white'
                  }`} />
                  <span className={`font-serif text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-dark-brown' : 'text-white'
                  }`}>
                    ŚpiewoLandia
                  </span>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div 
                  key={item.name} 
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    to={item.href}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-golden ${
                      isScrolled ? 'text-dark-brown' : 'text-white'
                    } ${
                      isActivePage(item.href) ? 'text-golden font-semibold' : ''
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className="ml-1 h-4 w-4" />
                    )}
                  </Link>
                  
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-card-hover py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-dark-brown hover:bg-cream hover:text-golden transition-colors duration-200"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link 
                to="/book-classes"
                className="bg-sunset hover:bg-golden text-white px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 inline-block"
              >
                Zarezerwuj Zajęcia
              </Link>
            </nav>

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
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block text-sm text-chocolate hover:text-golden transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
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