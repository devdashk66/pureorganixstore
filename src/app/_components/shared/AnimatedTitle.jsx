"use client";
import { motion } from "framer-motion";

const AnimatedTitle = ({ title, subtitle, accent = "primary" }) => {
  return (
    <div className="text-center mb-16 relative">
      {/* Background accent text */}
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className={`absolute inset-0 text-6xl sm:text-7xl md:text-8xl font-bold text-${accent}/10 flex items-center justify-center -z-10`}
      >
        {subtitle}
      </motion.span>

      {/* Main title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <h2
          className={`text-3xl sm:text-4xl font-bold text-${accent} dark:text-white`}
        >
          {title}
        </h2>

        {/* Decorative lines */}
        <div className="flex justify-center items-center gap-3 mt-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`h-[2px] bg-${accent}`}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className={`w-2 h-2 rounded-full bg-${accent}`}
          />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className={`h-[2px] bg-${accent}`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedTitle;
