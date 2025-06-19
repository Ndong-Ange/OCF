import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-crusty-red font-serif">Notre Histoire</h2>
            <p className="text-lg text-crusty-black mb-4">
              O'Crusty Food est né d'une passion pour la cuisine de rue authentique et l'amour des textures parfaitement croustillantes. 
              Fondé en 2010, notre restaurant sert des burgers, tacos et spécialités croustillantes aux amateurs de bonne cuisine.
            </p>
            <p className="text-lg text-crusty-black mb-6">
              Nous croyons en l'utilisation des meilleurs ingrédients frais, des techniques artisanales et d'une touche d'innovation pour créer 
              des expériences culinaires mémorables. Chaque plat qui sort de notre cuisine porte le croustillant parfait et la saveur qui est 
              devenue notre signature.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">Ingrédients Frais</h3>
                <p className="text-crusty-black opacity-80">Nous sélectionnons les meilleurs produits locaux chaque jour.</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">Fait Maison</h3>
                <p className="text-crusty-black opacity-80">Nos sauces et préparations sont faites sur place.</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">Cuisson Parfaite</h3>
                <p className="text-crusty-black opacity-80">Chaque plat est préparé à la commande pour un croustillant optimal.</p>
              </div>
              <div className="bg-crusty-black bg-opacity-5 p-4 rounded-lg">
                <h3 className="font-bold text-crusty-red mb-2">Service Rapide</h3>
                <p className="text-crusty-black opacity-80">Qualité et rapidité pour votre satisfaction.</p>
              </div>
            </div>
            
            <button className="bg-crusty-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300">
              En Savoir Plus
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/burger/B2.jpg" 
                alt="Nos burgers signature" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-8">
              <img 
                src="/images/tacos/TA1.jpg" 
                alt="Nos tacos savoureux" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/images/fritures - tenders-nuggets/F1.jpg" 
                alt="Nos fritures croustillantes" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-8">
              <img 
                src="/images/menu/M1.jpg" 
                alt="Nos menus complets" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;