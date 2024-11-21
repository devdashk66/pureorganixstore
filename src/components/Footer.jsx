import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 w-full max-w-6xl mx-auto px-4 py-8 border-t border-green-200 dark:border-green-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-3">
            Pure Organix Store
          </h3>
          <p className="text-green-600 dark:text-green-400 text-sm">
            Bringing nature&apos;s goodness to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-3">
            Quick Links
          </h3>
          <div className="flex flex-col space-y-2">
            <a
              href="#"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Social Links - Updated Section */}
        <div className="text-center md:text-right">
          <h3 className="font-semibold text-lg text-green-700 dark:text-green-300 mb-3">
            Connect With Us
          </h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://instagram.com/pureorganixstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 relative group"
            >
              <span className="sr-only">Instagram</span>
              <FaInstagram className="h-6 w-6 relative z-10" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                Follow us on Instagram
              </span>
            </a>
            <a
              href="https://facebook.com/pureorganixstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 relative group"
            >
              <span className="sr-only">Facebook</span>
              <FaFacebook className="h-6 w-6 relative z-10" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                Like us on Facebook
              </span>
            </a>
            <a
              href="https://tiktok.com/@pureorganixstore"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200 relative group"
            >
              <span className="sr-only">TikTok</span>
              <FaTiktok className="h-6 w-6 relative z-10" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-20 pointer-events-none">
                Follow us on TikTok
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-8 border-t border-green-200 dark:border-green-800">
        <p className="text-sm text-green-600 dark:text-green-400">
          © {new Date().getFullYear()} Pure Organix Store Ltd. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
