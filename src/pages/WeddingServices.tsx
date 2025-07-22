
import React, { useState } from 'react';
import { Heart, Music, Camera, Users, Clock, Star, CheckCircle, Calendar, Award, Phone, Play, Pause, Volume2 } from 'lucide-react';

const WeddingHero = () => (
  <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
        <img 
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
          alt="Wedding ceremony with musicians"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
        Oprawa Muzyczna Ślubów
      </h1>
      <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
        Tworzymy magiczne momenty muzyczne w Waszym najważniejszym dniu. 
        Profesjonalna oprawa ceremonii i przyjęć weselnych.
      </p>
      <button className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
        Sprawdź Dostępność
      </button>
    </div>
  </section>
);

const WeddingServices = () => {
  const [selectedPackage, setSelectedPackage] = useState('classic');
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('ceremony');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryTouchStart, setGalleryTouchStart] = useState<number | null>(null);
  const [galleryTouchEnd, setGalleryTouchEnd] = useState<number | null>(null);

  const packages = [
    {
      id: 'classic',
      name: 'Pakiet Klasyczny',
      price: '1200 zł',
      duration: '2 godziny',
      description: 'Idealne rozwiązanie dla kameralnych ceremonii',
      features: [
        'Oprawa ceremoni ślubnej',
        'Duet wokalny (kobieta + mężczyzna)',
        'Profesjonalny sprzęt nagłośnieniowy',
        'Konsultacja repertuaru',
        'Próba przed ceremonią'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'Pakiet Premium',
      price: '2200 zł',
      duration: '4 godziny',
      description: 'Kompleksowa oprawa ceremonii i części przyjęcia',
      features: [
        'Wszystko z pakietu klasycznego',
        'Oprawa koktajlu powitalnego',
        'Trio instrumentalne',
        'Pierwszy taniec (nauka choreografii)',
        'Oprawa wejścia Pary Młodej',
        'Backup instrumentalny'
      ],
      popular: true
    },
    {
      id: 'exclusive',
      name: 'Pakiet Exclusive',
      price: '3500 zł',
      duration: '6 godzin',
      description: 'Luksusowa oprawa całego wesela',
      features: [
        'Wszystko z pakietu premium',
        'Kwartet smyczkowy',
        'Oprawa całego przyjęcia',
        'Specjalne życzenia muzyczne gości',
        'Nagranie ceremonii',
        'Dedykowane utwory dla Pary Młodej',
        'Koordynator muzyczny'
      ],
      popular: false
    }
  ];

  const repertoire = {
    ceremony: [
      { title: 'Ave Maria', artist: 'Schubert', duration: '4:32', category: 'Klasyczna' },
      { title: 'Canon in D', artist: 'Pachelbel', duration: '3:45', category: 'Klasyczna' },
      { title: 'A Thousand Years', artist: 'Christina Perri', duration: '4:45', category: 'Współczesna' },
      { title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23', category: 'Pop' },
      { title: 'All of Me', artist: 'John Legend', duration: '4:29', category: 'Pop' }
    ],
    cocktail: [
      { title: 'La Vie En Rose', artist: 'Édith Piaf', duration: '3:28', category: 'Jazz' },
      { title: 'Fly Me to the Moon', artist: 'Frank Sinatra', duration: '2:48', category: 'Jazz' },
      { title: 'Autumn Leaves', artist: 'Standard', duration: '4:15', category: 'Jazz' },
      { title: 'The Way You Look Tonight', artist: 'Standard', duration: '3:52', category: 'Jazz' }
    ],
    reception: [
      { title: 'At Last', artist: 'Etta James', duration: '3:01', category: 'Soul' },
      { title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', category: 'Pop' },
      { title: 'Make You Feel My Love', artist: 'Bob Dylan', duration: '3:32', category: 'Ballada' },
      { title: 'Unchained Melody', artist: 'The Righteous Brothers', duration: '3:36', category: 'Klasyka' }
    ]
  };

  const categories = [
    { id: 'ceremony', name: 'Ceremonia', icon: Heart },
    { id: 'cocktail', name: 'Koktajl', icon: Users },
    { id: 'reception', name: 'Przyjęcie', icon: Music }
  ];

  const gallery = [
    {
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      title: 'Ceremonia w plenerze',
      location: 'Pałac Romantyczny, Turzno'
    },
    {
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg',
      title: 'Oprawa kościelna',
      location: 'Kościół św. Anny, Warszawa'
    },
    {
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
      title: 'Pierwszy taniec',
      location: 'Hotel Belvedere, Kraków'
    },
    {
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      title: 'Trio smyczkowe',
      location: 'Dwór Korona Karkonoszy'
    }
  ];

  const testimonials = [
    {
      names: 'Anna i Tomasz',
      date: '15.06.2024',
      text: 'Oprawa naszego ślubu była absolutnie magiczna! Goście do dziś wspominają te piękne chwile. Profesjonalizm na najwyższym poziomie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      names: 'Katarzyna i Michał',
      date: '22.08.2024',
      text: 'Dzięki ŚpiewoLandii nasz ślub był wyjątkowy. Każdy utwór był perfekcyjnie dobrany do momentu. Serdecznie polecamy!',
      rating: 5,
      image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg'
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

  // Swipe handling for gallery
  const onGalleryTouchStart = (e: React.TouchEvent) => {
    setGalleryTouchEnd(null);
    setGalleryTouchStart(e.targetTouches[0].clientX);
  };

  const onGalleryTouchMove = (e: React.TouchEvent) => {
    setGalleryTouchEnd(e.targetTouches[0].clientX);
  };

  const onGalleryTouchEnd = () => {
    if (!galleryTouchStart || !galleryTouchEnd) return;
    
    const distance = galleryTouchStart - galleryTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentGalleryImage < gallery.length - 1) {
      setCurrentGalleryImage(currentGalleryImage + 1);
    }
    if (isRightSwipe && currentGalleryImage > 0) {
      setCurrentGalleryImage(currentGalleryImage - 1);
    }
  };

  const handlePlayTrack = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    } else {
      setPlayingTrack(trackId);
    }
  };


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <WeddingHero />

      {/* Packages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Pakiety Usług
            </h2>
            <p className="text-lg text-chocolate max-w-2xl mx-auto">
              Wybierz pakiet dostosowany do charakteru Waszego wesela
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className={`relative bg-cream rounded-2xl p-8 transition-all duration-300 hover:shadow-card-hover animate-fade-in ${
                  pkg.popular ? 'ring-2 ring-golden scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-golden text-white px-4 py-2 rounded-full text-sm font-medium">
                      Najpopularniejszy
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-dark-brown mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-chocolate mb-4">{pkg.description}</p>
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <span className="text-3xl font-bold text-golden">{pkg.price}</span>
                    <div className="text-sm text-chocolate">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-chocolate text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular
                      ? 'bg-golden hover:bg-sunset text-white'
                      : 'border-2 border-golden text-golden hover:bg-golden hover:text-white'
                  }`}
                >
                  Wybierz Pakiet
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasz Repertuar
            </h2>
            <p className="text-lg text-chocolate">
              Posłuchaj przykładów z naszego bogatego repertuaru
            </p>
          </div>

          <div className="flex justify-center mb-8 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-3 px-12 lg:px-0 min-w-max lg:min-w-0">
              {categories.map((category, idx) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center whitespace-nowrap
                    ${selectedCategory === category.id
                      ? 'bg-golden text-white shadow-card-hover'
                      : 'bg-white text-chocolate hover:bg-golden hover:text-white'}
                    ${idx === 0 ? 'ml-16 lg:ml-0' : ''}
                  `}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.name}
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
            <div className="bg-white rounded-2xl p-6 lg:p-8">
              <div className="space-y-4">
                {repertoire[selectedCategory as keyof typeof repertoire].map((track, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-cream transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handlePlayTrack(`${selectedCategory}-${index}`)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          playingTrack === `${selectedCategory}-${index}`
                            ? 'bg-sunset text-white'
                            : 'bg-golden text-white hover:bg-sunset'
                        }`}
                      >
                        {playingTrack === `${selectedCategory}-${index}` ? (
                          <Pause className="h-4 w-4" />
                        ) : (
                          <Play className="h-4 w-4 ml-0.5" />
                        )}
                      </button>
                      <div>
                        <h4 className="font-semibold text-dark-brown">{track.title}</h4>
                        <p className="text-sm text-chocolate">
                          {track.artist} • {track.category} • {track.duration}
                        </p>
                      </div>
                    </div>
                    <Volume2 className="h-5 w-5 text-chocolate" />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-chocolate mb-4">
                  To tylko przykłady z naszego repertuaru. Dostosowujemy muzykę do Waszych preferencji!
                </p>
                <button className="bg-golden hover:bg-sunset text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                  Pełny Repertuar (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Galeria Występów
            </h2>
            <p className="text-lg text-chocolate">
              Zobacz nas w akcji podczas różnych ceremonii ślubnych
            </p>
          </div>

          {/* Mobile: Carousel with pagination */}
          <div className="lg:hidden">
            <div className="relative">
              <div 
                className="overflow-hidden rounded-2xl"
                onTouchStart={onGalleryTouchStart}
                onTouchMove={onGalleryTouchMove}
                onTouchEnd={onGalleryTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentGalleryImage * 100}%)` }}
                >
                  {gallery.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="relative aspect-square mx-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-transparent to-transparent rounded-lg">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="font-semibold mb-1">{item.title}</h4>
                            <p className="text-sm opacity-90">{item.location}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {gallery.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentGalleryImage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentGalleryImage 
                        ? 'bg-golden scale-125' 
                        : 'bg-chocolate/30 hover:bg-chocolate/50'
                    }`}
                    aria-label={`Przejdź do zdjęcia ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6">
            {gallery.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-sm opacity-90">{item.location}</p>
                  </div>
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
              Opinie Par Młodych
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
                            alt={testimonial.names}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h4 className="font-serif text-lg font-bold">{testimonial.names}</h4>
                            <p className="text-sm opacity-90">{testimonial.date}</p>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                              <Star key={starIndex} className="h-4 w-4 text-golden fill-current" />
                            ))}
                          </div>
                          <p className="text-chocolate italic">"{testimonial.text}"</p>
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
                    alt={testimonial.names}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-serif text-lg font-bold">{testimonial.names}</h4>
                    <p className="text-sm opacity-90">{testimonial.date}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 text-golden fill-current" />
                    ))}
                  </div>
                  <p className="text-chocolate italic">"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-golden to-sunset">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Heart className="h-16 w-16 text-white mx-auto mb-6" />
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Zarezerwuj Swój Wyjątkowy Dzień
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Skontaktuj się z nami już dziś i sprawdź dostępność na Wasz termin ślubu
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Sprawdź Dostępność
            </button>
            <a 
              href="tel:+48123456789"
              className="text-white hover:text-cream font-medium text-lg flex items-center transition-colors duration-300"
            >
              lub zadzwoń: +48 123 456 789
            </a>
          </div>
          <p className="text-white/80 text-sm mt-6">
            Bezpłatna konsultacja i wycena • Możliwość odsłuchania na żywo
          </p>
        </div>
      </section>
    </div>
  );
};

export default WeddingServices;