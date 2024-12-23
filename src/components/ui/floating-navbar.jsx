"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const FloatingNav = ({ className }) => {
  const pathname = usePathname();

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Blog",
      link: "/blog",
    },

    {
      name: "About",
      link: "/about",
    },
  ];

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-zinc-400/20 rounded-full dark:bg-zinc-900/80 bg-white/80 backdrop-blur-md shadow-lg z-[5000] px-6 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`nav-${idx}`}
            href={navItem.link}
            className={cn(
              "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200",
              "dark:text-zinc-100 text-zinc-800",
              "hover:text-zinc-600 dark:hover:text-white",
              pathname === navItem.link &&
                "text-zinc-900 dark:text-white after:absolute after:inset-x-1 after:bottom-0 after:h-[2px] after:bg-gradient-to-r after:from-primary/0 after:via-primary/70 after:to-primary/0"
            )}
          >
            {navItem.name}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
