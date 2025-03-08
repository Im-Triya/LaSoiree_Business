import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars } from "react-icons/fa"; // Hamburger icon from react-icons
import logo from "../assets/logo/logo.png"; // Import the logo

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  // Only render the Sidebar in mobile view
  if (!isMobile) return null;

  return (
    <div className="relative z-50">
      {/* Logo on the top-left corner of the page */}
      <div className="fixed top-5 left-5 z-50">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>

      {/* Hamburger Button on the top-right corner */}
      <motion.div
        className="w-16 h-16 cursor-pointer p-2 fixed top-5 right-5 z-50"
        onClick={toggleSidebar}
      >
        <FaBars className="text-white text-3xl" /> {/* Hamburger icon */}
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
              initial={{ x: "100%" }} // Start off-screen
              animate={{ x: 0 }} // Slide into view
              exit={{ x: "100%" }} // Slide out
              transition={{ duration: 0.3 }}
              className="absolute top-0 right-0 h-full w-64 bg-[#082002] text-white shadow-lg p-5 flex flex-col justify-center items-start"
            >
              {/* Navigation Links */}
              <ul className="space-y-4 text-lg text-left">
                {[
                  { name: "Home", path: "/" },
                  { name: "Dashboard", path: "/dashboard" },
                  { name: "Offers & Billing", path: "/offersbillings" },
                  { name: "Analytics", path: "/analytics" },
                  { name: "Venue & Engagement", path: "/venueengagement" },
                  { name: "Demo", path: "/demo" },
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