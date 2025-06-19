export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  popular?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
}

export const categories: MenuCategory[] = [
  { id: 'starters', name: 'Starters' },
  { id: 'main-courses', name: 'Main Courses' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Crusty Garlic Bread',
    description: 'Freshly baked bread with garlic butter and herbs',
    price: '$5.99',
    image: 'images/burger/B1.jpg',
    category: 'starters',
    popular: true
  },
  {
    id: 2,
    name: 'Crispy Calamari',
    description: 'Tender calamari rings with our special seasoning',
    price: '$9.99',
    image: 'images/burger/B2.jpg',
    category: 'starters'
  },
  {
    id: 3,
    name: 'Crusty Beef Wellington',
    description: 'Tender fillet of beef wrapped in crisp puff pastry',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main-courses',
    popular: true
  },
  {
    id: 4,
    name: 'Artisan Sourdough Pizza',
    description: 'Wood-fired pizza with crusty sourdough base',
    price: '$18.99',
    image: 'https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main-courses'
  },
  {
    id: 5,
    name: 'Crusty Chicken Pot Pie',
    description: 'Hearty chicken filling with vegetables in flaky pastry',
    price: '$16.99',
    image: 'https://images.pexels.com/photos/9646896/pexels-photo-9646896.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'main-courses'
  },
  {
    id: 6,
    name: 'Crème Brûlée',
    description: 'Classic French dessert with caramelized sugar crust',
    price: '$8.99',
    image: 'https://images.pexels.com/photos/8803581/pexels-photo-8803581.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts',
    popular: true
  },
  {
    id: 7,
    name: 'Apple Crumble Tart',
    description: 'Warm apple filling with buttery crumble topping',
    price: '$7.99',
    image: 'https://images.pexels.com/photos/2267873/pexels-photo-2267873.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'desserts'
  },
  {
    id: 8,
    name: 'Craft Beer Selection',
    description: 'Rotating selection of local craft beers',
    price: '$6.99',
    image: 'https://images.pexels.com/photos/1269025/pexels-photo-1269025.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks'
  },
  {
    id: 9,
    name: 'Signature Cocktails',
    description: 'Handcrafted cocktails made with premium spirits',
    price: '$12.99',
    image: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'drinks'
  }
];