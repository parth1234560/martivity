import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-clay-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-handloom-yellow to-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-clay-brown font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Martovity</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting authentic Indian artisans with conscious buyers. 
              Supporting traditional craftsmanship, one purchase at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Home</a></li>
              <li><a href="/buy" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Shop Products</a></li>
              <li><a href="/seller" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Become a Seller</a></li>
              <li><a href="/our-story" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Our Story</a></li>
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Help & Support</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Pottery & Ceramics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Textiles & Fabrics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Wooden Crafts</a></li>
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Jewelry & Accessories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-handloom-yellow transition-colors duration-300">Home Decor</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-handloom-yellow" />
                <span className="text-gray-300">support@martovity.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-handloom-yellow" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-handloom-yellow mt-1" />
                <span className="text-gray-300">
                  123 Heritage Lane<br />
                  New Delhi, India 110001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-handloom-yellow fill-current" />
              <span>for Indian Artisans</span>
            </div>
            <div className="text-gray-300 text-sm">
              © 2025 Martovity. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;