"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const CheckoutSummary = ({ subtotal, shipping, total }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl 
               p-4 sm:p-6 h-fit hover:border-primary/30 transition-colors duration-300"
    >
      <h2 className="text-lg sm:text-xl font-semibold text-primary mb-4">
        Order Summary
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between text-sm sm:text-base text-primary/80">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base text-primary/80">
          <span>Delivery Charge</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="h-px bg-primary/10 my-3 sm:my-4" />
        <div className="flex justify-between text-base sm:text-lg font-semibold text-primary">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
      <Link href="/checkout">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-4 sm:mt-6 bg-primary text-white py-2.5 sm:py-3 rounded-lg sm:rounded-xl
                 text-sm sm:text-base hover:bg-primary/90 transition-colors duration-300"
        >
          Proceed to Checkout
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default CheckoutSummary;
