import React, { useState } from "react";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchBar = ({ darkMode }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="relative mb-8"
    >
      <motion.div
        animate={{ scale: isFocused ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative"
      >
        <input
          type="text"
          placeholder="Search communities, events..."
          className={`w-full py-3 px-5 pr-12 rounded-full border ${
            darkMode
              ? "bg-gray-800 border-gray-700 text-white"
              : "bg-white border-gray-300 text-gray-800"
          } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-sm`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search
          className={`absolute right-4 top-3.5 h-5 w-5 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        />
      </motion.div>
      <AnimatePresence>
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute z-10 w-full mt-2 ${
              darkMode ? "bg-gray-800" : "bg-white"
            } rounded-md shadow-lg`}
          >
            <div className="p-4">
              <p
                className={`text-sm ${
                  darkMode ? "text-gray-300" : "text-gray-500"
                }`}
              >
                Showing results for "{searchTerm}"...
              </p>
              {/* Add search results here */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SearchBar;
