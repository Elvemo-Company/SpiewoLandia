
import React, { useState } from 'react';
import { Users, Clock, BookOpen, Heart, CheckCircle, Download, MapPin, Calendar, Play, Star, Music } from 'lucide-react';

const VocalHero = () => (
  <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
        <img 
          src="https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg"
          alt="Vocal lessons"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
        Lekcje Wokalne
      </h1>
      <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
        Odkryj potencjał swojego głosu z doświadczonymi pedagogami. 
        Indywidualne podejście dla każdego poziomu zaawansowania.
      </p>
      <button className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
        Umów Pierwszą Lekcję
      </button>
    </div>
  </section>
);

const VocalLessons = () => {
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const levels = [
    {
      id: 'beginner',
      name: 'Początkujący',
      description: 'Idealne dla osób rozpoczynających przygodę z śpiewem',
      duration: '45 min',
      price: '120 zł',
      features: ['Podstawy techniki oddychania', 'Rozgrzewka głosowa', 'Proste utwory', 'Budowanie pewności siebie']
    },
    {
      id: 'intermediate',
      name: 'Średniozaawansowany',
      description: 'Dla osób z podstawowym doświadczeniem wokalnym',
      duration: '60 min',
      price: '150 zł',
      features: ['Zaawansowana technika oddychania', 'Rozszerzanie skali głosu', 'Interpretacja utworów', 'Praca nad stylem']
    },
    {
      id: 'advanced',
      name: 'Zaawansowany',
      description: 'Profesjonalne przygotowanie do występów',
      duration: '60 min',
      price: '180 zł',
      features: ['Techniki estradowe', 'Przygotowanie do konkursów', 'Nagrania studyjne', 'Coaching sceniczny']
    }
  ];

  const sampleLessons = [
    {
      title: 'Rozgrzewka głosowa - podstawy',
      duration: '3:24',
      level: 'Początkujący',
      teacher: 'Anna Kowalska'
    },
    {
      title: 'Technika oddychania przeponowego',
      duration: '5:12',
      level: 'Średniozaawansowany',
      teacher: 'Anna Kowalska'
    },
    {
      title: 'Interpretacja ballady popowej',
      duration: '4:38',
      level: 'Zaawansowany',
      teacher: 'Anna Kowalska'
    }
  ];

  const testimonials = [
    {
      name: 'Magdalena W.',
      text: 'Zawsze marzyłam o śpiewaniu. Dzięki lekcjom z Anną odkryłam swój głos i zyskałam pewność siebie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'Tomasz K.',
      text: 'Profesjonalne podejście i indywidualne tempo nauki. Polecam każdemu, kto chce rozwijać swoje umiejętności wokalne.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ];

  const handlePlayAudio = (audioId: string) => {
    if (playingAudio === audioId) {
      setPlayingAudio(null);
    } else {
      setPlayingAudio(audioId);
    }
  };

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


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <VocalHero />

      {/* Lesson Levels */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Poziomy Zaawansowania
            </h2>
            <p className="text-lg text-chocolate max-w-2xl mx-auto">
              Wybierz poziom dostosowany do Twoich umiejętności i celów
            </p>
          </div>

          <div className="flex justify-center mb-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 px-12 lg:px-0 min-w-max lg:min-w-0">
              {levels.map((level, idx) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-6 lg:px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap
                    ${selectedLevel === level.id
                      ? 'bg-golden text-white shadow-card-hover'
                      : 'bg-cream text-chocolate hover:bg-golden hover:text-white'}
                    ${idx === 0 ? 'ml-48 lg:ml-0' : ''}
                  `}
                >
                  {level.name}
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

          <div className="max-w-4xl mx-auto">
            {levels.map((level) => (
              <div
                key={level.id}
                className={`transition-all duration-500 ${
                  selectedLevel === level.id ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="bg-cream rounded-2xl p-6 lg:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-4">
                        {level.name}
                      </h3>
                      <p className="text-chocolate text-lg mb-6 leading-relaxed">
                        {level.description}
                      </p>
                      <div className="flex items-center justify-between mb-6 bg-white/60 rounded-lg p-4">
                        <div className="flex items-center">
                          <Clock className="h-5 w-5 text-golden mr-2" />
                          <span className="text-chocolate">{level.duration}</span>
                        </div>
                        <span className="text-2xl font-bold text-golden">{level.price}</span>
                      </div>
                      <ul className="space-y-3">
                        {level.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-chocolate">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/40 rounded-xl p-6 lg:p-8">
                      <div className="hidden lg:flex justify-center mb-6">
                        <div className="w-20 h-20 bg-golden rounded-full flex items-center justify-center">
                          <Music className="h-10 w-10 text-white" />
                        </div>
                      </div>
                        <h4 className="hidden lg:block font-serif text-lg lg:text-xl font-bold text-dark-brown mb-4 lg:mb-6">
                          Rozpocznij Teraz
                        </h4>
                        <button className="bg-golden hover:bg-sunset text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-medium text-base lg:text-lg transition-all duration-300 transform hover:scale-105 w-full mb-3 lg:mb-4">
                          Zarezerwuj Lekcję
                        </button>
                        <p className="text-xs lg:text-sm text-soft-green font-medium">
                          -20% na pierwszą lekcję
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

      {/* Sample Lessons */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Przykładowe Lekcje
            </h2>
            <p className="text-lg text-chocolate">
              Posłuchaj fragmentów naszych lekcji
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {sampleLessons.map((lesson, index) => (
              <div
                key={index}
                className="bg-cream rounded-lg p-6 flex items-center justify-between hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => handlePlayAudio(`lesson-${index}`)}
                    className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      playingAudio === `lesson-${index}`
                        ? 'bg-sunset text-white'
                        : 'bg-golden text-white hover:bg-sunset'
                    }`}
                  >
                    <Play className="h-5 w-5 ml-0.5" />
                  </button>
                  <div>
                    <h4 className="font-semibold text-dark-brown">{lesson.title}</h4>
                    <p className="text-sm text-chocolate">
                      {lesson.teacher} • {lesson.level} • {lesson.duration}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-chocolate">Darmowy podgląd</span>
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
              Opinie Uczniów
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
                      <div className="bg-white rounded-lg p-6 shadow-card mx-auto max-w-sm">
                        <div className="flex items-center mb-4">
                          {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 text-golden fill-current" />
                          ))}
                        </div>
                        <p className="text-chocolate mb-4 italic">"{testimonial.text}"</p>
                        <div className="flex items-center">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <span className="font-semibold text-dark-brown">{testimonial.name}</span>
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
                className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4 text-golden fill-current" />
                  ))}
                </div>
                <p className="text-chocolate mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <span className="font-semibold text-dark-brown">{testimonial.name}</span>
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
            Rozpocznij Swoją Muzyczną Podróż
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Umów się na bezpłatną lekcję próbną i odkryj potencjał swojego głosu
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
              <Calendar className="inline-block h-5 w-5 mr-2" />
              Zarezerwuj Lekcję
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

export default VocalLessons;