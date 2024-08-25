import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, MessageCircle, Heart, X, Plus } from "lucide-react";

const GroupCard = ({ group, darkMode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`p-6 rounded-xl shadow-lg ${
      darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    }`}
  >
    <h3 className="text-xl font-bold mb-2">{group.name}</h3>
    <div className="flex items-center mb-2">
      <Users className="w-5 h-5 mr-2 text-indigo-500" />
      <span>{group.members} members</span>
    </div>
    <p className="mb-4">{group.description}</p>
    <div className="flex justify-between items-center">
      <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-sm">
        {group.category}
      </span>
      <div className="flex space-x-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 transition-colors duration-200"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-200"
        >
          <Heart className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const GroupsPage = ({ darkMode }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "LGBTQ+ Book Club",
      members: 150,
      description:
        "A monthly book club focusing on LGBTQ+ literature and authors.",
      category: "Literature",
    },
    {
      id: 2,
      name: "Queer Gamers Unite",
      members: 300,
      description:
        "A community for LGBTQ+ gamers to connect and play together.",
      category: "Gaming",
    },
    {
      id: 3,
      name: "Rainbow Runners",
      members: 80,
      description:
        "A running group for LGBTQ+ individuals and allies of all fitness levels.",
      category: "Sports",
    },
    {
      id: 4,
      name: "Proud Parents Support",
      members: 200,
      description: "A support group for parents of LGBTQ+ children.",
      category: "Support",
    },
  ]);

  const handleCreateGroup = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowCreateForm(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <h2
        className={`text-3xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Discover Groups
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <GroupCard key={group.id} group={group} darkMode={darkMode} />
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center"
        onClick={() => setShowCreateForm(true)}
      >
        <Plus className="w-5 h-5 mr-2" />
        Create a New Group
      </motion.button>

      <AnimatePresence>
        {showCreateForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className={`bg-white dark:bg-gray-800 rounded-lg p-8 w-full max-w-md shadow-2xl ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Create New Group</h3>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  <X size={24} />
                </button>
              </div>
              <form onSubmit={handleCreateGroup} className="space-y-4">
                <div>
                  <label
                    htmlFor="groupName"
                    className="block text-sm font-medium mb-1"
                  >
                    Group Name
                  </label>
                  <input
                    type="text"
                    id="groupName"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="groupDescription"
                    className="block text-sm font-medium mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id="groupDescription"
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="groupCategory"
                    className="block text-sm font-medium mb-1"
                  >
                    Category
                  </label>
                  <select
                    id="groupCategory"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="support">Support</option>
                    <option value="social">Social</option>
                    <option value="activism">Activism</option>
                    <option value="education">Education</option>
                  </select>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 shadow-lg"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Create Group
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default GroupsPage;
