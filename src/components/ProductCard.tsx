import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star size={16} className="text-gray-300" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.onSale && (
          <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}
        {product.stock < 10 && (
          <div className="absolute top-0 left-0 bg-amber-500 text-white px-3 py-1 m-2 rounded-full text-sm font-semibold">
            Low Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-semibold line-clamp-1">{product.name}</h3>
        </div>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <div className="flex mr-2">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-600">({product.rating.toFixed(1)})</span>
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            {product.onSale ? (
              <div className="flex items-center">
                <span className="text-lg font-bold text-indigo-600 mr-2">${product.salePrice?.toFixed(2)}</span>
                <span className="text-sm text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-lg font-bold text-indigo-600">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-colors duration-300">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
