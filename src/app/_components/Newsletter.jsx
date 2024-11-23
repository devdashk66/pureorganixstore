"use client";
import { motion } from "framer-motion";
import AnimatedTitle from './shared/AnimatedTitle';

const Newsletter = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedTitle 
          title="Stay Updated" 
          subtitle="NEWSLETTER" 
          accent="rose"
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto backdrop-blur-sm bg-white/30 dark:bg-dark/30 rounded-lg p-8"
        >
          <p className="mb-8 dark:text-gray-300">
            Subscribe to our newsletter for fresh updates and exclusive offers
          </p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-full flex-1 max-w-md dark:bg-dark-secondary dark:text-white dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-semibold"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
