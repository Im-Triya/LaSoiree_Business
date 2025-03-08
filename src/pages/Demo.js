import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import demoVideo from "../assets/demo/demo.mp4"; // Replace with your video path
import Footer from "../components/Footer"; // Import your Footer component

function Demo() {
  const [isPlaying, setIsPlaying] = useState(false); // State to track if video is playing
  const videoRef = useRef(null); // Ref to access the video element

  // Function to handle play/pause button click
  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause(); // Pause the video
      } else {
        videoRef.current.play(); // Play the video
      }
      setIsPlaying(!isPlaying); // Toggle the play/pause state
    }
  };

  // Add scroll event listener for fade-in animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-element");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isVisible) {
          el.style.transition = "opacity 0.5s ease-in-out";
          el.style.opacity = 1;
        } else {
          el.style.transition = "opacity 0.5s ease-in-out";
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
      {/* Header */}
      <motion.h1
        className="text-2xl text-[#09D133] md:text-5xl font-bold text-center mb-6 mt-10 fade-element"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {"Experience the Business Side App in Action"
          .split(" ")
          .map((word, index) => (
            <motion.span
              key={index}
              className={`inline-block ${
                word === "Business" || word === "Action"
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

      {/* Video Container */}
      <div className="flex flex-col items-center mt-2">
        {/* Video Frame */}
        <div
          className="w-[200px] h-[400px] bg-white rounded-[20px] shadow-2xl overflow-hidden relative border-2 border-white" 
        >
          {/* Video */}
          <video
            ref={videoRef}
            id="demo-video"
            src={demoVideo}
            controls={false} // Hide default controls
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Play/Pause Button (Positioned Below the Video) */}
        <button
          onClick={handlePlayPause}
          className="mt-4 bg-[#09D133] rounded-full w-20 h-20 flex justify-center items-center shadow-lg hover:bg-[#07a028] transition-all"
        >
          {isPlaying ? (
            <i className="fa-solid fa-pause text-white text-xl">Pause</i> // Pause icon
          ) : (
            <i className="fa-solid fa-play text-white text-xl">Play</i> // Play icon
          )}
        </button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Demo;