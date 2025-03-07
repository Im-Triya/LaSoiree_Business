import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line, Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from "chart.js";
import image1 from "../assets/analytics/image1.jpeg";
import image2 from "../assets/analytics/image2.jpeg";
import image3 from "../assets/analytics/image3.jpeg";
import image4 from "../assets/analytics/image4.jpeg";
import image5 from "../assets/analytics/image5.jpeg";
import Footer from "../components/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

const Analytics = () => {
  const [salesData, setSalesData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [100, 200, 150, 300, 250, 400, 350],
        borderColor: "#017F1C",
        backgroundColor: "rgba(1, 127, 28, 0.2)",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData((prevData) => {
        const newData = [...prevData.datasets[0].data];
        newData.push(Math.floor(Math.random() * 500));
        newData.shift();
        return {
          ...prevData,
          datasets: [{ ...prevData.datasets[0], data: newData }],
        };
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [pieData, setPieData] = useState({
    labels: ["Repeat Customers", "New Customers"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#017F1C", "#0F1A09"],
      },
    ],
  });

  const [barData, setBarData] = useState({
    labels: ["7 AM - 10 AM", "12 PM - 2 PM", "7 PM - 9 PM"],
    datasets: [
      {
        label: "Customer Visits",
        data: [30, 80, 150],
        backgroundColor: "#017F1C",
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPieData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: [
              Math.floor(Math.random() * 70),
              Math.floor(Math.random() * 50),
            ],
          },
        ],
      }));

      setBarData((prev) => ({
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: prev.datasets[0].data.map(() =>
              Math.floor(Math.random() * 200)
            ),
          },
        ],
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Image carousel
  const topSellingItems = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topSellingItems.length);
    }, 3000);
  
    return () => clearInterval(carouselInterval);
  }, [topSellingItems.length]);

  // Add scroll event listener for fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-element");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          el.style.transition = "opacity 0.8s ease-in-out";
          el.style.opacity = 1;
        } else {
          el.style.transition = "opacity 0.8s ease-in-out";
          el.style.opacity = 0;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen p-4 md:p-6 md:m-10">
      {/* Heading */}
      <motion.h1
        className="text-2xl text-[#09D133] md:text-5xl font-bold text-center mb-8 mt-10 fade-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {"Understand Your Business with Data"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                word === "Business" || word === "Data"
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
        Track top-selling items, revenue trends, and customer behavior.
      </p>

      {/* Sales Trends & Carousel */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-8">
        {/* Sales Trends Chart */}
        <motion.div
          className="bg-[#0F1A09] p-4 md:p-6 rounded-lg w-full md:w-1/2 fade-element"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold">Revenue & Sales Trends</h3>
          <p className="text-[#FBFDFC] mt-1">
            Daily, weekly, and monthly revenue insights.
          </p>
          <div className="h-60">
            <Line data={salesData} />
          </div>
        </motion.div>

        {/* Vertical Scrolling Carousel */}
        <motion.div
          className="bg-[#0F1A09] p-4 md:p-6 rounded-lg w-full md:w-1/2 flex flex-col md:flex-row fade-element"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Carousel Heading */}
          <div className="w-full md:w-1/3 flex items-center justify-center mb-4 md:mb-0">
            <h3 className="text-xl font-semibold text-center">
              Top Selling Items of the Day
            </h3>
          </div>

          {/* Carousel Images */}
          <div className="w-full md:w-2/3 relative h-64 overflow-hidden">
            <motion.div
              className="flex flex-col items-center"
              animate={{ y: -currentIndex * 150 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {topSellingItems.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Top Selling Item"
                  className="w-40 h-40 rounded-lg object-cover mb-2"
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Customer Behavior Section */}
      <motion.div
        className="bg-[#0F1A09] p-4 md:p-6 rounded-lg mt-8 flex flex-col md:flex-row items-center justify-between gap-6 fade-element"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Pie Chart */}
        <div className="w-full md:w-1/3">
          <div className="relative flex flex-col items-center">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-40 h-40 flex items-center justify-center"
            >
              <Pie
                data={pieData}
                options={{ plugins: { legend: { display: false } } }}
              />
            </motion.div>
            <div className="mt-2">
              <ul className="flex space-x-4">
                {pieData.labels.map((label, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className="w-4 h-4 inline-block rounded-full mr-2"
                      style={{
                        backgroundColor:
                          pieData.datasets[0].backgroundColor[index],
                      }}
                    ></span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Customer Behavior Text */}
        <div className="flex-1 text-center md:text-left px-4 md:px-6">
          <h3 className="text-xl font-semibold">
            Customer Behavior & Engagement
          </h3>
          <motion.ul
            className="mt-3 space-y-2 text-[#FBFDFC] text-sm"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
          >
            {[
              " Peak Hours: 7 PM - 9 PM",
              " 60% of customers are repeat visitors",
              " Most ordered item: Mocha Latte",
              " Average visit duration: 45 mins",
              " High engagement with loyalty rewards",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="opacity-0"
                variants={{
                  visible: { opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Bar Chart */}
        <div className="w-full md:w-1/3">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Bar data={barData} />
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Analytics;