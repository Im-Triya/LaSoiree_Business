import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "../assets/hero/hero-image.png";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // Animate as we scroll past it
  });

  // Move text upwards as scroll progresses
  const yText = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves text up
  const opacityText = useTransform(scrollYProgress, [0, 0.6], [1, 0]); // Fades out

  // Function to scroll to the target section
  const scrollToSection = () => {
    const section = document.getElementById("two-column-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className="relative flex items-center justify-center w-full min-h-screen overflow-hidden px-4 sm:px-8 md:px-16"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Animated Hero Content */}
      <motion.div
        className="relative text-center text-white max-w-3xl z-10 px-4 sm:px-8"
        style={{ y: yText, opacity: opacityText }} // Scroll effects applied here
      >
      <motion.h1
  className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight text-center"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Line 1: Empowering */}
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.3 }}
  >
    <span className="text-white">Empowering</span>
  </motion.div>

  {/* Line 2: Businesses */}
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.6 }}
  >
    <span className="text-[#FDF0B1]">Businesses</span>
  </motion.div>

  {/* Line 3: Enhancing Customer */}
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.9 }}
  >
    <span className="text-white">Enhancing </span>
    <span className="text-[#FDF0B1]">Customer</span>
  </motion.div>

  {/* Line 4: Experience */}
  <motion.div
    className="block"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1.2 }}
  >
    <span className="text-[#FDF0B1]">Experience</span>
  </motion.div>
</motion.h1>

        <motion.p className="text-base sm:text-lg md:text-2xl mt-3 sm:mt-4 font-medium text-[#FBFDFC]">
          <span className="text-white">Streamlining </span>
          <span className="text-[#FDF0B1] font-bold">Operations </span>
          <span className="text-white">and </span>
          <span className="text-[#FDF0B1] font-bold">Engagement</span>
        </motion.p>

        {/* Call to Action */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-full bg-[#FBFDFC] text-black shadow-md transition-all"
          onClick={scrollToSection} // Add onClick handler
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
}