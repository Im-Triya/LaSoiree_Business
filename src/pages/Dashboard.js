import React, { useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  FaChartLine,
  FaUsers,
  FaMoneyBillWave,
  FaStore,
  FaHandsHelping,
} from "react-icons/fa";
import Footer from "../components/Footer";
// import chartImage from "../assets/dashboard/dashboard.jpeg";
import chartImage from "../assets/dashboard/dashboard2.png";

const stats = [
  {
    id: 1,
    title: "Total Revenue Growth",
    value: 12345,
    icon: <FaMoneyBillWave />, 
    delay: 0.2,
  },
  {
    id: 2,
    title: "Daily Customer Visits",
    value: 215,
    icon: <FaUsers />, 
    delay: 0.4,
  },
  {
    id: 3,
    title: "Live Customers Engaged",
    value: 42,
    icon: <FaChartLine />, 
    delay: 0.6,
  },
];

const features = [
  {
    icon: <FaStore />, 
    title: "Seamless Venue Management",
    description:
      "Manage tables, staff, and customer flow effortlessly with real-time data.",
  },
  {
    icon: <FaChartLine />, 
    title: "Advanced Analytics",
    description:
      "Get insights on sales trends, customer preferences, and performance metrics.",
  },
  {
    icon: <FaHandsHelping />, 
    title: "Boost Customer Engagement",
    description:
      "Offer personalized deals and interact directly with your customers.",
  },
];

function Dashboard() {
  const [dynamicStats, setDynamicStats] = useState(stats);
  const { scrollY } = useScroll();
  const headingControls = useAnimation();
  const fadeOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const contentControls = useAnimation();

  useEffect(() => {
    async function animateHeading() {
      await headingControls.start({ opacity: 1 });
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      contentControls.start({ opacity: 1, y: 0 });
    }
    animateHeading();
  }, [headingControls, contentControls]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicStats((prevStats) =>
        prevStats.map((stat) => ({
          ...stat,
          value: stat.value + Math.floor(Math.random() * 10),
        }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen text-[#FDF0B1] p-6 md:p-12 ">
      <motion.h1
        className="text-3xl text-[#FDF0B1] md:text-5xl font-bold text-center mb-12 mt-14 ml-3"
        style={{ opacity: fadeOpacity }}
        initial={{ opacity: 0 }}
        animate={headingControls}
        transition={{ duration: 1 }}
      >
        {"Powering Business with Smart Insights"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                word === "Business" || word === "Smart"
                  ? "text-[#FBFDFC] text-4xl md:text-6xl"
                  : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
      </motion.h1>

      <motion.div
        animate={contentControls}
        initial={{ opacity: 0, y: 20 }}
        
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div className="flex flex-col space-y-6">
          {dynamicStats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
        <motion.div className="flex justify-center">
          <motion.img
            src={chartImage}
            alt="Business Analytics Charts"
            className="w-full max-w-lg rounded-lg shadow-lg"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </motion.div>

      <motion.div className="mt-16 p-6 bg-[#0F1A09] rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-[#FBFDFC]">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} delay={index * 0.3} />
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
}

const StatCard = ({ stat }) => {
  const [currentValue, setCurrentValue] = useState(stat.value);
  const [previousValue, setPreviousValue] = useState(stat.value);

  useEffect(() => {
    if (stat.value !== currentValue) {
      setPreviousValue(currentValue);
      setCurrentValue(stat.value);
    }
  }, [stat.value, currentValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileHover={{ scale: 1.05, backgroundColor: "#017F1C" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: stat.delay }}
      viewport={{ once: true }}
      className="flex items-center bg-[#0F1A09] p-6 rounded-2xl shadow-lg"
    >
      <div className="text-4xl text-[#FBFDFC] mr-4">{stat.icon}</div>
      <div>
        <h2 className="text-lg font-semibold">{stat.title}</h2>
        <div className="text-2xl font-bold text-[#FBFDFC] h-8 overflow-hidden relative">
          <motion.div
            key={currentValue}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            {currentValue.toLocaleString()}
          </motion.div>
          {previousValue !== currentValue && (
            <motion.div
              key={`prev-${previousValue}`}
              initial={{ y: 0, opacity: 1 }}
              animate={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute"
            >
              {previousValue.toLocaleString()}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ feature, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center text-center p-6 bg-[#1E2B14] rounded-2xl shadow-lg"
    >
      <div className="text-4xl  mb-4">{feature.icon}</div>
      <h3 className="text-lg font-semibold mb-2 text-[#FBFDFC]">{feature.title}</h3>
      <p className="text-[#FDF0B1]">{feature.description}</p>
    </motion.div>
  );
};

export default Dashboard;