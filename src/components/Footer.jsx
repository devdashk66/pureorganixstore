import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-16 w-full max-w-6xl mx-auto px-4 py-8 border-t">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-heading-light dark:text-heading-dark mb-3">
            Pure Organix Store
          </h3>
          <p className="text-text-light dark:text-text-dark text-sm">
            Bringing nature&apos;s goodness to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-semibold text-lg text-heading-light dark:text-heading-dark mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2">
            <Link
              href="/about"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              Blog
            </Link>
            <Link
              href="/login"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-lg text-heading-light dark:text-heading-dark mb-3">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              <FaFacebook className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              <FaTiktok className="h-6 w-6" />
            </a>
            <a
              href="#"
              className="text-text-light dark:text-text-dark hover:text-primary dark:hover:text-primary-light"
            >
              <FaInstagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-8 border-t">
        <p className="text-sm text-text-light dark:text-text-dark">
          © {new Date().getFullYear()} Pure Organix Store Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
