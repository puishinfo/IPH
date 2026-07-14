import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';


const Footer = () => {
  const whatsappLink = 'https://wa.me/919934611463?text=Hello%20Inner%20Peace%20Holidays%2C%20I%20need%20a%20tour%20quote.';

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-full bg-white/0">
                <img src={`${import.meta.env.BASE_URL}pub/IPH-Logo.png`} alt="Inner Peace Holidays Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Inner Peace Holidays Pvt. Ltd.</h3>
                <p className="text-gray-400 text-sm">Bodhgaya tour operator for Buddhist pilgrimage travel</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-xl">
              We specialize in Buddhist Circuit Tours, hotel booking in Bodhgaya, vehicle hire in Bodhgaya, tour guide coordination, and escort services for domestic and international pilgrims.
            </p>
            <div className="space-y-3 text-sm text-gray-300 mb-6">
              <p className="flex items-start space-x-2">
                <Phone className="h-4 w-4 text-amber-300 mt-0.5" />
                <span>Phone: +91 9934611463</span>
              </p>
              <p className="flex items-start space-x-2">
                <Mail className="h-4 w-4 text-amber-300 mt-0.5" />
                <span>Email: innerpeaceholidays@outlook.com</span>
              </p>
              <p className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-amber-300 mt-0.5" />
                <span>Address: Node 1, Shop 9, Mahabodhi Shopping complex, Bodhgaya, Bihar 824231</span>
              </p>
              <p>
                WhatsApp:
                {' '}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-200">
                  +91 9934611463
                </a>
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Youtube" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Tour Packages</Link></li>
              <li><Link to="/sacred-sites" className="text-gray-300 hover:text-white transition-colors duration-200">Buddhist Circuit Destinations</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Company</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Travel Support</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91 9934611463</p>
                  <p className="text-sm text-gray-400">Booking and itinerary support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300">innerpeaceholidays@outlook.com</p>
                  <p className="text-sm text-gray-400">Share dates and group details</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">Node 1, Shop 9, Mahabodhi Shopping complex</p>
                  <p className="text-gray-300">Bodhgaya, Bihar 824231</p>
                </div>
              </div>
              <div className="pt-2 text-sm text-gray-400">
                Other business verticals under the company: IT Services and Handicrafts.
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2026 Inner Peace Holidays Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link to="/refund-policy" className="text-gray-400 hover:text-white transition-colors duration-200">Cancellation Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;