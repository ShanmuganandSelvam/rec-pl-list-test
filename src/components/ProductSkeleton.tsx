import React from 'react';

const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mb-3"></div>
        
        <div className="flex mb-3">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="h-6 bg-gray-300 rounded w-16"></div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
