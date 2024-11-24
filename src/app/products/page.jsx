"use client";
import { useState } from "react";
import AnimatedTitle from "../_components/shared/AnimatedTitle";
import FilterButton from "./_components/FilterButton";
import FilterSidebar from "./_components/FilterSidebar";
import MobileFilterDrawer from "./_components/MobileFilterDrawer";
import ProductGrid from "./_components/ProductGrid";
import SearchBar from "./_components/SearchBar";
import SortDropdown from "./_components/SortDropdown";

const ProductsPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // Example data
  const categories = [
    { id: 1, name: "Fruits" },
    { id: 2, name: "Vegetables" },
    { id: 3, name: "Herbs" },
    { id: 4, name: "Dairy" },
  ];

  const products = [
    {
      id: 1,
      name: "Organic Avocado",
      originalPrice: "$5.99",
      price: "$4.99",
      category: "Vegetables",
      discount: "20% OFF",
      isNew: true,
    },
    {
      id: 2,
      name: "Fresh Strawberries",
      originalPrice: "$4.99",
      price: "$3.99",
      category: "Fruits",
      discount: "15% OFF",
      isNew: false,
    },
    {
      id: 3,
      name: "Organic Milk",
      originalPrice: "$3.99",
      price: "$2.99",
      category: "Dairy",
      discount: "10% OFF",
      isNew: true,
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (searchTerm) => {
    // Implement search logic
  };

  const handleSort = (sortType) => {
    // Implement sort logic
  };

  const handleCategoryChange = (categoryId, checked) => {
    // Implement category filter logic
  };

  const handlePriceChange = (price) => {
    // Implement price filter logic
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <AnimatedTitle
          title="Our Products"
          subtitle="FRESH & ORGANIC"
          accent="emerald"
        />

        {/* Search and Filter Button Container */}
        <div className="flex items-center justify-between gap-8 mt-8 mb-6">
          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <SearchBar onSearch={handleSearch} />
          </div>

          {/* Filter Buttons */}
          <div className="flex items-center gap-3">
            <FilterButton onClick={() => setIsFilterOpen(true)} />

            {/* Desktop Sort Dropdown */}
            <div className="hidden lg:block">
              <SortDropdown onSort={handleSort} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block lg:col-span-1">
            <FilterSidebar
              categories={categories}
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
            />
          </aside>

          {/* Mobile Filter Drawer */}
          <MobileFilterDrawer
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            sortDropdown={<SortDropdown onSort={handleSort} />}
          >
            <FilterSidebar
              categories={categories}
              onCategoryChange={handleCategoryChange}
              onPriceChange={handlePriceChange}
            />
          </MobileFilterDrawer>

          {/* Products */}
          <main className="lg:col-span-3">
            <ProductGrid products={filteredProducts} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
