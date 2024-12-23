"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const MobileFilterDrawer = ({ isOpen, onClose, children, sortDropdown }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-y-0 left-0 w-[300px] bg-background border-r border-primary/10
                     z-50 lg:hidden overflow-y-auto"
          >
            <div className="p-4">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-primary/10 rounded-full
                         transition-colors duration-300"
              >
                <MdClose className="w-6 h-6 text-primary" />
              </button>

              {/* Title */}
              <h2 className="text-xl font-semibold text-primary mb-6">
                Filters
              </h2>

              {/* Sort Dropdown */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-primary mb-3">
                  Sort By
                </h3>
                {sortDropdown}
              </div>

              {/* Divider */}
              <div className="h-px bg-primary/10 my-6" />

              {/* Filter Content */}
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileFilterDrawer;
