"use client";
import { motion } from "framer-motion";

const ToastNotification = ({ message, isVisible }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: -40 }}
      animate={
        isVisible
          ? { opacity: 1, translateY: -20 }
          : { opacity: 0, translateY: 0 }
      }
      transition={{ duration: 0.3 }}
      className={`fixed bottom-5 right-5 bg-primary text-white !rounded-md p-4 shadow-lg transition-opacity duration-300 z-50 ${
        isVisible ? "block" : "hidden"
      }`}
    >
      {message}
    </motion.div>
  );
};

export default ToastNotification;
