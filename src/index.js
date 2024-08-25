import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { motion } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <App />
    </motion.div>
  </React.StrictMode>
);
