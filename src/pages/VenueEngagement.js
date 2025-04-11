import React, { useEffect } from "react";
import { motion } from "framer-motion";
import mobileImage from "../assets/venueengagement/mobile-1.png";
import Lottie from "lottie-react";
import chatAnimation from "../assets/venueengagement/chat.json";
import attendanceAnimation from "../assets/venueengagement/attendance.json";
import notificationAnimation from "../assets/venueengagement/notification.png";
import Footer from "../components/Footer";

function VenueEngagement() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-element");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          el.style.transition = "opacity 0.5s ease-in-out";
          el.style.opacity = 1;
        } else {
          el.style.transition = "opacity 0.5s ease-in-out";
          el.style.opacity = 0;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen text-[#FDF0B1] p-4 md:p-12">
      {/* Header */}
      <motion.h1
        className="text-2xl text-[#FDF0B1] md:text-5xl font-bold text-center mb-8 mt-10 fade-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {"Customize Your Venue & Connect with Customers"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                word === "Venue" || word === "Customers"
                  ? "text-[#FBFDFC] text-3xl md:text-6xl"
                  : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
      </motion.h1>

      <p className="text-center text-lg text-[#FBFDFC] mt-2 fade-element">
        Manage venue settings, track staff, and engage with customers.
      </p>
      {/* Section 1: Venue Photo & Menu Management */}
      <motion.div
        className="bg-[#0F1A09] flex flex-col md:flex-row items-center gap-6 mt-8 p-6 rounded-xl " // Curved edges
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text on Left (Mobile: First, Desktop: Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold">
            Venue Photo & Menu Management
          </h3>
          <p className="text-[#FBFDFC] mt-1">
            Upload venue images and update menu items effortlessly.
          </p>
        </div>

        {/* Image on Right (Mobile: Second, Desktop: Right) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={mobileImage}
            alt="Venue Management"
            className="h-[45vh] md:h-[60vh] w-auto rounded-lg" // Adjusted size
            animate={{ y: [0, -10, 0] }} // Floating animation
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Section 2: Staff Attendance */}
      <motion.div
        className="#017F1C flex flex-col md:flex-row items-center gap-6 mt-8 p-6 rounded-xl " // Curved edges
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animation on Left (Mobile: Second, Desktop: Left) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Lottie
            animationData={attendanceAnimation} // Lottie JSON file
            loop={true}
            autoplay={true}
            className="w-48 md:w-64 h-auto" // Reduced size
          />
        </motion.div>

        {/* Text on Right (Mobile: First, Desktop: Right) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold">Staff Attendance</h3>
          <p className="text-[#FBFDFC] mt-1">
            Keep track of your staff attendance and shifts.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Real-Time Customer Chat */}
      <motion.div
        className="bg-[#0F1A09] flex flex-col md:flex-row items-center gap-6 mt-8 p-6 rounded-xl" // Curved edges
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Text on Left (Mobile: First, Desktop: Left) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold">Real-Time Customer Chat</h3>
          <p className="text-[#FBFDFC] mt-1">
            Engage directly with customers for queries and feedback.
          </p>
        </div>

        {/* Animation on Right (Mobile: Second, Desktop: Right) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Lottie
            animationData={chatAnimation} // Lottie JSON file
            loop={true}
            autoplay={true}
            className="w-80 md:w-[30rem] h-auto" // Increased size
          />
        </motion.div>
      </motion.div>

      {/* Section 4: Table Service Requests */}
      <motion.div
        className="#017F1C flex flex-col md:flex-row items-center gap-6 mt-8 p-6 rounded-xl " // Curved edges
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animation on Left (Mobile: Second, Desktop: Left) */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center order-2 md:order-1"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* <Lottie
            animationData={notificationAnimation} // Lottie JSON file
            loop={true}
            autoplay={true}
            className="w-64 md:w-80 h-auto" // Adjusted size
          /> */}
          <motion.img
            src={notificationAnimation}
            alt="Venue Management"
            className="h-[45vh] md:h-[60vh] w-auto rounded-lg" // Adjusted size
            animate={{ y: [0, -10, 0] }} // Floating animation
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Text on Right (Mobile: First, Desktop: Right) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-semibold">Table Service Requests</h3>
          <p className="text-[#FBFDFC] mt-1">
            Monitor and respond to customer service calls efficiently.
          </p>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default VenueEngagement;
