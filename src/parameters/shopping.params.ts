// src/parameters/shopping.params.ts
import { ParameterStep } from './types'

export const shoppingParams: ParameterStep[] = [
  {
    id: 'shop-category',
    question: "What are you looking for today?",
    visualType: 'pill-choice',
    required: true,
    options: [
      { id: 'Souvenirs', label: 'Souvenirs', icon: '🏺' },
      { id: 'Clothing', label: 'Clothing', icon: '👕' },
      { id: 'Artisan', label: 'Artisan Crafts', icon: '🎨' },
      { id: 'Electronics', label: 'Electronics', icon: '📱' },
      { id: 'Supermarket', label: 'Groceries', icon: '🛒' },
      { id: 'Jewelry', label: 'Jewelry', icon: '💍' },
    ]
  },
  {
    id: 'lifestyle',
    question: "What's your budget style for shopping?",
    visualType: 'card-choice',
    required: true,
    options: [
      { id: 'lean', label: 'Bargain Hunter', description: 'Markets and budget-friendly local shops', icon: '🪙' },
      { id: 'balanced', label: 'Quality & Value', description: 'Established brands and fair-trade artisans', icon: '⚖️' },
      { id: 'premium', label: 'Luxury Collector', description: 'High-end boutiques and exclusive showrooms', icon: '💎' },
    ]
  },
  {
    id: 'must-haves',
    question: "Any specific requirements?",
    visualType: 'toggle-grid',
    required: false,
    options: [
      { id: 'taxFreeAvailable', label: 'Tax-Free Shopping', icon: '🏷️' },
      { id: 'hasDelivery', label: 'Delivery Service', icon: '🚚' },
      { id: 'isWheelchairAccessible', label: 'Wheelchair Accessible', icon: '♿' },
      { id: 'isLocalFavorite', label: 'Local Favorite', icon: '🏠' },
    ]
  }
]
