"use client";
import AnimatedTitle from "./shared/AnimatedTitle";
import ProductCard from "./shared/ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Organic Avocado",
      originalPrice: "$5.99",
      price: "$4.99",
      category: "Vegetables",
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2022/04/pexels-antonio-filigno-8538296-1024x657.jpg",
      discount: "20% OFF",
      isNew: true,
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      originalPrice: "$4.99",
      price: "$3.99",
      category: "Fruits",
      image:
        "https://www.gardentech.com/-/media/project/oneweb/gardentech/images/blog/how-to-grow-your-own-tasty-strawberries/strawberries-header-og.jpg",
      discount: "15% OFF",
      isNew: false,
    },
    {
      id: 3,
      name: "Organic Milk",
      originalPrice: "$3.99",
      price: "$2.99",
      category: "Dairy",
      image:
        "https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2024/11/AdobeStock_354060824.jpeg",
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
