import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  // Swipe handling for mobile carousel
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
    if (isLeftSwipe && currentSlide < testimonials.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const testimonials = [
    {
      name: 'Anna Kowalska',
      role: 'Mama Zosi (6 lat)',
      content: 'Moja córka uwielbia zajęcia w ŚpiewoLandii! Pani pedagog ma niesamowity dar do pracy z dziećmi. Zosia zyskała pewność siebie i teraz śpiewa w domu cały czas.',
      rating: 5,
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
    },
    {
      name: 'Marek Nowak',
      role: 'Dyrektor Przedszkola "Tęczowe Sny"',
      content: 'Współpraca z ŚpiewoLandią to same korzyści. Dzieci są zachwycone zajęciami, a rodzice bardzo zadowoleni. Profesjonalizm na najwyższym poziomie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      name: 'Katarzyna i Tomasz',
      role: 'Młoda Para',
      content: 'Oprawa muzyczna naszego ślubu była absolutnie magiczna! Goście do dziś wspominają te piękne chwile. Dziękujemy za profesjonalizm i wsparcie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg'
    },
    {
      name: 'Magdalena Wiśniewska',
      role: 'Uczennica lekcji wokalnych',
      content: 'Zawsze marzyłam o śpiewaniu. Dzięki indywidualnym lekcjom w ŚpiewoLandii rozwijam swój głos i zyskuję pewność siebie na scenie.',
      rating: 5,
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-golden fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
            Opinie Naszych Klientów
          </h2>
          <p className="text-lg text-chocolate">
            Zobacz, co mówią o nas zadowoleni klienci
          </p>
        </div>

        {/* Mobile: Carousel with swipe and dots */}
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
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-2xl shadow-card-hover p-6 text-center animate-fade-in mx-auto max-w-sm">
                      <Quote className="h-8 w-8 text-golden mx-auto mb-4 opacity-50" />
                      <div className="mb-6">
                        <p className="text-base text-dark-brown leading-relaxed italic">
                          "{testimonial.content}"
                        </p>
                      </div>
                      <div className="flex items-center justify-center mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <div className="flex items-center justify-center flex-col sm:flex-row">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover mb-2 sm:mb-0 sm:mr-4"
                        />
                        <div className="text-center sm:text-left">
                          <h4 className="font-semibold text-dark-brown text-sm">
                            {testimonial.name}
                          </h4>
                          <p className="text-chocolate text-xs">
                            {testimonial.role}
                          </p>
                        </div>
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
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-golden scale-125'
                      : 'bg-chocolate/30 hover:bg-chocolate/50'
                  }`}
                  aria-label={`Przejdź do opinii ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: slider with navigation and dots */}
        <div className="hidden lg:block relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <div className="bg-white rounded-2xl shadow-card-hover p-6 lg:p-12 text-center animate-fade-in mx-4 lg:mx-0">
            <Quote className="h-8 w-8 lg:h-12 lg:w-12 text-golden mx-auto mb-4 lg:mb-6 opacity-50" />
            <div className="mb-6 lg:mb-8">
              <p className="text-base lg:text-xl text-dark-brown leading-relaxed italic">
                "{testimonials[currentSlide].content}"
              </p>
            </div>
            <div className="flex items-center justify-center mb-4">
              {renderStars(testimonials[currentSlide].rating)}
            </div>
            <div className="flex items-center justify-center flex-col sm:flex-row">
              <img
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover mb-2 sm:mb-0 sm:mr-4"
              />
              <div className="text-center sm:text-left">
                <h4 className="font-semibold text-dark-brown text-sm lg:text-base">
                  {testimonials[currentSlide].name}
                </h4>
                <p className="text-chocolate text-xs lg:text-sm">
                  {testimonials[currentSlide].role}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-0 top-1/2 transform -translate-y-1/2 lg:-translate-x-16 bg-white rounded-full p-2 lg:p-3 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-chocolate" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-0 top-1/2 transform -translate-y-1/2 lg:translate-x-16 bg-white rounded-full p-2 lg:p-3 shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-110 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-chocolate" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-golden scale-125' : 'bg-chocolate/30 hover:bg-chocolate/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini Testimonials Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-chocolate text-sm leading-relaxed mb-4 italic">
                "{testimonial.content.substring(0, 100)}..."
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div>
                  <p className="font-semibold text-dark-brown text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-chocolate text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;