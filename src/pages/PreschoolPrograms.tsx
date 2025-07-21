import React, { useState } from 'react';
import { Users, Clock, BookOpen, Heart, CheckCircle, Download, MapPin, Calendar } from 'lucide-react';

const PreschoolPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('basic');

  const programs = [
    {
      id: 'basic',
      name: 'Program Podstawowy',
      duration: '30 min',
      frequency: '1x w tygodniu',
      price: '80 zł/dziecko/miesiąc',
      minChildren: '8 dzieci',
      description: 'Wprowadzenie do świata muzyki przez zabawę i śpiew',
      features: [
        'Piosenki i rymowanki',
        'Podstawowe instrumenty',
        'Rozwijanie słuchu muzycznego',
        'Ćwiczenia rytmiczne',
        'Materiały dydaktyczne'
      ],
      ageGroup: '3-4 lata'
    },
    {
      id: 'extended',
      name: 'Program Rozszerzony',
      duration: '45 min',
      frequency: '2x w tygodniu',
      price: '120 zł/dziecko/miesiąc',
      minChildren: '10 dzieci',
      description: 'Kompleksowy rozwój muzyczny z elementami teatru',
      features: [
        'Wszystko z programu podstawowego',
        'Elementy teatru muzycznego',
        'Nauka gry na instrumentach',
        'Przygotowanie występów',
        'Warsztaty dla rodziców',
        'Certyfikat ukończenia'
      ],
      ageGroup: '4-6 lat'
    },
    {
      id: 'premium',
      name: 'Program Premium',
      duration: '60 min',
      frequency: '3x w tygodniu',
      price: '180 zł/dziecko/miesiąc',
      minChildren: '12 dzieci',
      description: 'Profesjonalne przygotowanie muzyczne z indywidualnym podejściem',
      features: [
        'Wszystko z programu rozszerzonego',
        'Indywidualne konsultacje',
        'Nagrania występów',
        'Udział w konkursach',
        'Szkolenia dla nauczycieli',
        'Raport rozwoju dla rodziców',
        'Koncert końcowy'
      ],
      ageGroup: '5-6 lat'
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Rozwój Emocjonalny',
      description: 'Muzyka pomaga dzieciom wyrażać emocje i budować pewność siebie'
    },
    {
      icon: Users,
      title: 'Umiejętności Społeczne',
      description: 'Wspólne muzykowanie rozwija współpracę i komunikację'
    },
    {
      icon: BookOpen,
      title: 'Rozwój Kognitywny',
      description: 'Nauka muzyki wspiera rozwój mowy, pamięci i koncentracji'
    },
    {
      icon: Clock,
      title: 'Poczucie Rytmu',
      description: 'Ćwiczenia rytmiczne poprawiają koordynację ruchową'
    }
  ];

  const locations = [
    { city: 'Warszawa', districts: ['Centrum', 'Mokotów', 'Żoliborz', 'Praga'], count: 15 },
    { city: 'Kraków', districts: ['Stare Miasto', 'Kazimierz', 'Podgórze'], count: 8 },
    { city: 'Gdańsk', districts: ['Śródmieście', 'Oliwa', 'Wrzeszcz'], count: 6 },
    { city: 'Wrocław', districts: ['Centrum', 'Krzyki', 'Fabryczna'], count: 5 }
  ];

  const testimonials = [
    {
      name: 'Przedszkole "Słoneczko"',
      director: 'Anna Kowalska',
      text: 'Dzieci uwielbiają zajęcia z ŚpiewoLandią! Widać ogromny postęp w rozwoju muzycznym i społecznym.',
      location: 'Warszawa',
      image: 'https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg'
    },
    {
      name: 'Przedszkole "Tęczowe Sny"',
      director: 'Marek Nowak',
      text: 'Profesjonalne podejście i świetne materiały. Rodzice są zachwyceni postępami swoich dzieci.',
      location: 'Kraków',
      image: 'https://images.pexels.com/photos/8293657/pexels-photo-8293657.jpeg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/8293657/pexels-photo-8293657.jpeg"
              alt="Children in preschool music program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
            Programy dla Przedszkoli
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Kompleksowe programy muzyczne dostosowane do potrzeb najmłodszych. 
            Rozwijamy talenty przez zabawę i radość z muzyki.
          </p>
          <button className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
            Zapytaj o Program
          </button>
        </div>
      </section>

      {/* Programs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasze Programy
            </h2>
            <p className="text-lg text-chocolate max-w-2xl mx-auto">
              Wybierz program dostosowany do wieku dzieci i potrzeb Waszej placówki
            </p>
          </div>

          <div className="flex flex-wrap justify-center mb-8">
            {programs.map((program) => (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className={`mx-2 mb-4 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedProgram === program.id
                    ? 'bg-golden text-white shadow-card-hover'
                    : 'bg-cream text-chocolate hover:bg-golden hover:text-white'
                }`}
              >
                {program.name}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`transition-all duration-500 ${
                  selectedProgram === program.id ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="bg-cream rounded-2xl p-8 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="bg-golden text-white px-3 py-1 rounded-full text-sm font-medium mr-4">
                          {program.ageGroup}
                        </span>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown">
                          {program.name}
                        </h3>
                      </div>
                      <p className="text-chocolate text-lg mb-6">
                        {program.description}
                      </p>
                      
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                          <Clock className="h-6 w-6 text-golden mx-auto mb-2" />
                          <p className="text-sm text-chocolate">{program.duration}</p>
                        </div>
                        <div className="text-center">
                          <Calendar className="h-6 w-6 text-golden mx-auto mb-2" />
                          <p className="text-sm text-chocolate">{program.frequency}</p>
                        </div>
                        <div className="text-center">
                          <Users className="h-6 w-6 text-golden mx-auto mb-2" />
                          <p className="text-sm text-chocolate">min. {program.minChildren}</p>
                        </div>
                        <div className="text-center">
                          <span className="text-lg font-bold text-golden block">{program.price}</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-soft-green mr-3 flex-shrink-0" />
                            <span className="text-chocolate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 h-fit">
                      <h4 className="font-serif text-xl font-bold text-dark-brown mb-4">
                        Zainteresowany?
                      </h4>
                      <button className="w-full bg-golden hover:bg-sunset text-white py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 mb-4">
                        Umów Prezentację
                      </button>
                      <button className="w-full border-2 border-golden text-golden hover:bg-golden hover:text-white py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center">
                        <Download className="h-4 w-4 mr-2" />
                        Pobierz Broszurę
                      </button>
                      <p className="text-xs text-chocolate mt-4 text-center">
                        Bezpłatna prezentacja w Waszej placówce
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Korzyści dla Dzieci
            </h2>
            <p className="text-lg text-chocolate">
              Muzyka wspiera wszechstronny rozwój najmłodszych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <benefit.icon className="h-8 w-8 text-golden" />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                  {benefit.title}
                </h3>
                <p className="text-chocolate leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Obszar Działania
            </h2>
            <p className="text-lg text-chocolate">
              Prowadzimy zajęcia w przedszkolach w całej Polsce
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <div
                key={location.city}
                className="bg-cream rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MapPin className="h-8 w-8 text-golden mx-auto mb-4" />
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                  {location.city}
                </h3>
                <p className="text-chocolate text-sm mb-3">
                  {location.count} współpracujących przedszkoli
                </p>
                <div className="space-y-1">
                  {location.districts.map((district) => (
                    <span key={district} className="inline-block bg-white px-2 py-1 rounded text-xs text-chocolate mr-1 mb-1">
                      {district}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Opinie Dyrektorów
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="h-48 relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-serif text-lg font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-90">{testimonial.location}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-chocolate mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-dark-brown">{testimonial.director}</p>
                  <p className="text-sm text-chocolate">Dyrektor</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-golden to-sunset">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Wprowadź Muzykę do Swojego Przedszkola
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Skontaktuj się z nami i umów bezpłatną prezentację programu w Waszej placówce
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Umów Prezentację
            </button>
            <a 
              href="tel:+48123456789"
              className="text-white hover:text-cream font-medium text-lg flex items-center transition-colors duration-300"
            >
              lub zadzwoń: +48 123 456 789
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreschoolPrograms;