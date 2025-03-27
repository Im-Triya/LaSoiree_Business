import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
// import { FaCreditCard, FaMoneyBillAlt, FaMobileAlt } from "react-icons/fa";
// import { SiVisa } from "react-icons/si";

import Footer from "../components/Footer";
import offer1 from "../assets/offersbillings/offer1.jpeg";
import offer2 from "../assets/offersbillings/offer2.jpeg";
import offer3 from "../assets/offersbillings/offer3.jpeg";
import offer4 from "../assets/offersbillings/offer4.jpeg";
import avatar1 from "../assets/offersbillings/avatar1.png";
import avatar2 from "../assets/offersbillings/avatar2.png";
import avatar3 from "../assets/offersbillings/avatar3.png";
import avatar4 from "../assets/offersbillings/avatar4.png";
import billingimage from "../assets/offersbillings/bill.png";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
];

const OffersBillings = () => {
  const headingControls = useAnimation();

  // Optimized scroll event handler
  useEffect(() => {
    let animationFrameId = null;

    const handleScroll = () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId); // Cancel previous frame
      }

      animationFrameId = requestAnimationFrame(() => {
        const elements = document.querySelectorAll(".fade-element");
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

          // Only update if visibility state has changed
          if (isVisible !== el.dataset.visible) {
            el.style.transition = "opacity 0.5s ease-in-out";
            el.style.opacity = isVisible ? 1 : 0;
            el.dataset.visible = isVisible; // Store visibility state
          }
        });
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useEffect(() => {
    const startAnimation = async () => {
      await headingControls.start({ opacity: 1 });
    };
    startAnimation();
  }, [headingControls]);

  return (
    <div className="min-h-screen text-[#FDF0B1] p-4 md:p-12">
      {/* Animated Heading */}
      <motion.h1
        className="text-2xl text-[#FDF0B1] md:text-5xl font-bold text-center mb-8 mt-10 fade-element"
        initial={{ opacity: 0 }}
        animate={headingControls}
        transition={{ duration: 0.8 }}
      >
        {"Boost Sales with Smart Offers & Billing"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                word === "Sales" || word === "Offers" || word === "Billing"
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

      {/* <motion.p
        className="text-base text-center md:text-2xl mb-15 fade-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Manage discounts, promotions, and billing in one place.
      </motion.p> */}

      {/* Active Offers & Promotions */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 ">
        <div className="order-1 col-span-1 flex items-center justify-center text-center">
          <div className="text-left bg-[#0F1A09] p-6 rounded-xl">
            <h2 className="text-[#FBFDFC] text-2xl font-bold mb-2">
              Active Offers & Promotions
            </h2>
            <motion.ul
              className="text-lg space-y-2 list-disc list-inside"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[
                "View, edit, or disable active offers",
                "Manage and schedule promotional campaigns",
                "Create exclusive deals for customer segments",
                "Monitor engagement and redemption rates",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="order-2 col-span-2 grid grid-cols-3 gap-1">
          {[offer1, offer2, offer3, offer4, offer1, offer2].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Offer ${i + 1}`}
              className="rounded-lg shadow-lg w-40 h-40 md:h-48 object-cover fade-element"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.7 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Personalized Offers */}
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 fade-element">
        <div className="order-1 md:order-2 col-span-1 flex items-center justify-center text-center">
          <div className="text-left bg-[#0F1A09] p-6 rounded-xl">
            <h2 className="text-[#FBFDFC] text-2xl font-bold mb-2">
              Personalized Offers
            </h2>
            <motion.ul
              className="text-lg space-y-2 list-disc list-inside"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[
                "Categorize customers based on spending and visits",
                "Auto-generate discounts for loyal customers",
                "Reward users with cashback and special perks",
                "AI-driven insights for targeted promotions",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="order-2 md:order-1 col-span-2 overflow-hidden relative flex justify-center items-center fade-element">
          <motion.div
            className="flex space-x-6"
            animate={{ x: [0, -200] }}
            transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
          >
            {avatars.map((avatar, index) => (
              <motion.img
                key={index}
                src={avatar}
                alt={`Customer ${index + 1}`}
                className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Table Billing Management */}
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 fade-element">
        {/* Centering text */}
        <div className="order-1 col-span-1 flex items-center justify-center text-center">
          <div className="text-left bg-[#0F1A09] p-6 rounded-xl">
            <h2 className="text-[#FBFDFC] text-2xl font-bold mb-2">
              Table Billing Management
            </h2>
            <motion.ul
              className="text-lg space-y-2 list-disc list-inside"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[
                "Visual table occupancy with color-coded status",
                "Real-time bill updates and easy payment processing",
                "Enable customers to call waiters instantly",
                "Manage pre-bookings and seat allocations",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Billing Image */}
        <div className="order-2 col-span-1 flex justify-center items-center">
          <motion.img
            src={billingimage}
            alt="Billing"
            className="rounded-lg shadow-lg h-85 object-cover fade-element"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          />
        </div>
      </motion.div>

      {/* Recent Transactions */}
      {/* <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="order-1 md:order-3 col-span-1 flex items-center justify-center text-center">
          <div className="text-left bg-[#0F1A09] p-6 rounded-xl">
            <h2 className="text-[#FBFDFC] text-2xl font-bold mb-2 fade-element">
              Recent Transactions
            </h2>
            <motion.ul
              className="text-lg space-y-2 list-disc list-inside fade-element"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
              }}
            >
              {[
                "View and track all payments",
                "Sort by payment type, date, or amount",
                "Payment Reconciliation",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="order-2 md:order-1 col-span-2 grid grid-cols-2 gap-6 place-items-center fade-element">
          <div className="flex flex-col items-center">
            <FaMobileAlt className="text-5xl text-white" />
            <p className="text-white mt-2">UPI</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMoneyBillAlt className="text-5xl text-white" />
            <p className="text-white mt-2">Cash</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCreditCard className="text-5xl text-white" />
            <p className="text-white mt-2">Credit Card</p>
          </div>
          <div className="flex flex-col items-center">
            <SiVisa className="text-5xl text-white" />
            <p className="text-white mt-2">Debit Card</p>
          </div>
        </div>
      </motion.div> */}

      <Footer />
    </div>
  );
};

export default OffersBillings;