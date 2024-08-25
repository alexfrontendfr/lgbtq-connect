import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import quoteGenerator from "./quoteGenerator";

const QuoteDisplay = ({ darkMode, className }) => {
  const [quote, setQuote] = useState("");

  const generateNewQuote = () => {
    const newQuote = quoteGenerator();
    setQuote(newQuote);
  };

  useEffect(() => {
    generateNewQuote();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${className} overflow-hidden rounded-xl shadow-lg`}
    >
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
        <h3 className="text-2xl font-bold text-white mb-4">
          Inspirational Quote
        </h3>
        <AnimatePresence mode="wait">
          <motion.p
            key={quote}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-white italic mb-4"
          >
            {quote}
          </motion.p>
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-purple-100"
          onClick={generateNewQuote}
        >
          New Quote
        </motion.button>
      </div>
    </motion.div>
  );
};

export default QuoteDisplay;
