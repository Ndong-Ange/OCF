import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Food Blogger',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'The crusty bread at O\'Crusty Food is absolutely divine! It has the perfect crunch on the outside and soft, airy texture inside. I\'ve never tasted anything like their Beef Wellington.',
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Frequent Diner',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'I\'ve been coming here weekly for the past year. The menu always has something new and exciting, but their classics like the Crusty Chicken Pot Pie never disappoint.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Local Resident',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    content: 'O\'Crusty Food has become our family\'s go-to spot for special occasions. The ambiance is wonderful and the food is consistently excellent. Their desserts are a must-try!',
    rating: 4
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-16 bg-amber-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-800 font-serif">What Our Customers Say</h2>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            We value every customer and strive to provide the best dining experience possible
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0">
                      <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className="flex items-center mb-6">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <h4 className="font-bold text-amber-800">{testimonial.name}</h4>
                            <p className="text-amber-600">{testimonial.role}</p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <svg 
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg" 
                                  viewBox="0 0 24 24" 
                                  fill={i < testimonial.rating ? 'currentColor' : 'none'} 
                                  stroke="currentColor"
                                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-500' : 'text-gray-300'}`}
                                >
                                  <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                                  />
                                </svg>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-amber-700 italic">"{testimonial.content}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    activeIndex === index ? 'bg-amber-600' : 'bg-amber-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;