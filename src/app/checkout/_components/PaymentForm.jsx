"use client";
import { motion } from "framer-motion";

const PaymentForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 
                 rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-primary">Payment Method</h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Card Number"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="MM/YY"
            className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                     focus:border-primary/30 outline-none text-primary transition-colors duration-300"
          />
          <input
            type="text"
            placeholder="CVC"
            className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                     focus:border-primary/30 outline-none text-primary transition-colors duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentForm; 