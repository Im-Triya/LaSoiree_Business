import React from "react";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import svg1 from "../assets/hero/mobile-1.png"; 
import svg2 from "../assets/hero/mobile-2.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  const text1 = "LaSoirée Partners Application is your all-in-one powerhouse for managing and elevating your business effortlessly. Designed to simplify everything from tracking revenue and inventory to engaging directly with your customers, this app puts you in control. Monitor multiple branches seamlessly, uncover top-selling items, and craft personalized offers to keep your audience hooked. With real-time insights, sleek analytics, and a user-friendly interface, LaSoirée Partners doesn’t just help you manage your business—it helps you scale it with style. Get ready to transform the way you operate, one tap at a time!";

  // Function to animate words separately (delayed after images)
  const renderAnimatedText = (text, delayStart = 0) => {
    return text.split(" ").map((word, index) => (
      <motion.span
        key={index}
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: delayStart + index * 0.1 }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <div>
      <HeroSection />

      {/* Two-Column Layout for Desktop, Stacked for Mobile */}
      <div
        id="two-column-section" // Add id for smooth scrolling
        className="relative min-h-screen flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 w-full items-center px-4 sm:px-8 md:px-16"
        style={{ perspective: "1000px" }}
      >
        {/* Mobile: Show Images First, Desktop: Side by Side */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-2 md:gap-4 md:order-2 h-screen md:h-auto">
          
          {/* First Image - Left Side on Mobile */}
          <motion.div className="w-1/2 md:w-auto self-end">
            <motion.img 
              src={svg1} 
              alt="Image 1" 
              className="h-[40vh] md:h-[50vh] w-auto" 
              initial={{ y: -100, opacity: 0, rotateZ: 15 }}
              whileInView={{ y: 0, opacity: 1, rotateZ: 0, rotateY: -30, rotateX: -20 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Second Image - Right Side on Mobile */}
          <motion.div className="w-1/2 md:w-auto self-start">
            <motion.img 
              src={svg2} 
              alt="Image 2" 
              className="h-[45vh] md:h-[60vh] w-auto" 
              initial={{ y: -100, opacity: 0, rotateZ: -15 }}
              whileInView={{ y: 0, opacity: 1, rotateZ: 0, rotateY: -30, rotateX: 20 }}
              transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            />
          </motion.div>

        </div>

        {/* Mobile: Show Text After Images, Desktop: Side by Side */}
        <motion.div 
          className="w-full text-[#FDF0B1] text-lg md:text-2xl font-medium leading-relaxed md:order-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <p>{renderAnimatedText(text1, 0.5)}</p>
        </motion.div>
      </div>

      {/* Add Gallery Component Here */}
      <Gallery />
      
      {/* Footer */}
      <Footer />

    </div>
  );
}