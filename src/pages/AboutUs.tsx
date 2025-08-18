
import React, { useState } from 'react';
import { Music, Heart, Users, Award, Clock, MapPin, Star, Quote, X } from 'lucide-react';
import { playCTASound } from '../utils/audioUtils';

const AboutUsHero = () => (
  <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
        <img 
          src="https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg"
          alt="ŚpiewoLandia team"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
        O Mnie
      </h1>
      <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
        Poznaj moją historię i pasję do muzyki. Odkryj, jak ŚpiewoLandia 
        stała się miejscem, gdzie dzieci i dorośli odkrywają radość śpiewania.
      </p>
      <button 
        onClick={() => {
          document.getElementById('founder')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
      >
        Poznaj Moją Historię
      </button>
    </div>
  </section>
);

const AboutUs = () => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const founder = {
    name: 'Anna Kowalska',
    role: 'Założycielka i Dyrektor Artystyczny',
    experience: '15 lat doświadczenia',
    education: 'Akademia Muzyczna w Warszawie, Wydział Wokalno-Aktorski',
    specialization: 'Pedagogika muzyczna, technika wokalna',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg',
    bio: 'Pasjonatka muzyki i pracy z dziećmi. Stworzyła ŚpiewoLandię z misją dzielenia się radością płynącą z muzyki. Laureatka licznych konkursów wokalnych.',
    achievements: [
      'Laureatka konkursu "Złoty Głos 2015"',
      'Certyfikowany pedagog muzyczny',
      'Autorka metody "Naturalny rozwój głosu"',
      'Współpraca z 50+ przedszkolami',
      'Wokalista i producent muzyczny',
      'Współpraca z TVP i Polskim Radiem'
    ]
  };

  const milestones = [
    {
      year: '2014',
      title: 'Początek',
      description: 'Założyłam ŚpiewoLandię z misją dzielenia się pasją do muzyki'
    },
    {
      year: '2016',
      title: 'Pierwsze sukcesy',
      description: 'Rozpoczęłam współpracę z przedszkolami w Warszawie'
    },
    {
      year: '2018',
      title: 'Rozwój działalności',
      description: 'Rozszerzyłam ofertę o lekcje indywidualne i zajęcia grupowe'
    },
    {
      year: '2020',
      title: 'Ekspansja',
      description: 'Otworzyłam działalność w kilku miastach w Polsce'
    },
    {
      year: '2022',
      title: 'Nowe programy',
      description: 'Wprowadziłam programy online i terapię muzyką'
    },
    {
      year: '2024',
      title: 'Dziś',
      description: '500+ uczniów, 50+ przedszkoli, 200+ ślubów rocznie'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Pasja',
      description: 'Muzyka to moja pasja, którą dzielę się z każdym uczniem'
    },
    {
      icon: Users,
      title: 'Wspólnota',
      description: 'Buduję społeczność ludzi kochających muzykę'
    },
    {
      icon: Star,
      title: 'Jakość',
      description: 'Najwyższa jakość nauczania i profesjonalizm w każdej lekcji'
    },
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Wieloletnie doświadczenie w pracy z dziećmi i dorosłymi'
    }
  ];

  const closeModal = () => {
    setSelectedValue(null);
  };

  const openModal = (index: number) => {
    setSelectedValue(index);
  };

  const stats = [
    { number: '500+', label: 'Uczniów', icon: Users },
    { number: '10', label: 'Lat Doświadczenia', icon: Clock },
    { number: '50+', label: 'Przedszkoli', icon: MapPin },
    { number: '200+', label: 'Ślubów Rocznie', icon: Heart }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AboutUsHero />

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-golden mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
            Misja
          </h2>
          <p className="text-lg lg:text-xl text-chocolate leading-relaxed mb-8">
            "Wierzę, że muzyka ma moc zmieniania życia. Moją misją jest odkrywanie i rozwijanie 
            talentów muzycznych w każdym wieku, budowanie pewności siebie przez sztukę oraz 
            tworzenie niezapomnianych momentów, które pozostają w sercach na zawsze."
          </p>
          <div className="flex items-center justify-center">
            <Music className="h-8 w-8 text-golden" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Wartości
            </h2>
            <p className="text-lg text-chocolate">
              Zasady, którymi kieruję się w pracy z uczniami
            </p>
          </div>

          {/* Mobile: Horizontal scroll with modals */}
          <div className="lg:hidden overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6 px-4 min-w-max">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="text-center group animate-fade-in flex-shrink-0 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => openModal(index)}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-3 group-hover:scale-110 transition-transform duration-300 shadow-card">
                    <value.icon className="h-8 w-8 text-golden" />
                  </div>
                  <h3 className="font-serif text-sm font-bold text-dark-brown whitespace-nowrap">
                    {value.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Grid with descriptions */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-card">
                  <value.icon className="h-8 w-8 text-golden" />
                </div>
                <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                  {value.title}
                </h3>
                <p className="text-chocolate leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
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
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Droga
            </h2>
            <p className="text-lg text-chocolate">
              10 lat budowania ŚpiewoLandii - krok po kroku
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-golden opacity-30"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-1 lg:mb-6 animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-cream rounded-lg p-4 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h3 className="font-serif text-xl font-bold text-dark-brown mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-chocolate">
                      {milestone.description}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-golden rounded-full flex items-center justify-center shadow-card">
                  <span className="text-white font-bold text-sm">{milestone.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="founder" className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Założycielka
            </h2>
            <p className="text-lg text-chocolate">
              Poznaj osobę, która stoi za ŚpiewoLandią
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden animate-fade-in">
              <div className="relative h-80 lg:h-96">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/80 via-dark-brown/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="font-serif text-3xl lg:text-4xl font-bold mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-golden font-semibold text-lg">{founder.role}</p>
                  <p className="text-white/90 text-sm mt-2">{founder.experience}</p>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark-brown mb-4">O mnie</h4>
                    <p className="text-chocolate leading-relaxed mb-6">
                      {founder.bio}
                    </p>
                    <div className="space-y-3">
                      <div className="bg-cream rounded-lg p-4">
                        <h5 className="font-semibold text-dark-brown text-sm mb-1">Wykształcenie:</h5>
                        <p className="text-chocolate text-sm">{founder.education}</p>
                      </div>
                      <div className="bg-cream rounded-lg p-4">
                        <h5 className="font-semibold text-dark-brown text-sm mb-1">Specjalizacja:</h5>
                        <p className="text-chocolate text-sm">{founder.specialization}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-serif text-xl font-bold text-dark-brown mb-4">Moje osiągnięcia</h4>
                    <div className="space-y-3">
                      {founder.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start bg-golden/5 rounded-lg p-3 hover:bg-golden/10 transition-colors duration-300">
                          <Star className="h-5 w-5 text-golden mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-chocolate text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              ŚpiewoLandia w Liczbach
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8 text-golden" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-golden mb-2">
                  {stat.number}
                </div>
                <p className="text-sm lg:text-base text-chocolate font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-golden to-sunset">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Dołącz do Naszej Muzycznej Rodziny
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Odkryj radość muzyki razem z nami. Skontaktuj się już dziś!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
              Skontaktuj się z Nami
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

      {/* Modal for Values (Mobile only) */}
      {selectedValue !== null && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          <div className="relative bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream transition-colors duration-200"
            >
              <X className="h-5 w-5 text-chocolate" />
            </button>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-golden/10 rounded-full mb-4">
                {React.createElement(values[selectedValue].icon, { 
                  className: "h-8 w-8 text-golden" 
                })}
              </div>
              <h3 className="font-serif text-xl font-bold text-dark-brown mb-4">
                {values[selectedValue].title}
              </h3>
              <p className="text-chocolate leading-relaxed">
                {values[selectedValue].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;