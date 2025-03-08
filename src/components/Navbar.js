import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo.png";


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#082002] text-white shadow-lg z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/">
          <img src={logo} alt="La Soiree" className="h-10" />
          </Link>
        </div>
        <ul className="flex space-x-6">
          {[
            { name: "Home", path: "/" },
            { name: "Dashboard", path: "/dashboard" },
            { name: "Offers & Billing", path: "/offersbillings" },
            { name: "Analytics", path: "/analytics" },
            { name: "Venue & Engagement", path: "/venueengagement" },
            { name: "Demo", path: "/demo" },
          ].map(({ name, path }) => (
            <li key={name}>
              <Link to={path} className="hover:text-gray-300">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;