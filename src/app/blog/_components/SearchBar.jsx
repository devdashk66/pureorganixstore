"use client";
import { motion } from "framer-motion";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2.5 pl-12 rounded-2xl bg-primary/5 border border-primary/10
                 focus:border-primary/30 outline-none text-primary"
      />
      <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 w-5 h-5" />
    </div>
  );
};

export default SearchBar; 