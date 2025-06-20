import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import ReservationFormWithSupabase from './ReservationFormWithSupabase';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="contact" className="py-16 bg-crusty-black bg-opacity-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-crusty-red font-serif">Nous Trouver</h2>
          <p className="text-lg text-crusty-black max-w-2xl mx-auto">
            Nous serons ravis de vous accueillir ! Visitez-nous ou contactez-nous pour faire une réservation.
          </p>
        </div>

        <div 
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-2xl font-bold mb-6 text-crusty-red font-serif">Informations de Contact</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Adresse</h4>
                    <p className="text-crusty-black opacity-80">123 Rue Croustillante, Foodville, 75000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Téléphone</h4>
                    <p className="text-crusty-black opacity-80">01 23 45 67 89</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Email</h4>
                    <p className="text-crusty-black opacity-80">contact@ocrustyfood.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-crusty-yellow mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-crusty-black">Horaires</h4>
                    <p className="text-crusty-black opacity-80">Lundi - Vendredi: 11h - 22h</p>
                    <p className="text-crusty-black opacity-80">Samedi - Dimanche: 10h - 23h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ReservationFormWithSupabase />
          </div>
          
          <div className="h-96 md:h-full rounded-lg overflow-hidden shadow-md">
            <div className="w-full h-full">
              <img 
                src="/images/burger/B3.jpg" 
                alt="Ambiance du restaurant O'Crusty Food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;