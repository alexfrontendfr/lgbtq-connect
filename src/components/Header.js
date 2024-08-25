import React from "react";
import { motion } from "framer-motion";
import { Bell, Heart, Menu, X, Moon, Sun } from "lucide-react";
import RSVPButton from "./RSVPButton";
import ThemeOptions from "./ThemeOptions";

const Header = ({
  onNotificationClick,
  darkMode,
  toggleDarkMode,
  applyTheme,
  currentTheme,
}) => {
  return (
    <header className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Heart
                className={`h-8 w-8 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
                fill="currentColor"
              />
            </motion.div>
            <h1
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              href="#"
            >
              LGBTQ+ Connect
            </h1>
          </motion.div>
          <div className="hidden md:flex items-center space-x-4">
            <RSVPButton darkMode={darkMode} />
            <motion.button
              onClick={onNotificationClick}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors duration-200`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bell
                className={`h-6 w-6 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                }`}
              />
            </motion.button>
            <motion.button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              } transition-colors duration-200`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? (
                <Sun className="h-6 w-6 text-yellow-400" />
              ) : (
                <Moon className="h-6 w-6 text-indigo-600" />
              )}
            </motion.button>
            <ThemeOptions
              currentTheme={currentTheme}
              applyTheme={applyTheme}
              darkMode={darkMode}
            />
          </div>
          <motion.button
            className="md:hidden p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu
              className={`h-6 w-6 ${
                darkMode ? "text-white" : "text-indigo-600"
              }`}
            />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
