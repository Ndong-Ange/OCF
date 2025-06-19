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
  { id: 'burgers', name: 'Burgers' },
  { id: 'tacos', name: 'Tacos' },
  { id: 'kebab', name: 'Kebab' },
  { id: 'fritures', name: 'Fritures & Tenders' },
  { id: 'salades', name: 'Salades' },
  { id: 'menu-enfant', name: 'Menu Enfant' },
  { id: 'desserts', name: 'Desserts' }
];

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 1,
    name: 'O\'Crusty Classic Burger',
    description: 'Notre burger signature avec steak haché, salade, tomate, oignon et sauce spéciale',
    price: '12.99€',
    image: '/images/burger/B1.jpg',
    category: 'burgers',
    popular: true
  },
  {
    id: 2,
    name: 'Cheese Burger Deluxe',
    description: 'Double steak, double fromage, bacon croustillant et légumes frais',
    price: '15.99€',
    image: '/images/burger/B2.jpg',
    category: 'burgers',
    popular: true
  },
  {
    id: 3,
    name: 'BBQ Bacon Burger',
    description: 'Steak grillé, bacon fumé, oignons caramélisés et sauce BBQ maison',
    price: '14.99€',
    image: '/images/burger/B3.jpg',
    category: 'burgers'
  },
  {
    id: 4,
    name: 'Chicken Crispy Burger',
    description: 'Filet de poulet pané croustillant, salade iceberg et mayo épicée',
    price: '13.99€',
    image: '/images/burger/B4.jpg',
    category: 'burgers'
  },
  {
    id: 5,
    name: 'Veggie Burger',
    description: 'Steak végétarien, avocat, tomate, salade et sauce verte',
    price: '11.99€',
    image: '/images/burger/B5.jpg',
    category: 'burgers'
  },
  {
    id: 6,
    name: 'Fish Burger',
    description: 'Filet de poisson pané, salade, tomate et sauce tartare',
    price: '13.49€',
    image: '/images/burger/B6.jpg',
    category: 'burgers'
  },
  {
    id: 7,
    name: 'Monster Burger',
    description: 'Triple steak, triple fromage, bacon, œuf et légumes - Le défi ultime !',
    price: '19.99€',
    image: '/images/burger/B7.jpg',
    category: 'burgers'
  },
  {
    id: 8,
    name: 'Spicy Jalapeño Burger',
    description: 'Steak épicé, jalapeños, fromage pepper jack et sauce piquante',
    price: '14.49€',
    image: '/images/burger/B8.jpg',
    category: 'burgers'
  },

  // Tacos
  {
    id: 9,
    name: 'Tacos Poulet',
    description: 'Tendre poulet grillé, légumes frais et sauce blanche dans une galette moelleuse',
    price: '8.99€',
    image: '/images/tacos/TA1.jpg',
    category: 'tacos',
    popular: true
  },
  {
    id: 10,
    name: 'Tacos Bœuf',
    description: 'Émincé de bœuf savoureux, crudités et sauce au choix',
    price: '9.49€',
    image: '/images/tacos/TA2.jpg',
    category: 'tacos'
  },
  {
    id: 11,
    name: 'Tacos Mixte',
    description: 'Mélange poulet et bœuf, double plaisir dans une galette généreuse',
    price: '10.99€',
    image: '/images/tacos/TA3.jpg',
    category: 'tacos'
  },
  {
    id: 12,
    name: 'Tacos Cordon Bleu',
    description: 'Escalope panée, jambon, fromage fondu et sauce crémeuse',
    price: '9.99€',
    image: '/images/tacos/TA4.jpg',
    category: 'tacos'
  },
  {
    id: 13,
    name: 'Tacos Végétarien',
    description: 'Légumes grillés, avocat, fromage et sauce verte',
    price: '8.49€',
    image: '/images/tacos/TA5.jpg',
    category: 'tacos'
  },
  {
    id: 14,
    name: 'Tacos XXL',
    description: 'Format géant avec double viande, double fromage et légumes',
    price: '13.99€',
    image: '/images/tacos/TA6.jpg',
    category: 'tacos'
  },

  // Kebab
  {
    id: 15,
    name: 'Kebab Traditionnel',
    description: 'Viande d\'agneau et bœuf, légumes frais, sauce blanche et harissa',
    price: '7.99€',
    image: '/images/kebab/K1.jpg',
    category: 'kebab',
    popular: true
  },

  // Fritures & Tenders
  {
    id: 16,
    name: 'Tenders de Poulet',
    description: '6 tenders croustillants avec sauce au choix et frites',
    price: '11.99€',
    image: '/images/fritures - tenders-nuggets/F1.jpg',
    category: 'fritures'
  },
  {
    id: 17,
    name: 'Nuggets Maison',
    description: '10 nuggets faits maison, panure croustillante et sauces variées',
    price: '9.99€',
    image: '/images/fritures - tenders-nuggets/F2.jpg',
    category: 'fritures'
  },
  {
    id: 18,
    name: 'Mix Fritures',
    description: 'Assortiment de tenders, nuggets et onion rings avec frites',
    price: '13.99€',
    image: '/images/fritures - tenders-nuggets/F3.jpg',
    category: 'fritures'
  },
  {
    id: 19,
    name: 'Ailes de Poulet BBQ',
    description: '8 ailes marinées et grillées, sauce BBQ et frites épicées',
    price: '12.49€',
    image: '/images/fritures - tenders-nuggets/F4.jpg',
    category: 'fritures'
  },

  // Salades
  {
    id: 20,
    name: 'Salade César Poulet',
    description: 'Salade romaine, poulet grillé, parmesan, croûtons et sauce césar',
    price: '10.99€',
    image: '/images/salades/S1.jpg',
    category: 'salades'
  },

  // Menu Enfant
  {
    id: 21,
    name: 'Menu P\'tit Burger',
    description: 'Mini burger, petites frites, compote et boisson au choix',
    price: '7.99€',
    image: '/images/menu enfant/E1.jpg',
    category: 'menu-enfant'
  },
  {
    id: 22,
    name: 'Menu Nuggets Kids',
    description: '6 nuggets, frites, yaourt et boisson pour les petits gourmands',
    price: '7.49€',
    image: '/images/menu enfant/E2.jpg',
    category: 'menu-enfant'
  },

  // Desserts
  {
    id: 23,
    name: 'Tiramisu Maison',
    description: 'Notre tiramisu traditionnel préparé chaque jour avec amour',
    price: '5.99€',
    image: '/images/desserts/T1.jpg',
    category: 'desserts',
    popular: true
  }
];