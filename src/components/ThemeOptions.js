import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette } from "lucide-react";

const ThemeOptions = ({ currentTheme, applyTheme, darkMode }) => {
  const [showThemeCustomizer, setShowThemeCustomizer] = useState(false);

  const themes = [
    { name: "Default", colors: { primary: "violet", secondary: "fuchsia" } },
    { name: "Ocean", colors: { primary: "blue", secondary: "teal" } },
    { name: "Sunset", colors: { primary: "orange", secondary: "red" } },
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setShowThemeCustomizer(!showThemeCustomizer)}
        className={`p-2 rounded-full ${
          darkMode ? "bg-gray-700" : "bg-gray-200"
        } transition-colors duration-200`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette
          className={`h-6 w-6 ${
            darkMode ? "text-indigo-400" : "text-indigo-600"
          }`}
        />
      </motion.button>
      <AnimatePresence>
        {showThemeCustomizer && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
              darkMode ? "bg-gray-700" : "bg-white"
            } ring-1 ring-black ring-opacity-5 z-50`}
          >
            <div className="py-1">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => {
                    applyTheme(theme.colors);
                    setShowThemeCustomizer(false);
                  }}
                >
                  <span className="flex items-center">
                    <span
                      className={`w-3 h-3 rounded-full mr-2 bg-${theme.colors.primary}-500`}
                    ></span>
                    {theme.name}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeOptions;
