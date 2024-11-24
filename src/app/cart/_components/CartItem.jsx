"use client";
import { motion } from "framer-motion";
import { MdAdd, MdDelete, MdRemove } from "react-icons/md";

const CartItem = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm border border-primary/10 rounded-xl sm:rounded-2xl 
                p-3 sm:p-4 mb-3 sm:mb-4 hover:border-primary/30 transition-colors duration-300 group"
    >
      <div className="flex items-center gap-3 sm:gap-4">
        {/* Product Image */}
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden bg-primary/5">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="flex-grow min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-primary truncate">
            {item.name}
          </h3>
          <p className="text-xs sm:text-sm text-primary/60">
            ${item.price} per {item.weight}
          </p>

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 sm:gap-3 mt-2">
            <button className="p-1 hover:bg-primary/10 rounded-full transition-colors">
              <MdRemove className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span className="text-primary text-sm sm:text-base w-6 sm:w-8 text-center">
              {item.quantity}
            </span>
            <button className="p-1 hover:bg-primary/10 rounded-full transition-colors">
              <MdAdd className="text-primary w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Price and Remove */}
        <div className="text-right flex flex-col items-end">
          <p className="text-base sm:text-lg font-semibold text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-2 p-1.5 rounded-full bg-red-500/10 hover:bg-red-500/20 
                     group/delete transition-all duration-300"
          >
            <MdDelete
              className="w-4 h-4 sm:w-5 sm:h-5 text-red-500/70 
                               group-hover/delete:text-red-500 transition-colors duration-300"
            />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
