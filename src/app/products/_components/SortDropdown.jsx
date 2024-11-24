"use client";
import { motion } from "framer-motion";

const SortDropdown = ({ onSort }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <select
        onChange={(e) => onSort(e.target.value)}
        className="px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                 focus:border-primary/30 outline-none text-primary"
      >
        <option value="newest">Newest First</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="popular">Most Popular</option>
      </select>
    </motion.div>
  );
};

export default SortDropdown;
