import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones with premium sound quality and 30-hour battery life.',
    price: 299.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    stock: 45,
    createdAt: '2023-04-15T10:30:00Z',
    onSale: true,
    salePrice: 249.99
  },
  {
    id: '2',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh back for all-day comfort.',
    price: 189.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.5,
    stock: 32,
    createdAt: '2023-03-22T14:15:00Z'
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    description: 'Water-resistant fitness tracker with heart rate monitoring, GPS, and 7-day battery life.',
    price: 149.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.6,
    stock: 78,
    createdAt: '2023-05-10T09:45:00Z',
    onSale: true,
    salePrice: 129.99
  },
  {
    id: '4',
    name: 'Ceramic Pour-Over Coffee Maker',
    description: 'Elegant ceramic pour-over coffee dripper with precise water flow design for perfect extraction.',
    price: 42.99,
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    stock: 53,
    createdAt: '2023-02-18T11:20:00Z'
  },
  {
    id: '5',
    name: 'Minimalist Desk Lamp',
    description: 'Adjustable LED desk lamp with touch controls and multiple brightness levels.',
    price: 59.99,
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.4,
    stock: 61,
    createdAt: '2023-04-05T16:30:00Z'
  },
  {
    id: '6',
    name: 'Organic Cotton T-Shirt',
    description: 'Soft, breathable 100% organic cotton t-shirt with sustainable manufacturing.',
    price: 29.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.3,
    stock: 120,
    createdAt: '2023-03-12T13:40:00Z'
  },
  {
    id: '7',
    name: 'Professional Chef Knife',
    description: 'High-carbon stainless steel 8-inch chef knife with ergonomic handle for precision cutting.',
    price: 89.99,
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.9,
    stock: 28,
    createdAt: '2023-05-20T10:15:00Z'
  },
  {
    id: '8',
    name: 'Leather Messenger Bag',
    description: 'Full-grain leather messenger bag with padded laptop compartment and multiple pockets.',
    price: 159.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    stock: 19,
    createdAt: '2023-01-25T15:50:00Z',
    onSale: true,
    salePrice: 129.99
  },
  {
    id: '9',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 360° sound and 12-hour battery life.',
    price: 79.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.5,
    stock: 42,
    createdAt: '2023-04-28T12:10:00Z'
  },
  {
    id: '10',
    name: 'Handcrafted Ceramic Mug Set',
    description: 'Set of 4 unique handcrafted ceramic mugs, each with distinctive glaze patterns.',
    price: 49.99,
    category: 'kitchen',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.6,
    stock: 37,
    createdAt: '2023-03-05T09:25:00Z'
  },
  {
    id: '11',
    name: 'Wool Blend Winter Coat',
    description: 'Stylish wool-blend coat with satin lining and double-breasted design for cold weather.',
    price: 219.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.8,
    stock: 23,
    createdAt: '2023-02-10T14:35:00Z',
    onSale: true,
    salePrice: 179.99
  },
  {
    id: '12',
    name: 'Mechanical Keyboard',
    description: 'Tactile mechanical keyboard with RGB backlighting and programmable keys.',
    price: 129.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    rating: 4.7,
    stock: 31,
    createdAt: '2023-05-15T11:55:00Z'
  }
];
