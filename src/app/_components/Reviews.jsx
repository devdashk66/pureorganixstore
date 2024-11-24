"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdStar } from "react-icons/md";
import AnimatedTitle from "./shared/AnimatedTitle";

const InfiniteMovingCards = ({ items, direction = "left", speed = "slow" }) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      scrollerRef.current.appendChild(duplicatedItem);
    });
  }

  const speedValue = {
    fast: 30,
    normal: 40,
    slow: 50,
  }[speed];

  return (
    <div className="relative overflow-hidden" ref={containerRef}>
      <motion.div
        ref={scrollerRef}
        className="flex gap-4 py-4 w-max"
        animate={{
          x: direction === "left" ? [0, -1920] : [-1920, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speedValue,
            ease: "linear",
          },
        }}
      >
        {items.map((review, index) => (
          <ReviewCard key={index} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

const ReviewCard = ({ review }) => (
  <motion.div
    className="flex-shrink-0 w-[45vw] sm:w-[280px] md:w-[350px]"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
  >
    <div className="relative h-[180px]">
      {/* Main Card */}
      <div className="absolute inset-0 rounded-[10px]">
        {/* Card Face */}
        <div
          className="h-full w-full p-4 relative overflow-hidden rounded-[10px]
                      dark:bg-gradient-to-br dark:from-white/[0.07] dark:to-white/[0.03]
                      bg-gradient-to-br from-black/[0.07] to-black/[0.03]
                      backdrop-blur-md"
        >
          {/* Quote Icon */}
          <svg
            className="absolute top-3 left-3 w-6 h-6 
                       text-primary/10 transform -scale-x-100"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Review Text */}
          <div className="mt-6">
            <p
              className="text-sm leading-relaxed line-clamp-3
                         dark:text-heading-dark/70 text-heading-light/70"
            >
              {review.review}
            </p>
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-4 right-4 flex flex-col items-end">
            {/* Stars */}
            <div className="flex mb-1.5">
              {[...Array(review.rating)].map((_, i) => (
                <MdStar key={i} className="w-4 h-4 text-primary/50" />
              ))}
            </div>

            {/* Name */}
            <p className="text-sm font-medium text-primary/60">{review.name}</p>
          </div>
        </div>

        {/* Animated Border */}
        <div
          className="absolute inset-0 -z-10 rounded-[30px]
                       bg-gradient-to-r from-primary/30 via-primary/10 to-primary/30
                       blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>

      {/* Background Accent */}
      <div
        className="absolute -inset-2 -z-20 rounded-[40px]
                     bg-primary/5
                     blur-2xl group-hover:bg-primary/10 transition-colors duration-500"
      />
    </div>
  </motion.div>
);

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "Verified Buyer",
      rating: 5,
      review:
        "The organic products are amazing! Fresh, high-quality, and delivered right to my doorstep.",
      initials: "JD",
    },
    {
      name: "Sarah Smith",
      role: "Regular Customer",
      rating: 5,
      review:
        "I've been ordering for months now. The quality is consistently excellent.",
      initials: "SS",
    },
    {
      name: "Mike Brown",
      role: "Verified Buyer",
      rating: 4,
      review:
        "Great selection of organic products. The delivery was quick and perfect.",
      initials: "MB",
    },
    {
      name: "Emma Wilson",
      role: "New Customer",
      rating: 5,
      review: "Exceptional quality and service. Will definitely order again!",
      initials: "EW",
    },
    {
      name: "David Lee",
      role: "Verified Buyer",
      rating: 5,
      review: "Outstanding organic selection. Everything tastes so fresh!",
      initials: "DL",
    },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <AnimatedTitle
          title="What Our Customers Say"
          subtitle="TESTIMONIALS"
          accent="emerald"
        />

        {/* Infinite Scroll Container */}
        <div className="mt-12 relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Reviews Scroll */}
          <InfiniteMovingCards items={reviews} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
