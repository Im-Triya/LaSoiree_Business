import React from "react";
import HeroSection from "../components/HeroSection";
import { motion } from "framer-motion";
import svg1 from "../assets/hero/mobile-1.png"; 
import svg2 from "../assets/hero/mobile-2.png";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  const text1 = "LaSoirée Partners Application..."; // shortened for brevity

  // Simplified animation variants
  const imageVariants1 = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut" }
    }
  };

  const imageVariants2 = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 3, ease: "easeInOut", delay: 0.5 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { delay: 1.5, duration: 0.8 }
    }
  };

  return (
    <div>
      <HeroSection />

      <div
        id="two-column-section" 
        className="relative min-h-screen flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 w-full items-center px-4 sm:px-8 md:px-16"
      >
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-2 md:gap-4 md:order-2 h-screen md:h-auto">
          <motion.div 
            className="w-1/2 md:w-auto self-end"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants1}
          >
            <img 
              src={svg1} 
              alt="Phone 1" 
              className="h-[40vh] md:h-[50vh] w-auto" 
            />
          </motion.div>

          <motion.div 
            className="w-1/2 md:w-auto self-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageVariants2}
          >
            <img 
              src={svg2} 
              alt="Phone 2" 
              className="h-[45vh] md:h-[60vh] w-auto" 
            />
          </motion.div>
        </div>

        <motion.div 
          className="w-full text-[#FDF0B1] text-lg md:text-2xl font-medium leading-relaxed md:order-1 pb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
        >
          <p>{text1}</p>
        </motion.div>
      </div>

      <Gallery />
      <Footer />
    </div>
  );
}