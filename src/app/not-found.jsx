"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLeaf } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="min-h-screen flex pt-20 justify-center  px-4">
      <div className="text-center">
        {/* Animated Leaf Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-primary mb-8"
        >
          <FaLeaf className="w-20 h-20" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-8xl font-bold text-primary mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Oops! Looks like this page has gone organic
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Just like our products, this page is naturally unavailable.
            Let&apos;s get you back to exploring our organic treasures.
          </p>
        </motion.div>

        {/* Return Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-full
                     hover:bg-primary/90 transition-colors duration-300
                     shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
                     active:translate-y-0"
          >
            Return to Homepage
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
