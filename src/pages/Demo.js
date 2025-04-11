import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "../components/Footer";

import img1 from "../assets/demo/Auth.png";
import img2 from "../assets/demo/Dashboard.png";
import img3 from "../assets/demo/Invoice.png";
import img4 from "../assets/demo/Menu.png";
import background from "../assets/demo/background.png"; 

const images = [img1, img2, img3, img4]; 

const rows = [
  { id: 1, heading: "Authentication", pointers: ["Secure Access Control: Role-based authentication for staff with different permission levels", "Entry Level Management: Configure entry requirements and customer verification protocols", "Staff Attendance Tracking: Integrated login system that tracks staff check-ins/check-outs"] },
  { id: 2, heading: "Dashboard", pointers: ["Real-Time Business Metrics: Live displays of today's revenue, customer visits, and current occupancy", "Operational Overview: Quick-view widgets for table occupancy status and active promotions", "Performance Analytics: Visual charts showing sales trends and top-selling items"] },
  { id: 3, heading: "Invoice", pointers: ["Smart Billing System: Automated invoice generation with tax calculations and payment tracking", "Table-Linked Billing: Direct association with table occupancy and customer details", "Offer Integration: Automatic application of running promotions/offers to relevant invoices"] },
  { id: 4, heading: "Menu", pointers: ["Dynamic Menu Management: Real-time editing of food items, categories, and pricing", "Top Items Highlight: Automatic highlighting of best-selling menu items based on sales data", "Digital Menu Customization: Venue-specific menu theming with photo uploads for food items"] },
];

function Demo() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="relative min-h-screen flex flex-col">
      <div className="flex flex-col lg:grid lg:grid-cols-2 flex-grow">
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
              className="w-[200px] h-[400px] rounded-lg shadow-lg overflow-hidden"
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
          <div className="space-y-8"> {/* Added spacing container */}
            {rows.map((row, index) => (
              <Row
                key={row.id}
                row={row}
                setActiveImage={setActiveImage}
                imageIndex={index}
              />
            ))}
          </div>
          {/* Empty div to create space for footer on mobile */}
          <div className="lg:hidden h-[37.5vh]"></div>
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
          <div className="w-[250px] h-[500px] rounded-lg shadow-lg overflow-hidden">
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
      
      {/* Footer - full width */}
      <div className="w-full">
        <Footer />
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
      className="min-h-[50vh] flex flex-col justify-center p-6 lg:p-8 lg:min-h-screen"
    >
      <h2 className="text-[#FBFDFC] text-2xl font-bold mb-4">{row.heading}</h2>
      <ul className="list-disc pl-6 space-y-3">
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