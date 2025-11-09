import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-full bg-white/0">
                <img src="/IPH-Logo.png" alt="Inner Peace Holidays Logo" className="h-10 w-auto" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Inner Peace Holidays Private Limited</h3>
                <p className="text-gray-400 text-sm">Buddhist Pilgrimage Tours</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Experience authentic Buddhist pilgrimage tours in Bodhgaya with expert guidance 
              from Mr. Brajesh Kumar. Discover the path to enlightenment where Buddha found his awakening.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">About Guide</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors duration-200">Tour Packages</Link></li>
              <li><Link to="/sacred-sites" className="text-gray-300 hover:text-white transition-colors duration-200">Sacred Sites</Link></li>
              <li><Link to="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-200">Reviews</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Book Now</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-gray-300">+91 9934611463</p>
                  <p className="text-sm text-gray-400">24/7 Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-1" />
                <div>
                  <p className="text-gray-300">innerpeaceholidays@outlook.com</p>
                  <p className="text-sm text-gray-400">Quick Response</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1" />
                <div>
                  <p className="text-gray-300">Node 1, Shop 9, Mahabodhi Shopping complex</p>
                  <p className="text-gray-300">Bodhgaya, Bihar 824231</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Inner Peace Holidays Private Limited. All rights reserved. | Managed by Mr. Brajesh Kumar
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Cancellation Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;