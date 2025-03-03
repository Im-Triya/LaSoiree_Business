import { useEffect } from "react";
import loadingGif from "../assets/loading/loading.gif"; // Replace with your GIF path

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    // Simulate loading time (e.g., 3 seconds)
    const timer = setTimeout(() => {
      onFinish();
    }, 10000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#123524]">
      <img src={loadingGif} alt="Loading..." className="w-40 h-40" />
    </div>
  );
}
