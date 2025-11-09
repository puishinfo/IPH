import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Sacred Sites', href: '/sacred-sites' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ];

  const isHome = location.pathname === '/';

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 text-gray-900 shadow-lg' : isHome ? 'bg-transparent text-white' : 'bg-brand-blue/95 text-white backdrop-blur-md'}`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
              <div className={`p-4 rounded-full transition-colors duration-300 bg-white/90`}>
              <img src="/pub/IPH-Logo.png" alt="Inner Peace Holidays Private Limited Logo" className="h-16 w-auto" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Inner Peace Holidays Private Limited
              </h1>
              <p className={`text-sm transition-colors duration-300 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                Buddhist Pilgrimage Tours
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`font-medium transition-colors duration-300 hover:text-brand-yellow ${location.pathname === item.href ? (isScrolled ? 'text-brand-red-2' : 'text-brand-red-2') : isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden py-4 ${isScrolled ? 'bg-white/95 border-t border-gray-200 text-gray-900' : isHome ? 'bg-transparent' : 'bg-brand-blue border-t border-brand-red-2 text-white'}`}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-2 font-medium ${location.pathname === item.href ? (isScrolled ? 'text-amber-500' : 'text-amber-500') : isScrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white hover:text-amber-500'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;