import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      title: 'Lekcje Wokalne',
      description: 'Indywidualne podejście do każdego ucznia. Profesjonalna nauka techniki wokalnej dla wszystkich poziomów.',
      image: 'https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg',
      link: '/vocal-lessons'
    },
    {
      title: 'Programy dla Przedszkoli',
      description: 'Kompleksowe programy muzyczne dostosowane do potrzeb placówek edukacyjnych. Profesjonalna obsługa i materiały.',
      image: 'https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg',
      link: '/preschool-programs'
    },
    {
      title: 'Oprawa Ślubu',
      description: 'Wyjątkowa oprawa muzyczna najważniejszego dnia w życiu. Dopasowana do charakteru ceremonii i życzeń pary.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      link: '/wedding-services'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
            Nasze Usługi
          </h2>
          <p className="text-lg text-chocolate max-w-2xl mx-auto">
            Oferujemy kompleksowe usługi muzyczne dla wszystkich grup wiekowych
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-chocolate mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-golden hover:text-sunset font-medium transition-colors duration-200 group"
                >
                  Dowiedz się więcej
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;