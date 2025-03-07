import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OffersBillings from "./pages/OffersBillings";
import Analytics from "./pages/Analytics";
import VenueEngagement from "./pages/VenueEngagement";
import LoadingScreen from "./components/LoadingScreen";
import PageTransition from "./components/PageTransition";
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component

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
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <AppContent />
      )}
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <ScrollToTop /> {/* Add ScrollToTop here */}
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
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}