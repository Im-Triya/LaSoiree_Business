import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import your local images
import img1 from "../assets/demo/Auth.png";
import img2 from "../assets/demo/Dashboard.png";
import img3 from "../assets/demo/Invoice.png";
import img4 from "../assets/demo/Menu.png";
import background from "../assets/demo/background.png"; // Import the background image

const images = [img1, img2, img3, img4]; // Use the imported images

const rows = [
  { id: 1, heading: "Row 1", pointers: ["Point 1", "Point 2", "Point 3"] },
  { id: 2, heading: "Row 2", pointers: ["Point 1", "Point 2", "Point 3"] },
  { id: 3, heading: "Row 3", pointers: ["Point 1", "Point 2", "Point 3"] },
  { id: 4, heading: "Row 4", pointers: ["Point 1", "Point 2", "Point 3"] },
];

function Demo() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-2 h-screen">
      {/* Right Column (Static - Top 5/8 on Mobile) */}
      <div
        className="lg:hidden fixed top-0 left-0 w-full h-[62.5vh] flex justify-center items-center p-4"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            className="w-[200px] h-[400px] bg-gray-400 rounded-lg shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={images[activeImage]}
              alt="Display"
              className="w-full h-full rounded-xl p-1 object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Left Column (Scrollable - Bottom 3/8 on Mobile) */}
      <div className="lg:overflow-y-scroll hide-scrollbar lg:h-screen mt-[62.5vh] lg:mt-0">
        {rows.map((row, index) => (
          <Row
            key={row.id}
            row={row}
            setActiveImage={setActiveImage}
            imageIndex={index}
          />
        ))}
      </div>

      {/* Right Column (Static - Desktop) */}
      <div
        className="hidden lg:flex justify-center items-center h-screen sticky top-0 p-8"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-[250px] h-[500px] bg-gray-400 rounded-lg shadow-lg overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={images[activeImage]}
                alt="Display"
                className="w-full h-full rounded-xl p-1 object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Row({ row, setActiveImage, imageIndex }) {
  const { ref, inView } = useInView({
    threshold: 0.5,   
  });

  if (inView) {
    setActiveImage(imageIndex);
  }

  return (
    <div
      ref={ref}
      className="h-[37.5vh] flex flex-col justify-center p-8 lg:h-auto lg:min-h-screen"
    >
      <h2 className="text-2xl font-bold mb-4">{row.heading}</h2>
      <ul className="list-disc pl-6">
        {row.pointers.map((pointer, index) => (
          <li key={index} className="text-lg">
            {pointer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Demo;
