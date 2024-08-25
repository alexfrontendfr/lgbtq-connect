import React from "react";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const YouAreNotAlone = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center p-8 rounded-lg shadow-lg ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Heart
          size={64}
          className={`${
            darkMode ? "text-pink-400" : "text-pink-500"
          } fill-current`}
        />
      </motion.div>
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`text-2xl font-bold mt-4 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        You are not alone
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`text-center mt-2 ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        We're here to support and celebrate you
      </motion.p>
    </motion.div>
  );
};

export default YouAreNotAlone;
