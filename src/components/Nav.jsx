"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import Cart from "./Cart";
import MobileMenu from "./MobileMenu";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full mx-auto p-3"
    >
      <section className="flex items-center justify-between mx-6 relative border-b border-primary border-opacity-20">
        <div>
          <Link
            className="py-1 text-2xl md:text-3xl font-bold text-heading-light dark:text-heading-dark"
            href="/"
          >
            Organix
          </Link>
        </div>
        <div className="opacity-0">
          <ThemeSwitch />
        </div>
        <div className="flex gap-3 items-center justify-between">
          <Cart />
          <button
            onClick={handleShow}
            aria-expanded={show}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="p-2 hover:bg-primary hover:bg-opacity-20 rounded-lg transition-colors dark:hover:bg-white dark:hover:bg-opacity-20 duration-300"
          >
            <FaBars className="text-3xl text-heading-light dark:text-heading-dark" />
          </button>
        </div>
      </section>

      <MobileMenu id="mobile-menu" show={show} onShow={handleShow} />
    </motion.nav>
  );
};

export default NavBar;
