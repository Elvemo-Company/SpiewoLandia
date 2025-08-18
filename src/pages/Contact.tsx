import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const subjects = [
    { value: 'general', label: 'Ogólne pytanie' },
    { value: 'children-classes', label: 'Zajęcia dla dzieci' },
    { value: 'vocal-lessons', label: 'Lekcje wokalne' },
    { value: 'preschool', label: 'Program dla przedszkola' },
    { value: 'wedding', label: 'Oprawa ślubu' },
    { value: 'other', label: 'Inne' }
  ];

  const mainLocation = {
    city: 'Warszawa - Siedziba Główna',
    address: 'ul. Muzyczna 12, 00-123 Warszawa',
    phone: '+48 517 666 426',
    email: 'info@spiewolandia.pl',
    hours: 'Pon-Pt: 9:00-20:00, Sob: 9:00-15:00',
    additionalInfo: [
      'Parking dostępny na miejscu',
      'Dostęp dla osób niepełnosprawnych',
      'Sale klimatyzowane z profesjonalnym sprzętem',
      'Recepcja czynna w godzinach zajęć'
    ],
    otherLocations: [
      { city: 'Kraków', phone: '+48 123 456 790', email: 'krakow@spiewolandia.pl' },
      { city: 'Gdańsk', phone: '+48 123 456 791', email: 'gdansk@spiewolandia.pl' },
      { city: 'Wrocław', phone: '+48 123 456 792', email: 'wroclaw@spiewolandia.pl' }
    ]
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    }, 3000);
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      question: 'Czy oferujecie lekcje próbne?',
      answer: 'Tak! Pierwsza lekcja próbna jest dostępna ze zniżką 20%. To świetna okazja, aby poznać naszą metodę nauczania.'
    },
    {
      question: 'Od jakiego wieku przyjmujecie dzieci?',
      answer: 'Nasze zajęcia grupowe są przeznaczone dla dzieci od 3. roku życia. Lekcje indywidualne prowadzimy od 5. roku życia.'
    },
    {
      question: 'Czy można odrobić zajęcia?',
      answer: 'Tak, oferujemy możliwość odrobienia zajęć w przypadku usprawiedliwionej nieobecności.'
    },
    {
      question: 'Jak daleko wcześniej należy rezerwować oprawę ślubu?',
      answer: 'Zalecamy rezerwację minimum 6 miesięcy wcześniej, szczególnie w sezonie weselnym (maj-wrzesień).'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
            Kontakt
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Masz pytania? Chcesz umówić zajęcia? Skontaktuj się z nami!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in flex flex-col h-full" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
                Wyślij Wiadomość
              </h2>

              {isSubmitted ? (
                <div className="bg-soft-green/10 border border-soft-green/30 rounded-lg p-8 text-center flex-grow flex items-center justify-center">
                  <div>
                    <div className="w-16 h-16 bg-soft-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                      Dziękujemy za wiadomość!
                    </h3>
                    <p className="text-chocolate">
                      Odpowiemy w ciągu 24 godzin.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                        Imię i nazwisko *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                        placeholder="Twoje imię i nazwisko"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                        placeholder="twoj@email.pl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark-brown mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                        placeholder="+48 123 456 789"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-brown mb-2">
                        Temat *
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300 bg-white appearance-none cursor-pointer pr-10"
                        >
                          {subjects.map(subject => (
                            <option key={subject.value} value={subject.value}>
                              {subject.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <ChevronDown className="h-5 w-5 text-chocolate" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">
                      Wiadomość *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full h-full min-h-[150px] px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Opisz swoje pytanie lub potrzeby..."
                    />
                  </div>

                  <div className="mt-auto space-y-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-golden hover:bg-sunset text-white py-4 rounded-lg font-medium text-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <div className="loading-spinner mr-2"></div>
                      ) : (
                        <Send className="h-5 w-5 mr-2" />
                      )}
                      {isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
                    </button>

                    <p className="text-sm text-chocolate">
                      * Pola wymagane. Odpowiemy w ciągu 24 godzin.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in flex flex-col h-full" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
                Informacje Kontaktowe
              </h2>

              <div className="bg-cream rounded-lg p-6 mb-6 flex-grow">
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                  {mainLocation.city}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                    <span className="text-chocolate">{mainLocation.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-golden mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${mainLocation.phone}`}
                      className="text-chocolate hover:text-golden transition-colors duration-300"
                    >
                      {mainLocation.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-golden mr-3 flex-shrink-0" />
                    <a 
                      href={`mailto:${mainLocation.email}`}
                      className="text-chocolate hover:text-golden transition-colors duration-300"
                    >
                      {mainLocation.email}
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                    <span className="text-chocolate">{mainLocation.hours}</span>
                  </div>
                </div>
              </div>

              {/* Social Media - at bottom to align with submit button */}
              <div className="bg-white rounded-lg p-6 shadow-card mt-auto">
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                  Śledź Nas
                </h3>
                <p className="text-chocolate text-sm mb-4">
                  Bądź na bieżąco z naszymi wydarzeniami i inspiracjami muzycznymi!
                </p>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center bg-cream hover:bg-golden p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <Facebook className="h-5 w-5 text-chocolate group-hover:text-white mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dark-brown group-hover:text-white">Facebook</p>
                      <p className="text-xs text-chocolate group-hover:text-white/80">Zdjęcia z zajęć i wydarzeń</p>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center bg-cream hover:bg-golden p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <Instagram className="h-5 w-5 text-chocolate group-hover:text-white mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dark-brown group-hover:text-white">Instagram</p>
                      <p className="text-xs text-chocolate group-hover:text-white/80">Codzienne historie muzyczne</p>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center bg-cream hover:bg-golden p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] group"
                  >
                    <Youtube className="h-5 w-5 text-chocolate group-hover:text-white mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-dark-brown group-hover:text-white">YouTube</p>
                      <p className="text-xs text-chocolate group-hover:text-white/80">Nagrania występów uczniów</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Znajdź Nas
            </h2>
            <p className="text-lg text-chocolate">
              Nasza lokalizacja w Łodzi - przyjdź na bezpłatną konsultację
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-card overflow-hidden">
            <div className="rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2466.8169691475653!2d19.454589315746588!3d51.75941097970302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34024d1ff021%3A0x7b6c0e8f5a1b2f3c!2sPiotrkowska%201%2C%2090-001%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1645123456789!5m2!1spl!2spl"
                width="100%" 
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - ŚpiewoLandia Łódź"
                className="w-full"
              ></iframe>
            </div>
            <div className="p-4 bg-golden/10 rounded-b-lg mt-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-dark-brown">ŚpiewoLandia Łódź</h3>
                <a 
                  href="https://maps.google.com/?q=Kaliska+40+Łódź"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-golden hover:bg-sunset text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm flex items-center"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Otwórz w Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Często Zadawane Pytania
            </h2>
          </div>

          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-cream rounded-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Mobile: Accordion with toggle */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-cream/80 transition-colors duration-300"
                  >
                    <h3 className="font-serif text-lg font-bold text-dark-brown">
                      {item.question}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-chocolate transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6 animate-slide-down">
                      <p className="text-chocolate leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>

                {/* Desktop: Always visible */}
                <div className="hidden lg:block p-6">
                  <h3 className="font-serif text-lg font-bold text-dark-brown mb-3">
                    {item.question}
                  </h3>
                  <p className="text-chocolate leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
              @keyframes slide-down {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
              .animate-slide-down {
                animation: slide-down 0.3s ease-out;
              }
            `
          }} />

          <div className="text-center mt-12">
            <p className="text-chocolate mb-4">
              Nie znalazłeś odpowiedzi na swoje pytanie?
            </p>
            <button className="bg-golden hover:bg-sunset text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              Skontaktuj się z Nami
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;