import React from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="home"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/burger/B1.jpg')" }}
    >
      <div className="absolute inset-0 bg-crusty-black bg-opacity-50"></div>
      <div 
        ref={ref}
        className={`container mx-auto px-4 md:px-6 relative z-10 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 font-serif leading-tight">
            Ô Crusty Food Agde
          </h1>
          <p className="text-xl text-white text-opacity-90 mb-8">
            Découvrez nos burgers gourmets avec viande fraîche du boucher, 
            tacos authentiques et sandwichs croustillants.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="/menu"
              className="bg-crusty-red bg-opacity-90 hover:bg-opacity-100 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 text-center text-lg"
            >
              Voir le Menu
            </a>
            <a 
              href="https://www.ubereats.com/fr/store/ocrusty-food/restaurant-id"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-70 hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 text-center text-lg"
            >
              🚚 Commander en Ligne
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
        <a href="/menu" className="text-crusty-yellow text-opacity-90 hover:text-opacity-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;