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
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg"
              alt="Book classes"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-4 animate-fade-in">
            Zajęcia umuzykalniające
          </h1>
          <p className="text-lg text-white/90 animate-slide-up">
            Odkryj radość muzyki — wybierz termin i umów się na zajęcia umuzykalniające
          </p>
        </div>
      </section>
      {/* Child Programs Section - improved card layout */}
      <section className="pt-16 lg:pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-6">
            Zajęcia umuzykalniające dla najmłodszych
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <p className="text-chocolate text-base leading-relaxed mb-6 max-w-3xl">
                Zajęcia prowadzone są w małych grupach, w przyjaznej i bezpiecznej atmosferze. Opierają się na naturalnym rozwoju muzykalności dzieci oraz elementach rytmiki. Nie wymagamy żadnego przygotowania muzycznego — liczy się radość wspólnego muzykowania.
              </p>

              <div className="mb-6">
                <p className="text-chocolate text-sm">Wybierz grupę wiekową poniżej, aby poznać program.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <article className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br from-golden to-golden/60 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-dark-brown">Nutkowe Maluszki</h3>
                        <span className="text-xs bg-cream text-dark-brown px-2 py-1 rounded-full">0–12 miesięcy</span>
                      </div>
                      <p className="text-chocolate mt-3 text-sm leading-relaxed">Zajęcia umuzykalniające dla najmłodszych to czas bliskości, muzyki i wspólnego odkrywania dźwięków. Maluszki uczestniczą w śpiewankach, kołysankach i rytmizowaniu w bezpiecznym kontakcie z rodzicem.</p>
                      <h4 className="font-medium text-dark-brown mt-4">Korzyści</h4>
                      <ul className="mt-2 text-chocolate text-sm space-y-1 list-inside">
                        <li>stymulacja słuchu i uwagi</li>
                        <li>wspieranie rozwoju mowy</li>
                        <li>budowanie więzi z rodzicem</li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br from-sunset to-sunset/60 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-dark-brown">Rytmiczne Brzdące</h3>
                        <span className="text-xs bg-cream text-dark-brown px-2 py-1 rounded-full">1–3 lata</span>
                      </div>
                      <p className="text-chocolate mt-3 text-sm leading-relaxed">To czas radosnej zabawy z muzyką. Dzieci poznają proste rytmy, reagują ruchem na melodię i korzystają z pierwszych instrumentów perkusyjnych. Każde spotkanie to połączenie śpiewu, ruchu i radosnych interakcji z rodzicem.</p>
                      <h4 className="font-medium text-dark-brown mt-4">Korzyści</h4>
                      <ul className="mt-2 text-chocolate text-sm space-y-1 list-inside">
                        <li>rozwój koordynacji ruchowej i koncentracji</li>
                        <li>wspieranie rozwoju mowy poprzez śpiew</li>
                        <li>nauka wyrażania emocji przez muzykę</li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br from-golden to-golden/60 text-white">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-dark-brown">Śpiewające Skrzaty</h3>
                        <span className="text-xs bg-cream text-dark-brown px-2 py-1 rounded-full">3–4 lata</span>
                      </div>
                      <p className="text-chocolate mt-3 text-sm leading-relaxed">Zajęcia umuzykalniające rozwijają poczucie tempa i melodii, uczą reagowania na zmiany w muzyce i pozwalają wyrażać się przez ruch.</p>
                      <h4 className="font-medium text-dark-brown mt-4">Korzyści</h4>
                      <ul className="mt-2 text-chocolate text-sm space-y-1 list-inside">
                        <li>rozwój pamięci i wyobraźni muzycznej</li>
                        <li>ćwiczenie koncentracji i uważnego słuchania</li>
                        <li>nauka współpracy w grupie</li>
                      </ul>
                    </div>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-br from-sunset to-sunset/60 text-white">
                        <Calendar className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-dark-brown">Muzyczni Odkrywcy</h3>
                        <span className="text-xs bg-cream text-dark-brown px-2 py-1 rounded-full">5–6 lat</span>
                      </div>
                      <p className="text-chocolate mt-3 text-sm leading-relaxed">Na zajęciach dzieci rozwijają poczucie rytmu i melodii, uczą się prostych układów tanecznych i tworzą własne muzyczne pomysły.</p>
                      <h4 className="font-medium text-dark-brown mt-4">Korzyści</h4>
                      <ul className="mt-2 text-chocolate text-sm space-y-1 list-inside">
                        <li>rozwój kreatywności i wyobraźni</li>
                        <li>wzmacnianie koncentracji i pamięci</li>
                        <li>nauka pracy w grupie i współodpowiedzialności</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <aside className="hidden md:block">
              <a
                  href="https://nextvisit.pl/spiewolandia-naxvav1smnyhcizq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-golden hover:bg-sunset text-white text-center px-6 py-4 rounded-full font-semibold text-lg mb-8"
                >
                  Zarezerwuj teraz
                </a>
              <div className="sticky top-24 p-6 bg-cream rounded-2xl border border-cream shadow-card">
                
                <h4 className="font-semibold text-dark-brown mb-3">✨ Dlaczego warto wybrać nasze zajęcia?</h4>
                <p className="text-chocolate mb-4">Muzyka to naturalny język dziecka. Regularny kontakt z nią wspiera rozwój mowy, pamięci, koncentracji i kreatywności. Zajęcia umuzykalniające to inwestycja w harmonijny rozwój i doskonała zabawa.</p>
                <ul className="list-inside text-chocolate ml-3 space-y-2">
                  <li>Małe grupy i indywidualne podejście</li>
                  <li>Bezpieczna, ciepła atmosfera</li>
                  <li>Doświadczona kadra pedagogiczna</li>
                </ul>

                <div className="mt-6 pt-4 border-t border-cream/60">
                  <h4 className="font-serif text-lg font-bold text-dark-brown mb-2">Miejsca zajęć</h4>
                  <p className="text-chocolate text-sm mb-2">
                    Zajęcia odbywają się w lokalu <strong>Kredka i Balon</strong> w Łęczycy — ul. <em>Kaliska 40</em>.
                  </p>
                  <p className="text-chocolate text-sm">
                    Trwają prace nad uruchomieniem zajęć w <strong>Ozorkowie</strong>. Na stronie pojawią się informacje, gdy potwierdzimy terminy i miejsce.
                  </p>

                  <h4 className="font-serif text-sm font-semibold text-dark-brown mt-4 mb-1">Kontakt lokalny</h4>
                  <p className="text-chocolate text-sm">Województwo: <strong>łódzkie</strong> — Łęczyca i Ozorków</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-white">
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