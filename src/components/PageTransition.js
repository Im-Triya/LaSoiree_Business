import React from "react";
import { motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }} // Start rotated 90 degrees
      animate={{ opacity: 1, rotateY: 0 }} // Rotate to 0 degrees
      exit={{ opacity: 0, rotateY: -90 }} // Rotate back to -90 degrees
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth easing
      style={{ transformOrigin: "center" }} // Ensure rotation happens around the center
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;