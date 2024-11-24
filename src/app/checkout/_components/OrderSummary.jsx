"use client";
import { motion } from "framer-motion";

const OrderSummary = ({ orderItems }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 
               rounded-2xl p-6 h-fit space-y-4 lg:sticky lg:top-4"
    >
      <h2 className="text-lg font-semibold text-primary">Order Summary</h2>
      
      {/* Order Items */}
      <div className="space-y-3">
        {orderItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div className="w-16 h-16 rounded-lg overflow-hidden bg-primary/5">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow">
              <h3 className="text-sm font-medium text-primary">{item.name}</h3>
              <p className="text-xs text-primary/60">Qty: {item.quantity}</p>
            </div>
            <p className="text-sm font-medium text-primary">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>

      <div className="h-px bg-primary/10 my-4" />

      {/* Totals */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-primary/80">
          <span>Subtotal</span>
          <span>$13.97</span>
        </div>
        <div className="flex justify-between text-sm text-primary/80">
          <span>Delivery Charge</span>
          <span>$5.99</span>
        </div>
        <div className="h-px bg-primary/10 my-2" />
        <div className="flex justify-between text-base font-semibold text-primary">
          <span>Total</span>
          <span>$19.96</span>
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full mt-4 bg-primary text-white py-3 rounded-2xl
                 text-sm hover:bg-primary/90 transition-colors duration-300"
      >
        Confirm Order
      </motion.button>
    </motion.div>
  );
};

export default OrderSummary; 