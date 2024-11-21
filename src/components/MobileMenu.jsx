import { useFocusTrap } from "@/hooks/useFocusTrap";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo, useCallback, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import ThemeSwitch from "./ThemeSwitch";

const SocialLink = memo(({ href, icon: Icon, label }) => (
  <div className="relative group">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="hover:text-primary transition-colors duration-300 hover:scale-110"
    >
      <Icon />
    </a>
    {/* Tooltip */}
    <div
      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 
                    text-xs font-medium text-white bg-black rounded-md opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap
                    pointer-events-none"
    >
      {label}
      {/* Tooltip Arrow */}
      <div
        className="absolute top-full left-1/2 -translate-x-1/2 border-4 
                      border-transparent border-t-black"
      />
    </div>
  </div>
));

SocialLink.displayName = "SocialLink";

const SOCIAL_LINKS = [
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://facebook.com/yourpage",
  },
  { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com/@yourpage" },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/yourpage",
  },
  { icon: FaWhatsapp, label: "WhatsApp", href: "https://wa.me/yourphone" },
  { icon: FaTwitter, label: "Twitter", href: "https://twitter.com/yourpage" },
];

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/login", label: "Login" },
];

const MobileMenu = ({ show, onShow }) => {
  const menuRef = useFocusTrap(show);
  const pathname = usePathname();

  const handleEscape = useCallback(
    (e) => {
      if (e.key === "Escape" && show) {
        onShow();
      }
    },
    [show, onShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="w-screen h-screen fixed top-0 right-0 z-50"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => onShow()}
            className="absolute inset-0 bg-black dark:bg-gray-600/50 backdrop-blur-sm"
          />

          {/* Menu Content */}
          <motion.div
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-0 right-0 h-screen bg-white dark:bg-zinc-900 p-5 w-72 shadow-xl"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between">
                <ThemeSwitch />
                <button
                  onClick={() => onShow()}
                  aria-label="Close menu"
                  className="bg-gray-200 dark:bg-black bg-opacity-50 p-1 rounded-md outline-none 
                           hover:bg-opacity-70 focus:ring-2 focus:ring-primary
                           transition-all duration-200"
                >
                  <IoMdClose className="text-3xl text-gray-800 dark:text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-10">
                <ul className="ml-5 flex flex-col gap-5 text-lg">
                  {NAV_ITEMS.map(({ href, label }) => (
                    <motion.li
                      key={href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                      onClick={onShow}
                    >
                      <Link
                        href={href}
                        className={`transition-colors duration-200 block text-gray-800 dark:text-white hover:text-primary
                          ${
                            (pathname === "/" && href === "/") ||
                            pathname === href
                              ? "!text-primary"
                              : "hover:text-primary"
                          }`}
                      >
                        {label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Description */}
              <motion.h3
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 text-sm text-gray-600 dark:text-white dark:opacity-40 leading-6"
              >
                Pure Organix offers premium organic products sourced directly
                from nature, ensuring purity and quality in every drop. Discover
                the essence of nature with us.
              </motion.h3>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 pb-5"
              >
                <h3 className="mb-4 text-sm border-b border-primary border-opacity-20 pb-3 text-gray-800 dark:text-white">
                  Follow Us
                </h3>
                <div className="flex justify-between gap-5 text-2xl text-gray-500 dark:text-gray-400">
                  {SOCIAL_LINKS.map((social) => (
                    <SocialLink key={social.label} {...social} />
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(MobileMenu);
