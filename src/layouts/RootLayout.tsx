import { Outlet, Link } from 'react-router-dom';

/**
 * Optional: Root Layout Component
 * 
 * This is an example layout component you can use to provide
 * consistent navigation and footer across all pages.
 * 
 * To use it, wrap your routes with this layout in your router config.
 */

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Physio Clinic
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1 sm:space-x-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
              <Link
                to="/book"
                className="ml-2 sm:ml-4 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Book Now
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Physio Clinic</h3>
              <p className="text-sm leading-relaxed">
                Your trusted partner in physiotherapy and rehabilitation. We provide evidence-based treatments to help you achieve optimal health.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/book" className="hover:text-white transition-colors">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-sm">
                <li>📍 123 Health Street, City</li>
                <li>📞 (555) 123-4567</li>
                <li>✉️ info@physioclinic.com</li>
                <li className="pt-2">
                  <span className="text-white font-semibold">Hours:</span>
                  <br />
                  Mon-Fri: 8am-7pm
                  <br />
                  Sat: 9am-5pm
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Physio Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper component for nav links
const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </Link>
  );
};

export default RootLayout;
