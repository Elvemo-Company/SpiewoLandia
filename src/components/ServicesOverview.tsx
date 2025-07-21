import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, Heart } from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      title: 'Zajęcia dla Dzieci',
      description: 'Rozwijamy talenty muzyczne najmłodszych w przyjaznej atmosferze',
      features: ['Grupy wiekowe 3-12 lat', 'Lokalizacje w całej Polsce', 'Doświadczeni pedagodzy'],
      icon: Users,
      color: 'from-golden to-sunset',
      image: 'https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg',
      cta: 'Zobacz harmonogram'
    },
    {
      title: 'Lekcje Wokalne',
      description: 'Indywidualne podejście do rozwoju głosu i techniki śpiewu',
      features: ['Wszystkie poziomy', 'Elastyczne terminy', 'Profesjonalny sprzęt'],
      icon: Calendar,
      color: 'from-sunset to-muted-red',
      image: 'https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg',
      cta: 'Umów próbną lekcję'
    },
    {
      title: 'Programy dla Przedszkoli',
      description: 'Kompleksowe programy muzyczne dostosowane do potrzeb placówek',
      features: ['Regularne zajęcia', 'Materiały dydaktyczne', 'Szkolenia dla kadry'],
      icon: MapPin,
      color: 'from-soft-green to-golden',
      image: 'https://images.pexels.com/photos/8293657/pexels-photo-8293657.jpeg',
      cta: 'Zapytaj o program'
    },
    {
      title: 'Oprawa Ślubu',
      description: 'Magiczne momenty muzyczne w Waszym najważniejszym dniu',
      features: ['Ceremonia i przyjęcie', 'Bogaty repertuar', 'Profesjonalny sprzęt'],
      icon: Heart,
      color: 'from-muted-red to-chocolate',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      cta: 'Sprawdź dostępność'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
            Wszystkie Nasze Usługi
          </h2>
          <p className="text-lg text-chocolate max-w-3xl mx-auto">
            Odkryj pełną gamę naszych usługi muzycznych - od najmłodszych po dorosłych, 
            od codziennych lekcji po najważniejsze chwile w życiu
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-90`}></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between min-h-[400px]">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-white/90">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="group/btn bg-white/20 backdrop-blur-sm hover:bg-white hover:text-dark-brown text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                  {service.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-golden to-sunset rounded-2xl p-8 lg:p-12">
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
              Gotowy na Muzyczną Przygodę?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Skontaktuj się z nami już dziś i umów bezpłatną konsultację. 
              Pomożemy Ci wybrać idealne zajęcia muzyczne!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
                Umów Konsultację
              </button>
              <a 
                href="tel:+48123456789"
                className="text-white hover:text-cream font-medium text-lg flex items-center transition-colors duration-300"
              >
                lub zadzwoń: +48 123 456 789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;