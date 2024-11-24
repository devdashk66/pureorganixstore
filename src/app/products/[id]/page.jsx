"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import AnimatedTitle from "../../_components/shared/AnimatedTitle";
import ProductDetails from "./_components/ProductDetails";
import ProductGallery from "./_components/ProductGallery";
import ProductInfo from "./_components/ProductInfo";

const ProductPage = ({ params }) => {
  // Example product data (replace with your data fetching logic)
  const product = {
    id: 1,
    name: "Organic Avocado",
    price: 4.99,
    description:
      "Fresh and organic avocados sourced directly from local farmers. Rich in healthy fats and perfect for your daily nutrition.",
    category: "Fruits",
    images: [
      "/images/products/avocado-1.jpg",
      "/images/products/avocado-2.jpg",
      "/images/products/avocado-3.jpg",
    ],
    details: [
      "100% Organic",
      "Locally Sourced",
      "Rich in Vitamins",
      "Fresh Harvest",
    ],
    nutritionFacts: {
      calories: "160",
      fat: "15g",
      protein: "2g",
      carbs: "9g",
    },
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link href="/products">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 text-primary/80 hover:text-primary mb-6
                     transition-colors duration-300"
          >
            <MdArrowBack className="w-5 h-5" />
            Back to Products
          </motion.button>
        </Link>

        {/* Title Section */}
        <div className="mb-8 hidden lg:block">
          <AnimatedTitle
            title="Pure Organix"
            subtitle="Product Details"
            accent="emerald"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProductGallery images={product.images} name={product.name} />
          <div className="space-y-8">
            <ProductInfo product={product} />
            <ProductDetails
              details={product.details}
              nutritionFacts={product.nutritionFacts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
