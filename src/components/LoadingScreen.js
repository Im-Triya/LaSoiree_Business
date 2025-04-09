import { useEffect } from "react";
import loadingGif from "../assets/loading/loading.gif";

export default function LoadingScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 10000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-[#123524]">
      <img 
        src={loadingGif} 
        alt="Loading..." 
        className="w-full h-full object-cover" 
      />
    </div>
  );
}