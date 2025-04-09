import React from "react";
// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-gray-300 py-4 px-6 mx-auto rounded-lg shadow-lg mt-10 ">
      <div className="flex flex-col md:flex-row items-center justify-between text-sm text-center md:text-left">
        
        {/* Contact Info - Left (on larger screens) */}
        <div className="mb-3 md:mb-0">
          <h2 className="text-sm font-semibold text-white">Contact Us</h2>
          <p>
            Email: <a href="mailto:Business.lasoiree@gmail.com" className="text-[#FDF0B1] hover:underline">business.lasoiree@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+917976251906" className="text-[#FDF0B1] hover:underline">+91 7976251906</a>
          </p>
        </div>

        {/* Copyright - Center */}
        <div className="text-gray-400 text-xs mb-3 md:mb-0">
          © {new Date().getFullYear()} App La Soiree. All rights reserved.
        </div>

        {/* Social Media - Right */}
        <div className="flex gap-4">
          {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-lg hover:text-[#FDF0B1] transition-transform transform hover:scale-110" />
          </a> */}
          <a href="https://www.instagram.com/abhi_neww?igsh=MWU4Nmg4NTJ5eDV4bw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-lg hover:text-[#FDF0B1] transition-transform transform hover:scale-110" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-lg hover:text-[#FDF0B1] transition-transform transform hover:scale-110" />
          </a> */}
          {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-lg hover:text-[#FDF0B1] transition-transform transform hover:scale-110" />
          </a> */}
        </div>
      </div>
    </footer>
  );
}
