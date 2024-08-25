import React from "react";
import { Users, MessageCircle, Calendar, Home } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = ({ activeTab, onTabClick, darkMode, isMobile }) => {
  const tabs = [
    { name: "Home", icon: Home, description: "Back to homepage" },
    { name: "Chat", icon: MessageCircle, description: "Join conversations" },
    { name: "Events", icon: Calendar, description: "Upcoming events" },
    { name: "Groups", icon: Users, description: "Find your community" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={`mb-8 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } rounded-xl shadow-md p-2 ${
        isMobile ? "flex flex-col" : "flex justify-between"
      }`}
    >
      {tabs.map((tab) => (
        <motion.button
          key={tab.name}
          onClick={() => onTabClick(tab.name.toLowerCase())}
          className={`flex items-center py-2 px-4 rounded-full transition-all duration-300 ${
            isMobile ? "mb-2 justify-start" : ""
          } ${
            activeTab === tab.name.toLowerCase()
              ? "bg-indigo-600 text-white"
              : `${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } hover:bg-indigo-100`
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <tab.icon className="w-5 h-5 mr-2" />
          <span className="text-sm">{tab.name}</span>
          {isMobile && (
            <span className="ml-2 text-xs opacity-70">{tab.description}</span>
          )}
        </motion.button>
      ))}
    </motion.nav>
  );
};

export default Navbar;
