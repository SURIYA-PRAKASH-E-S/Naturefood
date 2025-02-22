import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative py-8 overflow-hidden bg-black">
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          className="flex flex-wrap items-center justify-between -m-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo Section */}
          <div className="w-auto p-8">
            <a href="/" className="flex items-center text-lg font-bold text-white">
              Nature <span className="text-green">Foodie</span>
            </a>
          </div>
          
          {/* Navigation and Info */}
          <div className="w-auto p-8">
            <ul className="flex flex-wrap items-center -m-5">
              <li className="p-5">
                <a className="font-medium text-red-500 hover:text-green-400" href="#">Terms of Service</a>
              </li>
              <li className="p-5 text-white">
                <p>&copy; 2025 Nature Foodie. All rights reserved.</p>
                <p>Made with <FaHeart className="inline text-red-500" /> Goodwill</p>
              </li>
              <li className="p-5">
                <a className="font-medium text-red-500 hover:text-green-400" href="/contact">Contact Us</a>
              </li>
              <li className="p-5 text-white">
                <p>Delivery Time: 10:00 AM - 9:00 PM</p>
                <p>Closing Time: 10:00 PM</p>
              </li>
            </ul>
          </div>
          
          {/* Social Icons */}
          <div className="w-auto p-8">
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.facebook.com/" className="p-2 bg-gray-700 rounded-full hover:bg-green-500 transition">
                <FaFacebookF className="w-5 h-5 text-white" />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/" className="p-2 bg-gray-700 rounded-full hover:bg-pink-500 transition">
                <FaInstagram className="w-5 h-5 text-white" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Decorative SVG */}
      <div className="absolute inset-x-0 -top-72 -z-10">
        <svg className="absolute bottom-0 w-full text-gray-700" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="currentColor" d="M0 128L48 138.7C96 149 192 170 288 186.7C384 203 480 213 576 213.3C672 213.7 768 204.3 864 213.3C960 222.3 1056 249.7 1152 240.7C1248 231.7 1344 186.3 1392 163.7L1440 141.3V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V128Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Footer;