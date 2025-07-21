import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Music, Calendar, Heart, Phone } from 'lucide-react';

const MobileNav = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Music, label: 'Zajęcia', href: '/vocal-lessons' },
    { icon: Calendar, label: 'Rezerwuj', href: '/book-classes' },
    { icon: Heart, label: 'Śluby', href: '/wedding-services' },
    { icon: Phone, label: 'Kontakt', href: '/contact' }
  ];

  const isActivePage = (href: string) => {
    return location.pathname === href;
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={`flex flex-col items-center justify-center transition-colors duration-300 group ${
              isActivePage(item.href) ? 'text-golden' : 'text-chocolate hover:text-golden'
            }`}
          >
            <item.icon className="h-5 w-5 mb-1 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-xs font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;