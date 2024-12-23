"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const ProductGallery = ({ images, name }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="space-y-4"
    >
      <div className="aspect-square rounded-2xl overflow-hidden bg-primary/5">
        <img
          src={images[selectedImage]}
          alt={name}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`aspect-square w-20 rounded-xl overflow-hidden border-2 
                     transition-colors duration-300
                     ${
                       selectedImage === index
                         ? "border-primary"
                         : "border-transparent"
                     }`}
          >
            <img
              src={image}
              alt={`${name} ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGallery;
