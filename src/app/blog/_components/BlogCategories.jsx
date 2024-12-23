"use client";
import { motion } from "framer-motion";

const BlogCategories = ({ categories, selected, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-xl text-sm transition-colors duration-300
                   ${selected === category 
                     ? 'bg-primary text-white' 
                     : 'bg-primary/5 text-primary hover:bg-primary/10'}`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default BlogCategories; 