import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Offers from "./pages/Offers";
import Billing from "./pages/Billing";
import Analytics from "./pages/Analytics";
import Venue from "./pages/Venue";
import Engagement from "./pages/Engagement";
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
          {/* Sidebar with Logo */}
          <Sidebar />

          {/* Page Content */}
          <div className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/offers" element={<Offers />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/engagement" element={<Engagement />} />
            </Routes>
          </div>
        </div>
      )}
    </Router>
  );
}
