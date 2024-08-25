import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Star, Bell, MessageCircle } from "lucide-react";

const WhatsNewCarousel = ({ darkMode }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { icon: Star, content: "New community guidelines published" },
    { icon: Bell, content: "Upcoming webinar: 'Allyship in Action'" },
    {
      icon: MessageCircle,
      content: "New chat feature added for event attendees",
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className={`relative p-6 rounded-xl shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      } overflow-hidden`}
    >
      <h3
        className={`text-xl font-bold mb-4 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        What's New
      </h3>
      <div className="relative px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="flex items-center"
          >
            {React.createElement(slides[currentSlide].icon, {
              className: "w-6 h-6 mr-3 text-primary-500 flex-shrink-0",
            })}
            <p
              className={`${
                darkMode ? "text-gray-300" : "text-gray-600"
              } text-sm`}
            >
              {slides[currentSlide].content}
            </p>
          </motion.div>
        </AnimatePresence>
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        >
          <ChevronLeft className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-1"
        >
          <ChevronRight className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default WhatsNewCarousel;
