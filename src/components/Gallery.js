import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/gallery/image1.jpeg";
import image2 from "../assets/gallery/image2.jpeg";
import image3 from "../assets/gallery/image3.jpeg";
import image4 from "../assets/gallery/image4.jpeg";
import image5 from "../assets/gallery/image5.jpeg";
import image6 from "../assets/gallery/image6.jpeg";

const imagesRow1 = [image1, image2, image3, image4];
const imagesRow2 = [image5, image6, image2, image3];

const marqueeVariants = (direction) => ({
  animate: {
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
    },
  },
});

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [paused, setPaused] = useState(false);

  const handleClick = (image) => {
    setSelectedImage(image);
    setPaused(true); // Pause the row movement
  };

  const handleClose = () => {
    setSelectedImage(null);
    setPaused(false); // Resume movement
  };

  return (
    <div className="relative w-full overflow-hidden py-10 bg-[#082002]">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDF0B1] mb-6">
        Stunning Visuals
      </h2>

      {/* First Row - Moves Left */}
      <motion.div className="relative flex w-full overflow-hidden" animate={paused ? "paused" : "animate"}>
        <motion.div className="flex gap-6" variants={marqueeVariants("left")} animate={paused ? undefined : "animate"}>
          {[...imagesRow1, ...imagesRow1].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="h-40 md:h-56 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleClick(src)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Second Row - Moves Right */}
      <motion.div className="relative flex w-full overflow-hidden mt-4" animate={paused ? "paused" : "animate"}>
        <motion.div className="flex gap-6" variants={marqueeVariants("right")} animate={paused ? undefined : "animate"}>
          {[...imagesRow2, ...imagesRow2].map((src, index) => (
            <motion.img
              key={index}
              src={src}
              alt={`Gallery ${index}`}
              className="h-40 md:h-56 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleClick(src)}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Enlarged Image Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl cursor-pointer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 2, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
