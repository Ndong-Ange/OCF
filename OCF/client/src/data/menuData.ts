

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price?: string; // Le prix est optionnel pour les articles avec tailles
  image: string;
  category: string;
  popular?: boolean;
  sizes?: { name: string; price: string }[];
  options?: { title: string; items: string[] }[];
}

export interface MenuCategory {
  id: string;
  name: string;
}

export const categories: MenuCategory[] = [
  { id: 'burgers', name: 'Burgers' },
  { id: 'tacos', name: 'Tacos' },
  { id: 'nos-sandwitch', name: 'Sandwitch' },
  { id: 'fritures', name: 'Tex Mex' },
  { id: 'salades', name: 'Salades' },
  { id: 'menu-enfant', name: 'Menu' },
  { id: 'boissons-et-desserts', name: 'Boissons et Desserts' },
  { id: 'assiettes', name: 'Assiettes' }
];

export const menuItems: MenuItem[] = [
  // Burgers
  {
    id: 3,
    name: 'Classique',
    description: 'Steak, cheddar, salade, tomate, oignons confits',
    price: '5.50€',
    image: '/images/burger/B3.jpg',
    category: 'burgers',
    popular: true
  },
  {
    id: 2,
    name: 'Chicken',
    description: 'Tenders, cheddar, salade, tomate, oignons confits',
    price: '6.00€',
    image: '/images/burger/B2.jpg',
    category: 'burgers',
    popular: true
  },
  {
    id: 8,
    name: 'Country',
    description: 'Steak, cheddar, galette de pomme de terre salade, tomate, oignons confits',
    price: '6.50€',
    image: '/images/burger/B8.jpg',
    category: 'burgers'
  },
  {
    id: 6,
    name: 'Chèvre Miel',
    description: 'Steak, cheddar, chèvre miel, salade, tomate, oignons confits',
    price: '7.00€',
    image: '/images/burger/B6.jpg',
    category: 'burgers'
  },
  {
    id: 1,
    name: 'Double S',
    description: '2 steak, 2 cheddar, salade, tomate, oignons confits',
    price: '8.00€',
    image: '/images/burger/B1.jpg',
    category: 'burgers',
    popular: true
  },
  {
    id: 4,
    name: 'Savoyard',
    description: 'Steak 150gr, cheddar, raclette, bacon, salade, tomate oignons confits',
    price: '8.00€',
    image: '/images/burger/B4.jpg',
    category: 'burgers'
  },
  {
    id: 5,
    name: 'Double',
    description: '2 steak, 2 cheddar, salade, tomate, oignons confits',
    price: '8.00€',
    image: '/images/burger/B5.jpg',
    category: 'burgers'
  },
  {
    id: 7,
    name: 'Crusty',
    description: 'Steack 150gr, 2 cheddar, oeuf, bacon fumé, salade, tomate oignons confits',
    price: '8.00€',
    image: '/images/burger/B7.jpg',
    category: 'burgers'
  },

  // Tacos (Nouveau)
  {
    id: 15,
    name: 'Tacos sur Mesure',
    description: 'Composez votre tacos en plusieurs étapes : choisissez votre taille, vos viandes, vos sauces et vos extras pour un goût unique !',
    image: '/images/kebab/K1.jpg', // J'utilise l'ancienne image du kebab, à changer si besoin
    category: 'tacos',
    popular: true,
    sizes: [
      { name: 'S', price: '7.00€' },
      { name: 'M', price: '8.00€' },
      { name: 'L', price: '10.00€' },
      { name: 'XL', price: '12.00€' }
    ],
    options: [
      {
        title: '1. Choisissez vos viandes',
        items: ['Escalope de dinde', 'Viande hachée', 'Kebab', 'Cordon bleu', 'Tenders']
      },
      {
        title: '2. Choisissez vos sauces',
        items: ['Mayonnaise', 'Ketchup', 'Blanche', 'Harissa', 'Algérienne', 'Barbecue', 'Samouraï']
      },
      {
        title: '3. Ajoutez des extras',
        items: ['Frites', 'Cheddar', 'Bacon', 'Oeuf', 'Champignons']
      }
    ]
  },

  // Nos Sandwitch (Anciennement Tacos)
  {
    id: 9,
    name: 'Texan',
    description: 'Salade, tomate, oignons confits, steak 150gr, cheddar, jambon dinde, oeuf',
    price: '8.00€',
    image: '/images/tacos/TA1.jpg',
    category: 'nos-sandwitch',
    popular: true
  },
  {
    id: 10,
    name: 'Curry',
    description: 'Salade, tomate, oignons confits, poulet curry, cheddar',
    price: '7.00€',
    image: '/images/tacos/TA2.jpg',
    category: 'nos-sandwitch'
  },
  {
    id: 11,
    name: "L'Oriental",
    description: 'Salade, tomate, oignons, viande hachée, olives, oeuf',
    price: '7.00€',
    image: '/images/tacos/TA3.jpg',
    category: 'nos-sandwitch'
  },
  {
    id: 12,
    name: 'Kebab',
    description: 'Salade, tomate, oignons confits, kebab',
    price: '6.50€',
    image: '/images/tacos/TA4.jpg',
    category: 'nos-sandwitch'
  },
  {
    id: 13,
    name: 'Boursin',
    description: 'Salade, tomate, oignons confits, poulet boursin, cheddar',
    price: '7.00€',
    image: '/images/tacos/TA5.jpg',
    category: 'nos-sandwitch'
  },
  {
    id: 14,
    name: 'Mixte',
    description: 'Salade, tomate, oignons confits, steak, cheddar, 2 viandes au choix (kebab, escalope, viande hachée.)',
    price: '8.00€',
    image: '/images/tacos/TA6.jpg',
    category: 'nos-sandwitch'
  },

  // Fritures & Tenders
  {
    id: 16,
    name: 'Frites maison',
    description: 'Portion de frites maison',
    price: '2.50€',
    image: '/images/fritures - tenders-nuggets/F1.jpg',
    category: 'fritures'
  },
  {
    id: 17,
    name: 'Bouchées Camembert x4',
    description: '4 bouchées de camembert panées et croustillantes',
    price: '4.00€',
    image: '/images/fritures - tenders-nuggets/F2.jpg',
    category: 'fritures'
  },
  {
    id: 18,
    name: 'Sticks Mozza x4',
    description: '4 sticks de mozzarella panés et fondants',
    price: '4.00€',
    image: '/images/fritures - tenders-nuggets/F3.jpg',
    category: 'fritures'
  },
  {
    id: 19,
    name: 'Nuggets x6',
    description: '6 nuggets de poulet croustillants',
    price: '5.00€',
    image: '/images/fritures - tenders-nuggets/F4.jpg',
    category: 'fritures'
  },

  // Assiettes (Nouveau)
  {
    id: 30,
    name: 'Assiette Kebab',
    description: 'Viande kebab, frites, salade, tomate, oignons',
    price: '9.00€',
    image: '/images/kebab/K1.jpg', // Placeholder image, please update
    category: 'assiettes'
  },
  // Salades
  {
    id: 20,
    name: 'Salade César Poulet',
    description: 'Salade, tomate, oignons confits, poulet boursin, cheddar',
    price: '7.00€',
    image: '/images/salades/S1.jpg',
    category: 'salades'
  },
  // Menu
  {
    id: 21,
    name: 'Menu Etudiant B',
    description: 'Burger, frites, boisson et dessert',
    price: '6.50€',
    image: '/images/menu enfant/E1.jpg',
    category: 'menu-enfant'
  },
  {
    id: 28,
    name: 'Menu Etudiant K',
    description: 'Kebab ou tacos, frites, boisson et dessert',
    price: '6.50€',
    image: '/images/menu enfant/E2.jpg',
    category: 'menu-enfant'
  },
  {
    id: 22,
    name: 'Menu Kids',
    description: 'Burger enfant ou 5 nuggets + frites + Capri-Sun',
    price: '6.00€',
    image: '/images/menu/M2.jpg',
    category: 'menu-enfant'
  },

  
  // Boissons
  
  {
    id: 29,
    name: 'Boissons',
    description: '',
    price: undefined,
    image: '/images/desserts/soda.jpg',
    category: 'boissons-et-desserts',
    options: [
      {
        title: 'Boissons',
        items: [
          'Soda: 2.00€',
          "Bouteille d'eau: 1.50",
          'Capri-Sun: 1.50€',
          'Café: 1.50€',
        ]
      }
    ]
  },
  
  // Desserts
  {
    id: 23,
    name: 'Tiramisu Maison',
    description: 'Le classique italien, crémeux et savoureux',
    price: '3.50€',
    image: '/images/desserts/T1.jpg',
    category: 'boissons-et-desserts'
  },

  
];