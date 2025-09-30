import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  categories: string[];
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  categoryFilter,
  setCategoryFilter,
  priceRange,
  setPriceRange,
  sortBy,
  setSortBy,
}) => {
  const formatCategory = (category: string) => {
    if (category === 'all') return 'All Products';
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Filters</h2>
        <SlidersHorizontal size={20} className="text-gray-600" />
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-2">
          Sort By
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center">
              <input
                type="radio"
                id={`category-${category}`}
                name="category"
                checked={categoryFilter === category}
                onChange={() => setCategoryFilter(category)}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <label
                htmlFor={`category-${category}`}
                className="ml-2 text-sm text-gray-700 capitalize"
              >
                {formatCategory(category)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Price Range</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">${priceRange[0]}</span>
          <span className="text-sm text-gray-600">${priceRange[1]}</span>
        </div>
        <div className="flex gap-4">
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <input
            type="range"
            min="0"
            max="1000"
            step="10"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Availability */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Availability</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="in-stock"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="in-stock" className="ml-2 text-sm text-gray-700">
              In Stock
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="on-sale"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label htmlFor="on-sale" className="ml-2 text-sm text-gray-700">
              On Sale
            </label>
          </div>
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setCategoryFilter('all');
          setPriceRange([0, 1000]);
          setSortBy('featured');
        }}
        className="w-full py-2 px-4 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors duration-300 text-sm font-medium"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
