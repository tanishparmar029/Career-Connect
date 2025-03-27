import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="bg-gray-800 text-gray-700 py-6">
      <footer className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-4 md:mb-0">
            <img src="logo.png" alt="Career Connect Logo" className="h-8 w-8" />
            <span className="ml-2 text-lg font-bold text-white">Career Connect</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a href="#" target="_blank" className="text-white hover:text-gray-300 transition duration-300">
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-300">Home</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">About Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition duration-300">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="mt-2">
              <li>
                <Link to="/PrivacyPolicy" className="text-gray-300 hover:text-white transition duration-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/Tos" className="text-gray-300 hover:text-white transition duration-300">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Career Connect. All rights reserved.</p>
=======
    
    <div className="bg-gray-50 border-t border-gray-200 py-12">
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4 text-2xl font-bold">
              Career<span className="text-[#512b95]">Connect</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Connecting talent with opportunity worldwide
            </p>
          </div>

          {/* Quick Links */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/PrivacyPolicy" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/Tos" 
                  className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mt-4 md:mt-0">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {['facebook-f', 'twitter', 'linkedin-in', 'instagram'].map((icon) => (
                <a 
                  key={icon}
                  href="#"
                  target="_blank"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label={`Follow us on ${icon}`}
                >
                  <i className={`fa-brands fa-${icon} text-lg`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                Need help? <br/>
                <a href="mailto:support@careerconnect.com" className="text-blue-600 hover:underline">
                  support@careerconnect.com
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Career Connect. All rights reserved.
          </p>
>>>>>>> Nik
        </div>
      </footer>
    </div>
  );
};

export default Footer;