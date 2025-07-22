import React, { useState } from 'react';
import { Users, Clock, BookOpen, Heart, CheckCircle, Download, MapPin, Calendar, X } from 'lucide-react';

const PreschoolPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState('basic');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);

  const programs = [
    {
      id: 'basic',
      name: 'Program Podstawowy',
      duration: '30 min',
      frequency: '1x w tygodniu',
      price: '80 zł',
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
      price: '120 zł',
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
      price: '180 zł',
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

  // Swipe handling for testimonials
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentTestimonial < testimonials.length - 1) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
    if (isRightSwipe && currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  const closeBenefitModal = () => {
    setSelectedBenefit(null);
  };

  const openBenefitModal = (index: number) => {
    setSelectedBenefit(index);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
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
          <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasze Programy
            </h2>
            <p className="text-lg text-chocolate max-w-2xl mx-auto">
              Wybierz program dostosowany do wieku dzieci i potrzeb Waszej placówki
            </p>
          </div>

          <div className="flex justify-center mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 px-12 lg:px-0 min-w-max lg:min-w-0">
              {programs.map((program, idx) => (
                <button
                  key={program.id}
                  onClick={() => setSelectedProgram(program.id)}
                  className={`px-6 lg:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                    ${selectedProgram === program.id
                      ? 'bg-golden text-white shadow-card-hover'
                      : 'bg-cream text-chocolate hover:bg-golden hover:text-white'}
                    ${idx === 0 ? 'ml-64 lg:ml-0' : ''}
                  `}
                >
                  {program.name}
                </button>
              ))}
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `
          }} />

          <div className="max-w-6xl mx-auto">
            {programs.map((program) => (
              <div
                key={program.id}
                className={`transition-all duration-500 ${
                  selectedProgram === program.id ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="bg-cream rounded-2xl p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <span className="bg-golden text-white px-3 py-1 rounded-full text-sm font-medium mr-4 whitespace-nowrap">
                          {program.ageGroup}
                        </span>
                        <h3 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown">
                          {program.name}
                        </h3>
                      </div>
                      <p className="text-chocolate text-lg mb-4">
                        {program.description}
                      </p>
                      
                      <div className="grid grid-cols-4 gap-2 lg:gap-4 mb-4">
                        <div className="text-center py-3 lg:py-6">
                          <Clock className="h-4 w-4 lg:h-6 lg:w-6 text-golden mx-auto mb-1 lg:mb-3" />
                          <p className="text-xs lg:text-sm text-chocolate">{program.duration}</p>
                        </div>
                        <div className="text-center py-3 lg:py-6">
                          <Calendar className="h-4 w-4 lg:h-6 lg:w-6 text-golden mx-auto mb-1 lg:mb-3" />
                          <p className="text-xs lg:text-sm text-chocolate">{program.frequency}</p>
                        </div>
                        <div className="text-center py-3 lg:py-6">
                          <Users className="h-4 w-4 lg:h-6 lg:w-6 text-golden mx-auto mb-1 lg:mb-3" />
                          <p className="text-xs lg:text-sm text-chocolate">min. {program.minChildren}</p>
                        </div>
                        <div className="text-center py-3 lg:py-6">
                          <span className="text-base lg:text-lg font-bold text-golden block">{program.price}</span>
                          <span className="block text-xs text-chocolate/70 mt-1 font-normal italic">cena za dziecko na miesiąc</span>
                        </div>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-center py-2">
                            <CheckCircle className="h-5 w-5 text-soft-green mr-3 flex-shrink-0" />
                            <span className="text-chocolate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="backdrop-blur-sm bg-white/40 border border-white/60 rounded-xl p-4 lg:p-6 h-fit shadow-lg">
                      <div className="flex items-center mb-3 lg:mb-4">
                        <div className="hidden lg:flex w-10 h-10 bg-golden/90 backdrop-blur-sm rounded-full items-center justify-center mr-3">
                          <Heart className="h-5 w-5 text-white" />
                        </div>
                        <h4 className="hidden lg:block font-serif text-xl font-bold text-dark-brown">
                          Zainteresowany?
                        </h4>
                      </div>
                      <p className="hidden lg:block text-dark-brown/80 text-sm mb-6 leading-relaxed font-medium">
                        Dołącz do grona zadowolonych placówek w całej Polsce. Zapewniamy kompleksową obsługę i wysoką jakość zajęć.
                      </p>
                      <div className="space-y-3">
                        <button className="w-full bg-golden/90 hover:bg-golden backdrop-blur-sm text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center shadow-md">
                          <Calendar className="h-4 w-4 mr-2" />
                          Umów Prezentację
                        </button>
                        <button className="w-full bg-white/60 backdrop-blur-sm border border-golden/60 text-dark-brown hover:bg-golden/90 hover:text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Pobierz Broszurę
                        </button>
                      </div>
                      <div className="mt-3 lg:mt-4 p-3 bg-golden/10 backdrop-blur-sm rounded-lg border border-golden/20">
                        <p className="text-xs text-dark-brown/70 text-center font-medium">
                          ✨ Bezpłatna prezentacja w Waszej placówce
                        </p>
                      </div>
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

          {/* Mobile: Horizontal scroll with icons only */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 px-4 min-w-max">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="text-center group animate-fade-in flex-shrink-0 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openBenefitModal(index)}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <benefit.icon className="h-8 w-8 text-golden" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-dark-brown whitespace-nowrap">
                    {benefit.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid with descriptions */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
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

          {/* Mobile: Horizontal scroll */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 px-4 min-w-max">
              {locations.map((location, index) => (
                <div
                  key={location.city}
                  className="bg-cream rounded-lg p-6 text-center hover:shadow-card transition-all duration-300 animate-fade-in flex-shrink-0 w-64"
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

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
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

          {/* Mobile: Carousel with pagination */}
          <div className="lg:hidden">
            <div className="relative">
              <div 
                className="overflow-hidden"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-4"
                    >
                      <div className="bg-white rounded-2xl shadow-card mx-auto max-w-sm overflow-hidden">
                        <div className="h-48 relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <p className="text-sm font-medium">{testimonial.location}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="font-serif text-lg font-bold text-dark-brown mb-2">
                            {testimonial.name}
                          </h4>
                          <p className="text-golden text-sm font-medium mb-3">
                            {testimonial.director}
                          </p>
                          <p className="text-chocolate italic">
                            "{testimonial.text}"
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-golden scale-125' 
                        : 'bg-chocolate/30 hover:bg-chocolate/50'
                    }`}
                    aria-label={`Przejdź do opinii ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8">
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

      {/* Modal for Benefits (Mobile only) */}
      {selectedBenefit !== null && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeBenefitModal}
          />
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in">
            <button
              onClick={closeBenefitModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream transition-colors duration-200"
            >
              <X className="h-5 w-5 text-chocolate" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/10 rounded-full mb-4">
                {React.createElement(benefits[selectedBenefit].icon, { 
                  className: "h-8 w-8 text-golden" 
                })}
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                {benefits[selectedBenefit].title}
              </h3>
              <p className="text-chocolate leading-relaxed">
                {benefits[selectedBenefit].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreschoolPrograms;