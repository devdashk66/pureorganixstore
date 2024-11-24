"use client";
import { motion } from "framer-motion";
import { MdFilterList } from "react-icons/md";

const FilterButton = ({ onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
               hover:border-primary/30 text-primary flex items-center gap-2
               transition-colors duration-300 lg:hidden"
    >
      <MdFilterList className="w-5 h-5" />
      <span className="hidden sm:inline">Filters</span>
    </motion.button>
  );
};

export default FilterButton;
