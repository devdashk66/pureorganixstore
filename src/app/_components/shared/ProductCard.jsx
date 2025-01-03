"use client";
import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import Link from "next/link";
import ToastNotification from "./ToastNotification";

const ProductCard = ({ product, index }) => {
  const { addToCart, cartCount, toastMessage, isToastVisible } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative group"
    >
      {/* Card Container */}
      <div
        className="relative bg-white/10 dark:bg-dark/10 backdrop-blur-md 
                    rounded-2xl p-6 transition-all duration-300
                    hover:shadow-xl hover:shadow-primary/20
                    border border-black/5 dark:border-white/10"
      >
        {/* Top Badge Section */}
        <div className="flex justify-between items-start mb-4">
          {product.isNew && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-3 py-1 bg-emerald-500/80 text-white text-xs rounded-full"
            >
              New Arrival
            </motion.span>
          )}
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-3 py-1 bg-primary/80 text-white text-xs rounded-full"
          >
            {product.discount}
          </motion.span>
        </div>

        {/* Product Image Placeholder */}
        <Link href={`/products/${product.id}`}>
          <div
            className="relative h-48 mb-4 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10
                      group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute z-20 inset-0 bg-white/5 rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
            <img
              src={product.image}
              alt="Product Name"
              className="w-full h-full object-cover"
            />
          </div>
        </Link>

        {/* Product Info */}
        <div className="space-y-3">
          <Link href={`/products/${product.id}`}>
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-lg font-semibold text-primary dark:text-primary"
            >
              {product.name}
            </motion.h3>
          </Link>
          <Link href={`/products?category=${product.category}`}>
            <p className="text-primary/60 dark:text-primary/60 text-sm">
              {product.category}
            </p>
          </Link>

          {/* Price Section with Add to Cart */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-lg">
                {product.price}
              </span>
              <span className="text-gray-400 dark:text-white/40 text-sm line-through">
                {product.originalPrice}
              </span>
            </div>

            {/* Add to Cart Button with Slide Effect */}
            <motion.button
              onClick={addToCart}
              initial="initial"
              whileHover="hover"
              className="px-4 py-1.5 bg-primary/80 hover:bg-primary text-white 
                       rounded-full transition-colors duration-300
                       overflow-hidden relative h-[32px] w-[90px] group z-20"
              variants={{
                hover: { width: "120px" },
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full">
                {/* Default State (Add + Arrow) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center gap-2"
                  variants={{
                    initial: { x: 0 },
                    hover: { x: -100 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Add <span>→</span>
                </motion.div>

                {/* Hover State (Add to Cart) */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center whitespace-nowrap"
                  variants={{
                    initial: { x: 100 },
                    hover: { x: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Add to Cart
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <ToastNotification message={toastMessage} isVisible={isToastVisible} />
    </motion.div>
  );
};

export default ProductCard;
