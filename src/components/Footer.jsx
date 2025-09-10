import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-black mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">HasibStore</h2>
          <p className="text-sm text-gray-800">
            Your one-stop shop for quality products at the best prices. Shop
            smart, shop HasibStore!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Categories
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter / Social */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Stay Connected</h3>
          <p className="text-sm mb-3">Subscribe to our newsletter</p>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-md w-full text-black focus:outline-none"
            />
            <button className="bg-white text-orange-500 px-4 py-2 rounded-md font-semibold hover:bg-orange-100 transition">
              Subscribe
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#">
              <Facebook className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#">
              <Twitter className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#">
              <Instagram className="w-5 h-5 hover:text-white" />
            </a>
            <a href="#">
              <Mail className="w-5 h-5 hover:text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-400 text-center py-4 text-sm">
        © {new Date().getFullYear()} HasibStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
