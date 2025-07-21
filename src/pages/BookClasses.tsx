import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CheckCircle, ArrowRight, Star, User } from 'lucide-react';

const BookClasses = () => {
  const [selectedService, setSelectedService] = useState('children-classes');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    location: '',
    date: '',
    time: '',
    childName: '',
    childAge: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    specialRequests: ''
  });

  const services = [
    {
      id: 'children-classes',
      name: 'Zajęcia dla Dzieci',
      description: 'Grupowe zajęcia muzyczne dla dzieci 3-12 lat',
      duration: '45 min',
      price: '80 zł',
      icon: Users,
      color: 'from-golden to-sunset'
    },
    {
      id: 'vocal-lessons',
      name: 'Lekcje Wokalne',
      description: 'Indywidualne lekcje śpiewu',
      duration: '60 min',
      price: '150 zł',
      icon: User,
      color: 'from-sunset to-muted-red'
    }
  ];

  const locations = [
    {
      id: 'warszawa-centrum',
      name: 'Warszawa Centrum',
      address: 'ul. Muzyczna 12',
      available: true
    },
    {
      id: 'warszawa-mokotow',
      name: 'Warszawa Mokotów',
      address: 'ul. Harmonii 8',
      available: true
    },
    {
      id: 'krakow-centrum',
      name: 'Kraków Centrum',
      address: 'ul. Melodii 15',
      available: true
    },
    {
      id: 'gdansk-centrum',
      name: 'Gdańsk Centrum',
      address: 'ul. Rytmu 22',
      available: false
    }
  ];

  const timeSlots = [
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '12:00', available: false },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: false },
    { time: '18:00', available: true }
  ];

  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      const isAvailable = !isWeekend && Math.random() > 0.3; // Random availability
      
      days.push({
        date: date.toISOString().split('T')[0],
        day: date.getDate(),
        month: date.toLocaleDateString('pl-PL', { month: 'short' }),
        weekday: date.toLocaleDateString('pl-PL', { weekday: 'short' }),
        available: isAvailable
      });
    }
    
    return days;
  };

  const calendarDays = generateCalendarDays();

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setBookingData(prev => ({ ...prev, service: serviceId }));
  };

  const handleLocationSelect = (locationId: string) => {
    setSelectedLocation(locationId);
    setBookingData(prev => ({ ...prev, location: locationId }));
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setBookingData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingData(prev => ({ ...prev, time }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return selectedService;
      case 2:
        return selectedLocation;
      case 3:
        return selectedDate && selectedTime;
      case 4:
        return bookingData.parentName && bookingData.parentEmail && bookingData.parentPhone;
      default:
        return false;
    }
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedLocationData = locations.find(l => l.id === selectedLocation);

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-64 lg:h-80 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg"
              alt="Book classes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-4 animate-fade-in">
            Zarezerwuj Zajęcia
          </h1>
          <p className="text-lg text-white/90 animate-slide-up">
            Wybierz termin i umów się na zajęcia muzyczne
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    step >= stepNumber
                      ? 'bg-golden text-white'
                      : 'bg-cream text-chocolate'
                  }`}
                >
                  {step > stepNumber ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    stepNumber
                  )}
                </div>
                {stepNumber < 4 && (
                  <div
                    className={`w-16 lg:w-24 h-1 mx-2 transition-all duration-300 ${
                      step > stepNumber ? 'bg-golden' : 'bg-cream'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4 text-sm">
            <span className={step >= 1 ? 'text-golden font-medium' : 'text-chocolate'}>
              Wybierz usługę
            </span>
            <span className={step >= 2 ? 'text-golden font-medium' : 'text-chocolate'}>
              Lokalizacja
            </span>
            <span className={step >= 3 ? 'text-golden font-medium' : 'text-chocolate'}>
              Data i godzina
            </span>
            <span className={step >= 4 ? 'text-golden font-medium' : 'text-chocolate'}>
              Dane kontaktowe
            </span>
          </div>
        </div>
      </div>

      {/* Booking Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-card p-8 lg:p-12">
            
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-8 text-center">
                  Wybierz Rodzaj Zajęć
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service) => (
                    <div
                      key={service.id}
                      onClick={() => handleServiceSelect(service.id)}
                      className={`relative cursor-pointer rounded-xl p-6 transition-all duration-300 transform hover:scale-105 ${
                        selectedService === service.id
                          ? 'ring-2 ring-golden shadow-card-hover'
                          : 'hover:shadow-card'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-xl`}></div>
                      <div className="relative">
                        <service.icon className="h-12 w-12 text-golden mb-4" />
                        <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                          {service.name}
                        </h3>
                        <p className="text-chocolate mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-chocolate">
                            <Clock className="h-4 w-4 mr-1" />
                            {service.duration}
                          </div>
                          <div className="text-xl font-bold text-golden">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Location Selection */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-8 text-center">
                  Wybierz Lokalizację
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.map((location) => (
                    <div
                      key={location.id}
                      onClick={() => location.available && handleLocationSelect(location.id)}
                      className={`p-6 rounded-lg border-2 transition-all duration-300 ${
                        !location.available
                          ? 'opacity-50 cursor-not-allowed bg-gray-50 border-gray-200'
                          : selectedLocation === location.id
                          ? 'border-golden bg-golden/5 cursor-pointer'
                          : 'border-cream hover:border-golden cursor-pointer hover:bg-cream/50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-dark-brown mb-1">
                            {location.name}
                          </h3>
                          <p className="text-sm text-chocolate flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {location.address}
                          </p>
                        </div>
                        {!location.available && (
                          <span className="text-xs bg-muted-red text-white px-2 py-1 rounded">
                            Niedostępne
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date and Time Selection */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-8 text-center">
                  Wybierz Datę i Godzinę
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Calendar */}
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-4">Wybierz datę:</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {calendarDays.slice(0, 21).map((day) => (
                        <button
                          key={day.date}
                          onClick={() => day.available && handleDateSelect(day.date)}
                          disabled={!day.available}
                          className={`p-2 text-sm rounded-lg transition-all duration-300 ${
                            !day.available
                              ? 'opacity-50 cursor-not-allowed bg-gray-100'
                              : selectedDate === day.date
                              ? 'bg-golden text-white'
                              : 'hover:bg-cream border border-cream'
                          }`}
                        >
                          <div className="text-xs">{day.weekday}</div>
                          <div className="font-semibold">{day.day}</div>
                          <div className="text-xs">{day.month}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <h3 className="font-semibold text-dark-brown mb-4">Wybierz godzinę:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available && handleTimeSelect(slot.time)}
                          disabled={!slot.available}
                          className={`p-3 rounded-lg font-medium transition-all duration-300 ${
                            !slot.available
                              ? 'opacity-50 cursor-not-allowed bg-gray-100'
                              : selectedTime === slot.time
                              ? 'bg-golden text-white'
                              : 'border border-cream hover:bg-cream'
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedDate && selectedTime && (
                  <div className="mt-8 p-4 bg-cream rounded-lg">
                    <h4 className="font-semibold text-dark-brown mb-2">Podsumowanie:</h4>
                    <p className="text-chocolate">
                      <strong>{selectedServiceData?.name}</strong> w {selectedLocationData?.name}
                      <br />
                      Data: {new Date(selectedDate).toLocaleDateString('pl-PL', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                      <br />
                      Godzina: {selectedTime}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div className="animate-fade-in">
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-8 text-center">
                  Dane Kontaktowe
                </h2>
                
                <form className="space-y-6">
                  {selectedService === 'children-classes' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-brown mb-2">
                          Imię dziecka *
                        </label>
                        <input
                          type="text"
                          name="childName"
                          required
                          value={bookingData.childName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                          placeholder="Imię dziecka"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-brown mb-2">
                          Wiek dziecka *
                        </label>
                        <input
                          type="number"
                          name="childAge"
                          required
                          min="3"
                          max="12"
                          value={bookingData.childAge}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                          placeholder="Wiek"
                        />
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-brown mb-2">
                        {selectedService === 'children-classes' ? 'Imię i nazwisko rodzica *' : 'Imię i nazwisko *'}
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={bookingData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                        placeholder="Imię i nazwisko"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-brown mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        value={bookingData.parentEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-brown mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      required
                      value={bookingData.parentPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent"
                      placeholder="+48 123 456 789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-brown mb-2">
                      Dodatkowe informacje
                    </label>
                    <textarea
                      name="specialRequests"
                      rows={4}
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-cream rounded-lg focus:outline-none focus:ring-2 focus:ring-golden focus:border-transparent resize-none"
                      placeholder="Czy masz jakieś specjalne życzenia lub pytania?"
                    />
                  </div>
                </form>

                {/* Booking Summary */}
                <div className="mt-8 p-6 bg-cream rounded-lg">
                  <h4 className="font-serif text-lg font-bold text-dark-brown mb-4">
                    Podsumowanie Rezerwacji
                  </h4>
                  <div className="space-y-2 text-chocolate">
                    <p><strong>Usługa:</strong> {selectedServiceData?.name}</p>
                    <p><strong>Lokalizacja:</strong> {selectedLocationData?.name}</p>
                    <p><strong>Data:</strong> {new Date(selectedDate).toLocaleDateString('pl-PL', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                    <p><strong>Godzina:</strong> {selectedTime}</p>
                    <p><strong>Czas trwania:</strong> {selectedServiceData?.duration}</p>
                    <p className="text-lg font-bold text-golden">
                      <strong>Cena:</strong> {selectedServiceData?.price}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-12">
              <button
                onClick={prevStep}
                disabled={step === 1}
                className="px-6 py-3 border-2 border-golden text-golden rounded-full font-medium transition-all duration-300 hover:bg-golden hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Wstecz
              </button>
              
              {step < 4 ? (
                <button
                  onClick={nextStep}
                  disabled={!canProceed()}
                  className="px-6 py-3 bg-golden hover:bg-sunset text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  Dalej
                  <ArrowRight className="h-4 w-4 ml-2" />
                </button>
              ) : (
                <button
                  disabled={!canProceed()}
                  className="px-8 py-3 bg-golden hover:bg-sunset text-white rounded-full font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Potwierdź Rezerwację
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-12 w-12 text-soft-green mb-4" />
              <h3 className="font-semibold text-dark-brown mb-2">Bezpieczna Rezerwacja</h3>
              <p className="text-chocolate text-sm">Twoje dane są chronione</p>
            </div>
            <div className="flex flex-col items-center">
              <Star className="h-12 w-12 text-golden mb-4" />
              <h3 className="font-semibold text-dark-brown mb-2">Doświadczeni Pedagodzy</h3>
              <p className="text-chocolate text-sm">10 lat doświadczenia</p>
            </div>
            <div className="flex flex-col items-center">
              <Calendar className="h-12 w-12 text-sunset mb-4" />
              <h3 className="font-semibold text-dark-brown mb-2">Elastyczne Terminy</h3>
              <p className="text-chocolate text-sm">Możliwość zmiany terminu</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookClasses;