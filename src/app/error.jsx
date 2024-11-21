"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaSeedling } from "react-icons/fa6";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex pt-20 justify-center bg-gradient-to-b px-4">
      <div className="text-center">
        {/* Animated Plant Icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 2,
          }}
          className="inline-block text-primary mb-8"
        >
          <FaSeedling className="w-20 h-20" />
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Don&apos;t worry! Like a garden after rain, we can help your
            experience bloom again.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-x-4 my-5"
        >
          <button
            onClick={() => reset()}
            className="inline-block px-6 py-3 bg-primary text-white rounded-full
                     hover:bg-primary/90 transition-colors duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                     active:translate-y-0"
          >
            Try Again
          </button>
          <button
            onClick={() => (window.location.href = "/")}
            className="inline-block px-6 py-3 bg-white text-primary border-2 border-primary 
                     rounded-full hover:bg-gray-50 transition-colors duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                     active:translate-y-0 dark:bg-zinc-800 dark:hover:bg-zinc-700
                     dark:border-primary/80"
          >
            Go Home
          </button>
        </motion.div>

        {/* Additional Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          If the problem persists, please contact our support team
        </motion.p>
      </div>
    </div>
  );
}
