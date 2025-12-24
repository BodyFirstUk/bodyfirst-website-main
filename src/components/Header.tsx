import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteContent } from '../data/content';
import { servicesData } from '../data/servicesData';
import treatmentCategories from '../data/whatWeTreatData';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'What We Treat', path: '/what-we-treat' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Pricing & Insurance', path: '/prices' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-teal-900 shadow-lg py-3"
    >
      <nav className="container">
        <div className="flex items-center justify-between py-2">
          {/* Logo (Left) */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src="/images/logo.jpg"
              alt={siteContent.company.name}
              className="w-auto object-contain bg-white p-1 rounded-lg h-16 lg:h-20"
            />
          </Link>

          {/* Desktop Navigation (Center) */}
          <div className="hidden lg:flex items-center justify-center space-x-1">
            {/* What We Treat */}
            <div className="relative group">
              <Link
                to="/what-we-treat"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/what-we-treat')
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-teal-50 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span>What We Treat</span>
                <span className="text-xs opacity-70">▾</span>
              </Link>

              {/* Dropdown */}
              <div
                className="
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200 transform origin-top-left
                  absolute left-0 top-full mt-2 w-80
                  bg-white rounded-2xl shadow-xl border border-teal-100
                  py-2 z-50 text-left overflow-hidden
                "
              >
                <div className="px-5 py-3 bg-teal-50/50 border-b border-teal-100">
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    Conditions We Treat
                  </span>
                </div>
                <div className="py-2 flex flex-col">
                  {treatmentCategories.slice(0, 8).map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/what-we-treat/${cat.slug}`}
                      className="px-5 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {cat.title}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      to="/what-we-treat"
                      className="block px-5 py-3 text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors"
                    >
                      View all conditions →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="relative group">
              <Link
                to="/services"
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/services')
                  ? 'bg-white/20 text-white shadow-sm'
                  : 'text-teal-50 hover:bg-white/10 hover:text-white'
                  }`}
              >
                <span>Services</span>
                <span className="text-xs opacity-70">▾</span>
              </Link>

              {/* Dropdown */}
              <div
                className="
                  invisible opacity-0 group-hover:visible group-hover:opacity-100
                  transition-all duration-200 transform origin-top-left
                  absolute left-0 top-full mt-2 w-72
                  bg-white rounded-2xl shadow-xl border border-teal-100
                  py-2 z-50 text-left overflow-hidden
                "
              >
                <div className="px-5 py-3 bg-teal-50/50 border-b border-teal-100">
                  <span className="text-xs font-bold text-teal-800 uppercase tracking-wider">
                    Our Services
                  </span>
                </div>
                <div className="py-2 flex flex-col">
                  {servicesData.slice(0, 8).map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="px-5 py-2.5 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      to="/services"
                      className="block px-5 py-3 text-xs font-bold text-teal-700 hover:bg-teal-50 transition-colors"
                    >
                      View all services →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <Link
              to="/about"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/about')
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-teal-50 hover:bg-white/10 hover:text-white'
                }`}
            >
              About Us
            </Link>

            {/* Why Us */}
            <Link
              to="/why-us"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/why-us')
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-teal-50 hover:bg-white/10 hover:text-white'
                }`}
            >
              Why Us
            </Link>

            {/* Prices */}
            <Link
              to="/prices"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/prices')
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-teal-50 hover:bg-white/10 hover:text-white'
                }`}
            >
              Pricing & Insurance
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/contact')
                ? 'bg-white/20 text-white shadow-sm'
                : 'text-teal-50 hover:bg-white/10 hover:text-white'
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Section: Find Us + Book Now + Mobile Toggle */}
          <div className="flex items-center space-x-3 lg:space-x-6">
            <Link to="/contact#map" className="hidden xl:flex items-center text-teal-100 hover:text-white uppercase text-xs font-bold tracking-wider transition-colors">
              <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
              Find Us
            </Link>

            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-white hover:bg-teal-50 text-teal-900 text-sm font-bold shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Book Now
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="container lg:hidden mt-4 pb-6 space-y-2 border-t border-teal-800 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${isActive(item.path)
                  ? 'bg-white/15 text-white'
                  : 'text-teal-100 hover:bg-white/5 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
            ))}

            <a
              href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center mt-4 w-full text-center bg-white hover:bg-teal-50 text-teal-900 font-bold text-base px-6 py-3.5 rounded-xl shadow-lg transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Book Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
