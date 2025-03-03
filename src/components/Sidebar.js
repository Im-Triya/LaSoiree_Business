import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative z-50">
      {/* Logo Button */}
      <img
        src={logo}
        alt="Logo"
        className="w-20 h-20 cursor-pointer p-2 fixed top-5 left-5 z-50"
        onClick={toggleSidebar}
      />

      {/* Sidebar & Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop (Closes Sidebar on Click) */}
            <div
              className="absolute inset-0 bg-black bg-opacity-40"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: -250 }}
              animate={{ x: 0 }}
              exit={{ x: -250 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 h-full w-64 bg-[#082002] text-white shadow-lg p-5 flex flex-col justify-center"
            >
              <ul className="space-y-4 text-lg text-left">  {/* Ensuring left alignment */}
                {[
                  { name: "Home", path: "/" },
                  { name: "Dashboard", path: "/dashboard" },
                  { name: "Offers", path: "/offers" },
                  { name: "Billing", path: "/billing" },
                  { name: "Analytics", path: "/analytics" },
                  { name: "Venue", path: "/venue" },
                  { name: "Engagement", path: "/engagement" },
                ].map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className="hover:text-gray-300 block py-2"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
