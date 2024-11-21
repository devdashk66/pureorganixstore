"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaLeaf } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import ThemeSwitch from "./ThemeSwitch";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <nav className="container mx-auto py-3">
      <section className="flex items-center justify-between mx-6 relative border-b border-primary border-opacity-20">
        <Link className="py-1" href="/">
          <FaLeaf className="w-12 h-12 text-primary dark:text-primary-light" />
        </Link>
        <div className="opacity-0">
          <ThemeSwitch />
        </div>
        <div className="flex gap-3 items-center">
          <span className="uppercase text-primary tracking-widest">Menu</span>
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
    </nav>
  );
};

export default NavBar;
