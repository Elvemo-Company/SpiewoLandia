import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Instagram, Youtube } from 'lucide-react';

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

  const subjects = [
    { value: 'general', label: 'Ogólne pytanie' },
    { value: 'children-classes', label: 'Zajęcia dla dzieci' },
    { value: 'vocal-lessons', label: 'Lekcje wokalne' },
    { value: 'preschool', label: 'Program dla przedszkola' },
    { value: 'wedding', label: 'Oprawa ślubu' },
    { value: 'other', label: 'Inne' }
  ];

  const locations = [
    {
      city: 'Warszawa',
      address: 'ul. Muzyczna 12, 00-123 Warszawa',
      phone: '+48 123 456 789',
      email: 'warszawa@spiewolandia.pl',
      hours: 'Pon-Pt: 9:00-20:00, Sob: 9:00-15:00'
    },
    {
      city: 'Kraków',
      address: 'ul. Harmonii 8, 31-000 Kraków',
      phone: '+48 123 456 790',
      email: 'krakow@spiewolandia.pl',
      hours: 'Pon-Pt: 10:00-19:00, Sob: 10:00-14:00'
    },
    {
      city: 'Gdańsk',
      address: 'ul. Melodii 15, 80-000 Gdańsk',
      phone: '+48 123 456 791',
      email: 'gdansk@spiewolandia.pl',
      hours: 'Pon-Pt: 9:00-18:00, Sob: 9:00-13:00'
    }
  ];

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
      <section className="relative h-96 lg:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>
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
            <div className="animate-fade-in">
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
                Napisz do Nas
              </h2>
              
              {isSubmitted ? (
                <div className="bg-soft-green/10 border border-soft-green rounded-lg p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-soft-green mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                    Dziękujemy za wiadomość!
                  </h3>
                  <p className="text-chocolate">
                    Odpowiemy w ciągu 24 godzin.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300"
                      >
                        {subjects.map(subject => (
                          <option key={subject.value} value={subject.value}>
                            {subject.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
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
                      className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Opisz swoje pytanie lub potrzeby..."
                    />
                  </div>

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
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
                Informacje Kontaktowe
              </h2>

              <div className="space-y-8">
                {locations.map((location, index) => (
                  <div key={location.city} className="bg-cream rounded-lg p-6">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                      {location.city}
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <MapPin className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                        <span className="text-chocolate">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-golden mr-3 flex-shrink-0" />
                        <a 
                          href={`tel:${location.phone}`}
                          className="text-chocolate hover:text-golden transition-colors duration-300"
                        >
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-golden mr-3 flex-shrink-0" />
                        <a 
                          href={`mailto:${location.email}`}
                          className="text-chocolate hover:text-golden transition-colors duration-300"
                        >
                          {location.email}
                        </a>
                      </div>
                      
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 text-golden mr-3 mt-1 flex-shrink-0" />
                        <span className="text-chocolate">{location.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Social Media */}
                <div className="bg-white rounded-lg p-6 shadow-card">
                  <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                    Śledź Nas
                  </h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-cream hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                    >
                      <Facebook className="h-5 w-5 text-chocolate group-hover:text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-cream hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                    >
                      <Instagram className="h-5 w-5 text-chocolate group-hover:text-white" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-cream hover:bg-golden p-3 rounded-full transition-all duration-300 hover:scale-110 group"
                    >
                      <Youtube className="h-5 w-5 text-chocolate group-hover:text-white" />
                    </a>
                  </div>
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
              Nasze lokalizacje w całej Polsce
            </p>
          </div>

          <div className="bg-white rounded-2xl p-4 shadow-card">
            <div className="aspect-video bg-cream rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-golden mx-auto mb-4" />
                <p className="text-chocolate text-lg">
                  Interaktywna mapa będzie tutaj
                </p>
                <p className="text-chocolate text-sm mt-2">
                  Warszawa • Kraków • Gdańsk
                </p>
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
                className="bg-cream rounded-lg p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-serif text-lg font-bold text-dark-brown mb-3">
                  {item.question}
                </h3>
                <p className="text-chocolate leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

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