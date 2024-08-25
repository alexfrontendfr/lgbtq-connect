import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const NotificationAlert = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="mb-4 bg-purple-200 border-l-4 border-purple-600 p-4 rounded-md relative shadow-lg"
    >
      <h3 className="text-purple-800 font-semibold text-lg">New Message</h3>
      <p className="text-purple-700 mt-1">
        You have a new message in the "Coming Out Stories" discussion.
      </p>
      <motion.button
        onClick={onClose}
        className="absolute top-2 right-2 p-1 rounded-full hover:bg-purple-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <X className="h-5 w-5 text-purple-600" />
      </motion.button>
    </motion.div>
  );
};

export default NotificationAlert;
