import React from "react";
import { motion } from "framer-motion";

const LoadingSkeleton = ({ darkMode }) => {
  const skeletonClass = darkMode ? "bg-gray-700" : "bg-gray-200";

  return (
    <div className="space-y-4">
      <motion.div
        className={`h-8 w-3/4 ${skeletonClass} rounded`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`h-64 ${skeletonClass} rounded-lg`}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            className={`h-48 ${skeletonClass} rounded-lg`}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
