"use client";
import AnimatedTitle from "./shared/AnimatedTitle";
import ProductCard from "./shared/ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Organic Avocado",
      originalPrice: "$5.99",
      price: "$4.99",
      category: "Vegetables",
      discount: "20% OFF",
      isNew: true,
    },
    {
      name: "Fresh Strawberries",
      originalPrice: "$4.99",
      price: "$3.99",
      category: "Fruits",
      discount: "15% OFF",
      isNew: false,
    },
    {
      name: "Organic Milk",
      originalPrice: "$3.99",
      price: "$2.99",
      category: "Dairy",
      discount: "10% OFF",
      isNew: true,
    },
  ];

  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedTitle
          title="Featured Products"
          subtitle="PRODUCTS"
          accent="emerald"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
