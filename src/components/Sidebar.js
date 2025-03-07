import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa"; // Hamburger icon from react-icons
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showLogo, setShowLogo] = useState(true); // Toggle between logo and hamburger

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  // Check screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for md in Tailwind
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Rotate between logo and hamburger
  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev); // Toggle between logo and hamburger
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative z-50">
      {/* Logo and Hamburger Button */}
      <motion.div
        className="w-16 h-16 sm:w-20 sm:h-20 cursor-pointer p-2 fixed top-5 right-5 md:left-5 lg:left-5 xl:left-5 z-50"
        onClick={toggleSidebar}
        style={{ perspective: 1000 }} // Add perspective for 3D rotation
      >
        <AnimatePresence mode="wait">
          {showLogo ? (
            <motion.img
              key="logo"
              src={logo}
              alt="Logo"
              className="w-full h-full"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5 }}
            />
          ) : (
            <motion.div
              key="hamburger"
              className="w-full h-full flex items-center justify-center"
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              transition={{ duration: 0.5 }}
            >
              <FaBars className="text-white text-3xl" /> {/* Hamburger icon */}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

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
              initial={{ x: isMobile ? "100%" : "-100%" }} // Start off-screen based on screen size
              animate={{ x: 0 }} // Slide into view
              exit={{ x: isMobile ? "100%" : "-100%" }} // Slide out based on screen size
              transition={{ duration: 0.3 }}
              className={`absolute top-0 ${
                isMobile ? "right-0" : "left-0"
              } h-full w-64 bg-[#082002] text-white shadow-lg p-5 flex flex-col justify-center`}
            >
              <ul className="space-y-4 text-lg text-left">
                {[
                  { name: "Home", path: "/" },
                  { name: "Dashboard", path: "/dashboard" },
                  { name: "Offers & Billing", path: "/offersbillings" },
                  { name: "Analytics", path: "/analytics" },
                  { name: "Venue & Engagement", path: "/venueengagement" },
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