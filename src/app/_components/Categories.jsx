"use client";
import { motion } from "framer-motion";
import AnimatedTitle from "./shared/AnimatedTitle";

const Categories = () => {
  const categories = [
    {
      name: "Vegetables",
      gradient: "from-emerald-400/80 to-green-500/80",
      description: "Fresh & Organic Vegetables",
      borderColor: "border-emerald-400",
      hoverGlow: "hover:shadow-emerald-500/50",
    },
    {
      name: "Fruits",
      gradient: "from-rose-400/80 to-red-500/80",
      description: "Seasonal & Exotic Fruits",
      borderColor: "border-rose-400",
      hoverGlow: "hover:shadow-rose-500/50",
    },
    {
      name: "Dairy",
      gradient: "from-blue-400/80 to-indigo-500/80",
      description: "Fresh Dairy Products",
      borderColor: "border-blue-400",
      hoverGlow: "hover:shadow-blue-500/50",
    },
    {
      name: "Organic Snacks",
      gradient: "from-amber-400/80 to-orange-500/80",
      description: "Healthy & Natural Snacks",
      borderColor: "border-amber-400",
      hoverGlow: "hover:shadow-amber-500/50",
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          title="Shop by Category"
          subtitle="CATEGORIES"
          accent="purple"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`
                  relative h-[250px] rounded-2xl p-6
                  border border-opacity-20 ${category.borderColor}
                  backdrop-blur-sm
                  transition-shadow duration-300
                  hover:shadow-lg ${category.hoverGlow}
                  overflow-hidden cursor-pointer
                `}
              >
                {/* Background Gradient - Now Always Visible */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-br ${category.gradient}
                  `}
                />

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-white/20" />

                {/* Content Container */}
                <div className="relative h-full flex flex-col justify-between z-10">
                  {/* Category Name */}
                  <motion.h3
                    initial={{ y: 0 }}
                    whileHover={{ y: -5 }}
                    className="text-2xl font-bold text-white mb-2"
                  >
                    {category.name}
                  </motion.h3>

                  {/* Bottom Content Group */}
                  <div>
                    {/* Description */}
                    <p className="text-white/90 text-sm mb-4">
                      {category.description}
                    </p>

                    {/* Explore Button */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-white text-sm"
                    >
                      <span>Explore</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
