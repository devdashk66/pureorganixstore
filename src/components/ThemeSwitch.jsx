"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  // Modified useEffect to check system preferences
  useEffect(() => {
    // Check for saved theme first, then fallback to system preference
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      setTheme(systemTheme);
      document.documentElement.classList.toggle("dark", systemTheme === "dark");
    }

    // Add listener for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("theme")) {
        const newTheme = e.matches ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="relative w-14 h-8 flex items-center justify-center rounded-full bg-primary/20 dark:bg-gray-700 duration-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all"
    >
      <motion.div
        className="absolute bg-primary dark:bg-white w-6 h-6 rounded-full flex items-center justify-center shadow-md"
        layout
        transition={spring}
        animate={{
          x: theme === "light" ? -12 : 12,
        }}
      >
        {theme === "light" ? (
          <HiOutlineSun className="w-4 h-4 text-white rotate-0 transition-all" />
        ) : (
          <HiOutlineMoon className="w-4 h-4 text-gray-800 rotate-0 transition-all" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeSwitch;
