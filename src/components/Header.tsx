import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [circuitOpen, setCircuitOpen] = useState(false);
  const [mobileCircuitOpen, setMobileCircuitOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCircuitOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setMobileCircuitOpen(false);
  }, [location.pathname]);

  const topNavItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Software Services', href: '/software-services' },
    { label: 'Testimonials', href: '/testimonials' },
  ];

  const isHome = location.pathname === '/';
  const isCircuitActive =
    location.pathname === '/sacred-sites' || location.pathname === '/services';

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 text-gray-900 shadow-lg' : isHome ? 'bg-transparent text-white' : 'bg-brand-blue/95 text-white backdrop-blur-md'}`;

  const linkClass = (href: string) =>
    `text-base font-semibold whitespace-nowrap transition-colors duration-300 hover:text-brand-yellow ${
      location.pathname === href
        ? 'text-brand-red-2'
        : isScrolled
        ? 'text-gray-700'
        : 'text-white'
    }`;

  return (
    <header className={headerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">

          {/* Logo + Name */}
          <Link to="/" className="flex items-center space-x-3 min-w-0">
            <div className="p-2.5 rounded-full bg-white/90 flex-shrink-0">
              <img src={`${import.meta.env.BASE_URL}pub/IPH-Logo.png`} alt="Inner Peace Holidays Private Limited Logo" className="h-14 w-auto" />
            </div>
            <div className="min-w-0">
              <h1 className={`text-lg font-bold whitespace-nowrap leading-tight transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                Inner Peace Holidays Pvt. Ltd.
              </h1>
              <p className={`text-sm whitespace-nowrap transition-colors duration-300 ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>
                Tours &amp; Travels · Software Services
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center space-x-6">
            {topNavItems.map((item) => (
              <Link key={item.label} to={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}

            {/* Buddhist Circuit dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setCircuitOpen((o) => !o)}
                className={`inline-flex items-center gap-1 text-base font-semibold whitespace-nowrap transition-colors duration-300 hover:text-brand-yellow ${
                  isCircuitActive ? 'text-brand-red-2' : isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Buddhist Circuit
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${circuitOpen ? 'rotate-180' : ''}`} />
              </button>

              {circuitOpen && (
                <div className="absolute right-0 mt-2 w-52 rounded-lg bg-white shadow-xl ring-1 ring-slate-200 py-1 z-50">
                  <Link
                    to="/sacred-sites"
                    onClick={() => setCircuitOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 ${location.pathname === '/sacred-sites' ? 'text-amber-600 bg-amber-50' : ''}`}
                  >
                    Buddhist Circuit Destinations
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => setCircuitOpen(false)}
                    className={`block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-amber-50 hover:text-amber-700 ${location.pathname === '/services' ? 'text-amber-600 bg-amber-50' : ''}`}
                  >
                    Tour Packages
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={linkClass('/contact')}>
              Contact
            </Link>

            <Link
              to="/contact"
              className="rounded-md bg-amber-400 px-5 py-2.5 text-base font-semibold text-slate-900 transition hover:bg-amber-300 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`xl:hidden p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`xl:hidden py-4 ${isScrolled ? 'bg-white/95 border-t border-gray-200 text-gray-900' : 'bg-brand-blue/95 text-white backdrop-blur-md'}`}>
            {topNavItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`block py-2.5 text-base font-medium ${location.pathname === item.href ? 'text-amber-500' : isScrolled ? 'text-gray-700 hover:text-amber-500' : 'text-white hover:text-amber-500'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* Buddhist Circuit accordion */}
            <button
              onClick={() => setMobileCircuitOpen((o) => !o)}
              className={`flex w-full items-center justify-between py-2.5 text-base font-medium ${isCircuitActive ? 'text-amber-500' : isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              Buddhist Circuit
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileCircuitOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileCircuitOpen && (
              <div className={`ml-4 border-l-2 border-amber-400 pl-3 ${isScrolled ? 'text-gray-600' : 'text-white/90'}`}>
                <Link
                  to="/sacred-sites"
                  className="block py-2 text-sm hover:text-amber-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Buddhist Circuit Destinations
                </Link>
                <Link
                  to="/services"
                  className="block py-2 text-sm hover:text-amber-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tour Packages
                </Link>
              </div>
            )}

            <Link
              to="/contact"
              className="mt-3 inline-block rounded-md bg-amber-400 px-5 py-2.5 text-base font-semibold text-slate-900"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;