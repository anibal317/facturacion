'use client'
import { ArrowUpFromDot } from "lucide-react";
import { useEffect, useState } from "react";
import './onTop.css';

interface OnTopProps {
  positionX?: string;
  positionY?: string;
  showThreshold?: number; // Umbral de scroll para mostrar el botón
}

export default function OnTop({ 
  positionX = "2rem", 
  positionY = "2rem",
  showThreshold = 300 
}: OnTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [showThreshold]);

  return (
    <div 
      style={{ 
        bottom: positionY, 
        right: positionX,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease'
      }} 
      className="z-50 fixed flex justify-center items-center bg-white/80 hover:bg-white shadow-lg hover:shadow-xl rounded-full w-12 h-12 transition-all duration-300 cursor-pointer"
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <ArrowUpFromDot className="text-gray-800" size={24} />
    </div>
  );
}