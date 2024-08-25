import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const RSVPButton = ({ darkMode }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setShowForm(false);
  };

  const events = [
    "Pride Parade 2024",
    "LGBTQ+ Film Festival",
    "Queer Art Exhibition",
    "Rainbow Run 5K",
  ];

  return (
    <>
      <motion.button
        onClick={() => setShowForm(true)}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        RSVP Now
      </motion.button>
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex z-50"
            onClick={(e) => e.target === e.currentTarget && setShowForm(false)}
          >
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              className={`w-full max-w-md ml-auto h-full ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } p-8 overflow-y-auto`}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">RSVP for Event</h2>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="event"
                    className="block text-sm font-medium mb-1"
                  >
                    Select Event
                  </label>
                  <select
                    id="event"
                    required
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : ""
                    }`}
                  >
                    <option value="">Choose an event</option>
                    {events.map((event, index) => (
                      <option key={index} value={event}>
                        {event}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : ""
                    }`}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                      darkMode ? "bg-gray-700 border-gray-600" : ""
                    }`}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit RSVP
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RSVPButton;
