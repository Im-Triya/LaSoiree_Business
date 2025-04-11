import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OffersBillings from "./pages/OffersBillings";
import Analytics from "./pages/Analytics";
import VenueEngagement from "./pages/VenueEngagement";
import Demo from "./pages/Demo";
// import LoadingScreen from "./components/LoadingScreen";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {/* {isLoading ? (
        <LoadingScreen />
      ) : (
        <AppContent />
      )} */}
       <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for md in Tailwind
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Conditionally render Navbar or Sidebar */}
      {isMobile ? <Sidebar /> : <Navbar />}

      <div className="flex-1 p-5">
        <ScrollToTop />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PageTransition>
                  <Dashboard />
                </PageTransition>
              }
            />
            <Route
              path="/offersbillings"
              element={
                <PageTransition>
                  <OffersBillings />
                </PageTransition>
              }
            />
            <Route
              path="/analytics"
              element={
                <PageTransition>
                  <Analytics />
                </PageTransition>
              }
            />
            <Route
              path="/venueengagement"
              element={
                <PageTransition>
                  <VenueEngagement />
                </PageTransition>
              }
            />

          <Route
              path="/demo"
              element={
                <PageTransition>
                  <Demo />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}