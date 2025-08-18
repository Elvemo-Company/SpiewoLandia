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
            Zarezerwuj Zajęcia
          </h1>
          <p className="text-lg text-white/90 animate-slide-up">
            Wybierz termin i umów się na zajęcia muzyczne
          </p>
        </div>
      </section>
      {/* Child Programs Section - improved card layout */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-6">
            Zajęcia dla najmłodszych
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-chocolate text-lg">
                Zajęcia prowadzone są w małych grupach, w przyjaznej i bezpiecznej atmosferze. Opierają się na naturalnym rozwoju muzykalności dzieci oraz elementach rytmiki. Nie wymagamy żadnego przygotowania muzycznego – liczy się radość wspólnego muzykowania.
              </p>

              <div className="space-y-5">
                <article className="bg-white rounded-2xl shadow-card border border-cream p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-10 w-10 text-golden p-1 bg-golden/10 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-brown">Gordonki – 0–12 miesięcy</h3>
                    <p className="text-chocolate mt-2">Zajęcia gordonowskie dla najmłodszych to czas bliskości, muzyki i wspólnego odkrywania dźwięków. Maluszki uczestniczą w śpiewankach, kołysankach i rytmizowaniu w bezpiecznym kontakcie z rodzicem.</p>
                    <h4 className="font-medium text-dark-brown mt-3">Korzyści dla dziecka</h4>
                    <ul className="list-disc list-inside text-chocolate ml-3 mt-2 space-y-1">
                      <li>stymulacja słuchu i uwagi</li>
                      <li>wspieranie rozwoju mowy</li>
                      <li>budowanie więzi z rodzicem poprzez muzykę</li>
                      <li>pierwsze doświadczenia rytmu i melodii</li>
                    </ul>
                    <p className="text-chocolate mt-3">Rodzice aktywnie uczestniczą – kołyszą, nucą, poruszają się z dzieckiem. Nie liczą się zdolności muzyczne, ale bliskość i wspólna zabawa.</p>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-card border border-cream p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Users className="h-10 w-10 text-sunset p-1 bg-sunset/10 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-brown">Gordonki – 1–3 lata</h3>
                    <p className="text-chocolate mt-2">To czas radosnej zabawy z muzyką. Dzieci poznają proste rytmy, reagują ruchem na melodię i korzystają z pierwszych instrumentów perkusyjnych. Każde spotkanie to połączenie śpiewu, ruchu i radosnych interakcji z rodzicem.</p>
                    <h4 className="font-medium text-dark-brown mt-3">Korzyści dla dziecka</h4>
                    <ul className="list-disc list-inside text-chocolate ml-3 mt-2 space-y-1">
                      <li>rozwój koordynacji ruchowej i koncentracji</li>
                      <li>wspieranie rozwoju mowy poprzez śpiew i rytm</li>
                      <li>nauka wyrażania emocji poprzez muzykę</li>
                      <li>oswajanie z grupą i wspólną zabawą</li>
                    </ul>
                    <p className="text-chocolate mt-3">Dzieci uczestniczą razem z rodzicem – powtarzają dźwięki, klaszczą, podskakują, grają na instrumentach.</p>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-card border border-cream p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Star className="h-10 w-10 text-golden p-1 bg-golden/10 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-brown">🎵 Rytmika – 3–4 lata</h3>
                    <p className="text-chocolate mt-2">Zajęcia rytmiczne rozwijają poczucie tempa i melodii, uczą reagowania na zmiany w muzyce i pozwalają wyrażać się przez ruch.</p>
                    <h4 className="font-medium text-dark-brown mt-3">Korzyści dla dziecka</h4>
                    <ul className="list-disc list-inside text-chocolate ml-3 mt-2 space-y-1">
                      <li>rozwój pamięci i wyobraźni muzycznej</li>
                      <li>ćwiczenie koncentracji i uważnego słuchania</li>
                      <li>nauka współpracy w grupie</li>
                      <li>naturalne przygotowanie do nauki gry na instrumentach</li>
                    </ul>
                    <p className="text-chocolate mt-3">Dzieci biorą udział w zabawach muzyczno-ruchowych, śpiewają krótkie melodie i grają na instrumentach.</p>
                  </div>
                </article>

                <article className="bg-white rounded-2xl shadow-card border border-cream p-6 flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Calendar className="h-10 w-10 text-sunset p-1 bg-sunset/10 rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-brown">🎶 Rytmika – 5–6 lat</h3>
                    <p className="text-chocolate mt-2">Na zajęciach dzieci rozwijają poczucie rytmu i melodii, uczą się prostych układów tanecznych i tworzą własne muzyczne pomysły.</p>
                    <h4 className="font-medium text-dark-brown mt-3">Korzyści dla dziecka</h4>
                    <ul className="list-disc list-inside text-chocolate ml-3 mt-2 space-y-1">
                      <li>rozwój kreatywności i wyobraźni</li>
                      <li>wzmacnianie koncentracji i pamięci</li>
                      <li>nauka pracy w grupie i współodpowiedzialności</li>
                    </ul>
                    <p className="text-chocolate mt-3">Dzieci uczestniczą samodzielnie. Każde spotkanie ma stałą strukturę: ćwiczenia rytmiczne, ruch przy muzyce, gra na instrumentach i chwila wyciszenia.</p>
                  </div>
                </article>
              </div>
            </div>

            <aside className="hidden lg:block">
              <div className="sticky top-28 p-6 bg-cream rounded-2xl border border-cream shadow-card">
                <h4 className="font-semibold text-dark-brown mb-3">✨ Dlaczego warto wybrać nasze zajęcia?</h4>
                <p className="text-chocolate mb-4">Muzyka to naturalny język dziecka. Regularny kontakt z nią wspiera rozwój mowy, pamięci, koncentracji i kreatywności. Gordonki i rytmika to inwestycja w harmonijny rozwój i doskonała zabawa.</p>
                <ul className="list-disc list-inside text-chocolate ml-3 space-y-2">
                  <li>Małe grupy i indywidualne podejście</li>
                  <li>Bezpieczna, ciepła atmosfera</li>
                  <li>Doświadczona kadra pedagogiczna</li>
                </ul>
              </div>
            </aside>
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