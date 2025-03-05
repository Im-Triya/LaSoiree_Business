import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import OffersBillings from "./pages/OffersBillings";
import Analytics from "./pages/Analytics";
import VenueEngagement from "./pages/VenueEngagement";
import LoadingScreen from "./components/LoadingScreen"; 

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
        <div className="min-h-screen flex">
          <Sidebar />

          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/offersbillings" element={<OffersBillings />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/venueengagement" element={<VenueEngagement />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}
