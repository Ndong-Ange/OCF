import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { categories, menuItems, MenuItem } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const filteredItems = menuItems.filter(item => item.category === activeCategory);
  const popularItems = menuItems.filter(item => item.popular);

  return (
    <section id="menu" className="py-16 bg-crusty-black bg-opacity-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crusty-red font-serif">Notre Menu</h2>
          <p className="text-lg text-crusty-black max-w-2xl mx-auto">
            Découvrez notre sélection de délices croustillants préparés avec passion
          </p>
        </div>

        <div 
          ref={ref}
          className={`mb-16 transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
        >
          <h3 className="text-2xl font-bold mb-6 text-crusty-red text-center font-serif">Les Favoris</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-xl font-bold text-crusty-black">{item.name}</h4>
                    <span className="text-lg font-semibold text-crusty-red">{item.price}</span>
                  </div>
                  <p className="text-crusty-black opacity-80">{item.description}</p>
                  <button className="mt-4 w-full bg-crusty-red text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                    Commander
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="sticky top-20 bg-crusty-black bg-opacity-5 z-20 py-4">
          <div className="flex overflow-x-auto space-x-2 py-4 mb-8 scrollbar-hide">
            <div className="flex space-x-2 mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 whitespace-nowrap transform hover:scale-105 ${
                    activeCategory === category.id
                      ? 'bg-crusty-red text-white shadow-md'
                      : 'bg-white text-crusty-black hover:bg-crusty-yellow hover:bg-opacity-20'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="flex bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-1/3 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="w-2/3 p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-crusty-black">{item.name}</h4>
                  <span className="font-semibold text-crusty-red">{item.price}</span>
                </div>
                <p className="text-sm text-crusty-black opacity-80 mb-4">{item.description}</p>
                <button className="w-full bg-crusty-red text-white py-2 rounded-md hover:bg-red-700 transition-colors duration-300">
                  Commander
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu