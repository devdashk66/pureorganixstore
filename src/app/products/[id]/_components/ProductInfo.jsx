"use client";
import ToastNotification from "@/app/_components/shared/ToastNotification";
import { useCart } from "@/app/context/CartContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const ProductInfo = ({ product }) => {
  const { addToCart, toastMessage, isToastVisible } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-6"
    >
      <div>
        <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
        <p className="text-primary/60 mt-2">{product.category}</p>
        <p className="text-2xl font-semibold text-primary mt-4">
          ${product.price}
        </p>
        <p className="text-primary/80 leading-relaxed mt-4">
          {product.description}
        </p>
      </div>

      {/* Quantity Selector */}
      <div className="flex items-center gap-4">
        <span className="text-primary/80">Quantity:</span>
        <div className="flex items-center gap-3">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => quantity > 1 && setQuantity((q) => q - 1)}
            className="p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary/10
                     transition-colors duration-300"
          >
            <MdRemove />
          </motion.button>
          <span className="w-8 text-center text-primary">{quantity}</span>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setQuantity((q) => q + 1)}
            className="p-2 rounded-xl bg-primary/5 text-primary hover:bg-primary/10
                     transition-colors duration-300"
          >
            <MdAdd />
          </motion.button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <motion.button
        onClick={addToCart}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-3 bg-primary text-white rounded-2xl text-lg font-medium
                 hover:bg-primary/90 transition-colors duration-300"
      >
        Add to Cart
      </motion.button>

      {/* Toast Notification */}
      <ToastNotification message={toastMessage} isVisible={isToastVisible} />
    </motion.div>
  );
};

export default ProductInfo;
