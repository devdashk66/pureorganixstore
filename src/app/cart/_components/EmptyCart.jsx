"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowForward, MdShoppingBasket } from "react-icons/md";

const EmptyCart = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center md:py-12 px-4"
    >
      {/* Animated Basket Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-primary/5 rounded-full 
                  flex items-center justify-center mb-6 sm:mb-8"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <MdShoppingBasket className="w-12 h-12 sm:w-16 sm:h-16 text-primary/60" />
        </motion.div>
      </motion.div>

      {/* Empty Cart Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-2">
          Your Organic Basket is Empty
        </h2>
        <p className="text-sm sm:text-base text-primary/60 max-w-md mx-auto mb-8">
          Looks like you haven&apos;t added any organic goodness to your basket
          yet. Let&apos;s fill it with fresh, healthy products!
        </p>
      </motion.div>

      {/* Decorative Elements */}
      <div className="relative max-w-xs mx-auto mb-8">
        <motion.div
          className="absolute -left-4 -top-4 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-4 -bottom-4 w-20 h-20 bg-primary/5 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2
                     hover:bg-primary/90 transition-colors duration-300"
          >
            Start Shopping
            <MdArrowForward className="w-5 h-5" />
          </motion.button>
        </Link>

        <Link href="/categories">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 border border-primary/20 rounded-xl
                     hover:bg-primary/5 transition-colors duration-300
                     text-primary flex items-center gap-2"
          >
            Browse Categories
            <MdArrowForward className="w-5 h-5" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default EmptyCart;
