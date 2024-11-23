"use client";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const controls = useAnimationControls();
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  // Array of titles for rotation
  const titles = [
    "Pure Nature, Delivered to Your Door",
    "Organic Goodness, Always Fresh",
    "From Farm to Table, Every Day",
    "Fresh Organic Food, Just for You",
    "Healthy Living, Made Simple",
  ];

  // Initial load - show title immediately
  useEffect(() => {
    controls.start({ opacity: 1 });
  }, []);

  // Start rotation after initial load
  useEffect(() => {
    const interval = setInterval(() => {
      controls
        .start({
          opacity: 0,
          y: 20, // Slide down while fading out
          transition: { duration: 0.3 },
        })
        .then(() => {
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          controls.start({
            opacity: 1,
            y: 0, // Slide up while fading in
            transition: { duration: 0.3 },
          });
        });
    }, 4000); // 4 seconds interval

    return () => clearInterval(interval);
  }, [controls]);

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-gradient-to-b from-primary/10 via-white to-transparent dark:from-black/10 dark:via-primary/5 dark:to-transparent py-12 sm:py-16 md:py-20 overflow-x-hidden">
      <div className="absolute inset-0 opacity-30 bg-[url('/noise.png')] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.h1
            initial={{ opacity: 1 }}
            animate={controls}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-heading-light dark:text-heading-dark min-h-[80px] sm:min-h-[100px] md:min-h-[120px] leading-tight md:leading-snug"
          >
            {titles[currentTitleIndex].split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}-${currentTitleIndex}`}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: 0.3,
                  delay: index * 0.02,
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="text-base sm:text-lg md:text-xl text-text-light dark:text-text-dark mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto"
          >
            Discover our handpicked selection of organic products, grown with
            care and delivered fresh to nourish your healthy lifestyle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="space-x-3 sm:space-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-colors"
            >
              <Link href="/products">Shop Now</Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary hover:bg-primary-light/10 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full font-semibold transition-colors dark:border-primary-light dark:text-primary-light"
            >
              <Link href="/blog">Learn More</Link>
            </motion.button>
          </motion.div>

          {/* Added floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="!mt-12 flex justify-center space-x-8"
          >
            {["Organic", "Fresh", "Natural"].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ y: 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: index * 0.2,
                }}
                className="bg-white/80 dark:bg-dark/80 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg"
              >
                <span className="text-primary dark:text-primary-light font-medium">
                  {badge}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Existing decorative elements */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute bottom-0 left-0 w-24 h-24 -mb-12 -ml-12"
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-primary dark:text-primary-light"
          >
            <path
              d="M100 10C70 10 40 30 30 60C20 90 30 120 50 140C70 160 100 170 130 160C160 150 180 120 180 90C180 60 160 30 130 20C120 15 110 10 100 10Z"
              fill="currentColor"
            />
            <path
              d="M100 40C80 40 60 50 50 70C40 90 45 110 60 125C75 140 95 145 115 140C135 135 150 115 150 95C150 75 135 55 115 45C110 42 105 40 100 40Z"
              fill="white"
              fillOpacity="0.3"
            />
          </svg>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            type: "spring",
            stiffness: 100,
          }}
          className="absolute top-0 right-0 w-20 h-20 -mt-8 -mr-8 rotate-45"
        >
          <svg
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-primary dark:text-primary-light"
          >
            <path
              d="M100 10C70 10 40 30 30 60C20 90 30 120 50 140C70 160 100 170 130 160C160 150 180 120 180 90C180 60 160 30 130 20C120 15 110 10 100 10Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>

        {/* Added floating leaf */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 right-[10%] w-16 h-16 text-primary/20 dark:text-primary-light/20"
        >
          <svg viewBox="0 0 200 200" fill="currentColor">
            <path d="M100 10C70 10 40 30 30 60C20 90 30 120 50 140C70 160 100 170 130 160C160 150 180 120 180 90C180 60 160 30 130 20C120 15 110 10 100 10Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
