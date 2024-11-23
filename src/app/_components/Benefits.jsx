"use client";
import { motion } from "framer-motion";
import { MdEco, MdLocalShipping, MdVerified } from "react-icons/md";
import AnimatedTitle from "./shared/AnimatedTitle";

const Benefits = () => {
  const benefits = [
    {
      title: "Fresh & Organic",
      description: "All products are certified organic and freshly harvested",
      icon: MdEco,
      delay: 0.1,
    },
    {
      title: "Fast Delivery",
      description: "Same-day delivery to your doorstep",
      icon: MdLocalShipping,
      delay: 0.2,
    },
    {
      title: "Quality Guaranteed",
      description:
        "100% satisfaction or money-back guarantee on all products. We ensure the best quality.",
      icon: MdVerified,
      delay: 0.3,
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          title="Why Choose Us"
          subtitle="BENEFITS"
          accent="emerald"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: benefit.delay }}
              className="text-center group relative h-full"
            >
              {/* Card Container */}
              <div
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm
                            border border-white/10 dark:border-white/5
                            shadow-[0_8px_30px_rgb(0,0,0,0.12)]
                            dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)]
                            hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.12)]
                            dark:hover:shadow-[0_8px_30px_rgba(var(--primary-rgb),0.2)]
                            transition-all duration-300
                            h-full flex flex-col"
              >
                {/* Icon Container */}
                <motion.div
                  className="relative mx-auto mb-6 flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {/* Animated Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 rounded-full
                              blur-xl group-hover:blur-2xl transition-all duration-200"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />

                  {/* Icon Circle Background */}
                  <div
                    className="relative w-20 h-20 mx-auto rounded-full 
                                bg-gradient-to-br from-primary/80 to-primary
                                flex items-center justify-center
                                group-hover:shadow-lg group-hover:shadow-primary/50
                                border border-white/10
                                transition-all duration-200"
                  >
                    {/* Icon */}
                    <motion.div
                      animate={{
                        rotate: [0, 3, -3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                      className="text-white text-3xl"
                    >
                      <benefit.icon size={32} />
                    </motion.div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: benefit.delay + 0.1 }}
                  className="flex-grow flex flex-col"
                >
                  <h3 className="text-xl font-semibold mb-2 text-primary dark:text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-primary/60 dark:text-primary/60 flex-grow">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>

              {/* Subtle Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                            rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
