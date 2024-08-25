import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import NotificationAlert from "./components/NotificationAlert";
import ContentSection from "./components/ContentSection";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, Heart } from "lucide-react";
import useTheme from "./components/useTheme";
import LoadingSkeleton from "./components/LoadingSkeleton";
import YouAreNotAlone from "./components/YouAreNotAlone";

function App() {
  const { darkMode, theme, toggleDarkMode, applyTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("home");
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (isLoading) {
    return (
      <div
        className={`flex items-center justify-center h-screen ${
          darkMode ? "bg-gray-900" : "bg-gray-100"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`text-center ${darkMode ? "text-white" : "text-gray-800"}`}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 mb-4 border-t-4 border-b-4 border-indigo-500 rounded-full"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold"
          >
            LGBTQ+ Connect
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-2"
          >
            Loading your inclusive space...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      <Header
        onNotificationClick={handleNotificationClick}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        applyTheme={applyTheme}
        currentTheme={theme}
      />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {showNotification && (
          <NotificationAlert
            onClose={() => setShowNotification(false)}
            darkMode={darkMode}
          />
        )}
        <SearchBar darkMode={darkMode} />
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`w-full text-left p-2 rounded-md ${
              darkMode ? "bg-gray-800" : "bg-white"
            } shadow-md mb-4`}
          >
            {mobileMenuOpen ? (
              <X className="inline-block mr-2" />
            ) : (
              <Menu className="inline-block mr-2" />
            )}
            Menu
          </button>
          {mobileMenuOpen && (
            <Navbar
              activeTab={activeTab}
              onTabClick={handleTabClick}
              darkMode={darkMode}
              isMobile={true}
            />
          )}
        </div>
        <div className="hidden md:block">
          <Navbar
            activeTab={activeTab}
            onTabClick={handleTabClick}
            darkMode={darkMode}
          />
        </div>
        {activeTab === "home" && <YouAreNotAlone darkMode={darkMode} />}
        <ContentSection activeTab={activeTab} darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
