"use client";
import { motion } from "framer-motion";

const ShippingForm = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 
                 rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-lg font-semibold text-primary">Shipping Information</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300 sm:col-span-2"
        />
        <input
          type="text"
          placeholder="City"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="w-full px-4 py-2.5 rounded-2xl bg-primary/5 border border-primary/10
                   focus:border-primary/30 outline-none text-primary transition-colors duration-300"
        />
      </div>
    </motion.div>
  );
};

export default ShippingForm; 