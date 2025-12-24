import { Link } from 'react-router-dom';
import { siteContent } from '../data/content';
import AntigravityCanvas from './AntigravityCanvas';

const Footer = () => {
  const formatPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '');
    if (!digits) return raw;
    // UK number formatting +44 20 3818 1238 for 4420xxxxxxxx
    if (digits.startsWith('44')) {
      const rest = digits.slice(2);
      if (rest.length === 10) {
        return `+44 ${rest.slice(0, 2)} ${rest.slice(2, 6)} ${rest.slice(6)}`;
      }
      // fallback: group rest in 3s after country code
      return `+44 ${rest.replace(/(\d{3})(?=\d)/g, '$1 ').trim()}`;
    }
    // US style +1 (xxx) xxx-xxxx
    if (digits.length === 11 && digits.startsWith('1')) {
      return `+1 ${digits.slice(1, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
    }
    // Generic: show plus + and group by 3
    return `+${digits.replace(/(\d{3})(?=\d)/g, '$1 ').trim()}`;
  };

  const rawPhone = siteContent.company.phone || '';
  const phoneDigits = rawPhone.replace(/\D/g, '');
  const formattedPhone = formatPhone(rawPhone);
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <AntigravityCanvas position="absolute" />
      {/* CTA Banner */}
      <div className="bg-primary-600">

      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{siteContent.company.name}</h3>
            <p className="text-gray-400 mb-4">{siteContent.company.tagline}</p>
            <div className="space-y-2 text-gray-400">
              <p>{siteContent.company.address.street}</p>
              <p>{siteContent.company.address.city}</p>
              <p>{siteContent.company.address.place}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/what-we-treat" className="text-gray-400 hover:text-white transition-colors">
                  What We Treat
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/prices" className="text-gray-400 hover:text-white transition-colors">
                  Pricing & Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href={`https://wa.me/${phoneDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center space-x-2"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.478A11.884 11.884 0 0012.03.002C5.49.002.48 5.01.48 11.55c0 2.03.53 4.01 1.54 5.77L.04 23.5l6.4-1.68a11.5 11.5 0 005.59 1.35h.01c6.54 0 11.56-5.01 11.56-11.54 0-3.09-1.2-5.99-3.14-8.06zM12.03 21.02c-1.8 0-3.54-.48-5.07-1.39l-.36-.22-3.8 1 1-3.7-.23-.38A8.35 8.35 0 013.67 11.55c0-4.6 3.73-8.33 8.36-8.33 2.24 0 4.35.87 5.93 2.45 1.58 1.58 2.45 3.7 2.45 5.93 0 4.63-3.73 8.32-8.38 8.32z" />
                    <path d="M17.57 14.17c-.29-.15-1.71-.84-1.98-.94-.27-.11-.47-.15-.67.15s-.77.94-.94 1.13c-.17.19-.34.21-.63.07-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.67-1.6-.92-2.19-.24-.57-.49-.49-.67-.5l-.57-.01c-.19 0-.5.07-.77.36s-1.01.99-1.01 2.42 1.04 2.8 1.18 3 .42.5.71.8.99 1.28 1.9 2.05c1.31 1.06 2.37 1.37 2.79 1.52.42.15.67.13.92-.08.24-.21 1-1.17 1.14-1.49.14-.31.14-.58.10-.64-.05-.06-.18-.10-.38-.24z" />
                  </svg>
                  <span>{formattedPhone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContent.company.email}`} className="hover:text-white transition-colors flex items-center space-x-2" aria-label="Email">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>{siteContent.company.email}</span>
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Opening Hours</h4>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>{siteContent.company.hours.weekday}</li>
                <li>{siteContent.company.hours.saturday}</li>
                <li>{siteContent.company.hours.sunday}</li>
              </ul>
            </div>
          </div>

          {/* Accreditations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accreditations</h3>
            <div className="space-y-3">
              {siteContent.accreditations.map((acc) => (
                <div key={acc.name} className="text-gray-400 text-sm">
                  <span className="font-semibold text-white">{acc.name}</span>
                  <p className="text-xs">{acc.fullName}</p>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">

                <a
                  href={siteContent.company.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href={siteContent.company.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href={siteContent.company.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {siteContent.company.name}. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
