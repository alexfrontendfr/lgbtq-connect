import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import QuoteDisplay from "./QuoteDisplay";
import ChatPage from "./ChatPage";
import EventsPage from "./EventsPage";
import GroupsPage from "./GroupsPage";
import WhatsNewCarousel from "./WhatsNewCarousel";
import YouAreNotAlone from "./YouAreNotAlone";

const tabVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const ContentSection = ({ activeTab, darkMode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeTab}
        variants={tabVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {activeTab === "home" ? (
          <div className="space-y-8">
            <QuoteDisplay darkMode={darkMode} />
            <WhatsNewCarousel darkMode={darkMode} />
            {/* Add more home content here */}
          </div>
        ) : activeTab === "chat" ? (
          <ChatPage darkMode={darkMode} />
        ) : activeTab === "events" ? (
          <EventsPage darkMode={darkMode} />
        ) : activeTab === "groups" ? (
          <GroupsPage darkMode={darkMode} />
        ) : (
          <div className="text-center py-8">
            <h2
              className={`text-3xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Content
            </h2>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              This is a placeholder for the {activeTab} content.
            </p>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentSection;
