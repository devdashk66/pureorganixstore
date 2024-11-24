"use client";
import { motion } from "framer-motion";

const FilterSidebar = ({ categories, onCategoryChange, onPriceChange }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                onChange={(e) =>
                  onCategoryChange(category.id, e.target.checked)
                }
                className="rounded-md text-primary focus:ring-primary"
              />
              <span className="text-primary/80">{category.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="100"
            onChange={(e) => onPriceChange(e.target.value)}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-primary/60">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterSidebar;
