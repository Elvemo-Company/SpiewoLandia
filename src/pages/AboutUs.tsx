import React from 'react';
import { Music, Heart, Users, Award, Clock, MapPin, Star, Quote } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
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
        'Autorka metody "Naturalny rozwój głosu"'
      ]
    },
    {
      name: 'Michał Nowak',
      role: 'Pedagog Wokalny i Instrumentalista',
      experience: '10 lat doświadczenia',
      education: 'Berklee College of Music, Boston',
      specialization: 'Jazz, pop, rock, produkcja muzyczna',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Wszechstronny muzyk i producent. Specjalizuje się w nowoczesnych stylach muzycznych i pracy z młodzieżą. Współpracuje z wieloma artystami.',
      achievements: [
        'Wokalista zespołu "Echo Dreams"',
        'Producent muzyczny (20+ albumów)',
        'Współpraca z TVP i Polskim Radiem'
      ]
    },
    {
      name: 'Katarzyna Wiśniewska',
      role: 'Pedagog ds. Dzieci i Młodzieży',
      experience: '8 lat doświadczenia',
      education: 'Uniwersytet Muzyczny F. Chopina, Pedagogika Muzyczna',
      specialization: 'Wczesna edukacja muzyczna, terapia przez muzykę',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Specjalistka w pracy z najmłodszymi. Tworzy programy edukacyjne łączące muzykę z rozwojem emocjonalnym i społecznym dzieci.',
      achievements: [
        'Certyfikat terapii muzyką',
        'Autorka programu "Muzyka i Emocje"',
        'Współpraca z 50+ przedszkolami'
      ]
    }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Początek',
      description: 'Anna Kowalska zakłada ŚpiewoLandię z misją dzielenia się pasją do muzyki'
    },
    {
      year: '2016',
      title: 'Pierwsze sukcesy',
      description: 'Rozpoczęcie współpracy z przedszkolami w Warszawie'
    },
    {
      year: '2018',
      title: 'Rozwój zespołu',
      description: 'Dołączenie Michała i Katarzyny, rozszerzenie oferty'
    },
    {
      year: '2020',
      title: 'Ekspansja',
      description: 'Otwarcie oddziałów w Krakowie i Gdańsku'
    },
    {
      year: '2022',
      title: 'Nowe programy',
      description: 'Wprowadzenie programów online i terapii muzyką'
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
      description: 'Muzyka to nasza pasja, którą dzielimy się z każdym uczniem'
    },
    {
      icon: Users,
      title: 'Wspólnota',
      description: 'Budujemy społeczność ludzi kochających muzykę'
    },
    {
      icon: Star,
      title: 'Jakość',
      description: 'Najwyższa jakość nauczania i profesjonalizm'
    },
    {
      icon: Award,
      title: 'Rozwój',
      description: 'Wspieramy rozwój talentów na każdym etapie'
    }
  ];

  const stats = [
    { number: '500+', label: 'Uczniów', icon: Users },
    { number: '10', label: 'Lat Doświadczenia', icon: Clock },
    { number: '50+', label: 'Przedszkoli', icon: MapPin },
    { number: '200+', label: 'Ślubów Rocznie', icon: Heart }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
            <img 
              src="https://images.pexels.com/photos/8199186/pexels-photo-8199186.jpeg"
              alt="ŚpiewoLandia team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
            O Nas
          </h1>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
            Poznaj historię ŚpiewoLandii i ludzi, którzy tworzą magię muzyki każdego dnia
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-golden mx-auto mb-8 opacity-50" />
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-dark-brown mb-6">
            Nasza Misja
          </h2>
          <p className="text-lg lg:text-xl text-chocolate leading-relaxed mb-8">
            "Wierzymy, że muzyka ma moc zmieniania życia. Nasza misja to odkrywanie i rozwijanie 
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
              Nasze Wartości
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasza Historia
            </h2>
            <p className="text-lg text-chocolate">
              10 lat pasji, rozwoju i niezliczonych muzycznych chwil
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-golden opacity-30"></div>
            
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`relative flex items-center mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-cream rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
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
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasz Zespół
            </h2>
            <p className="text-lg text-chocolate">
              Poznaj ludzi, którzy tworzą ŚpiewoLandię
            </p>
          </div>

          <div className="space-y-16">
            {team.map((member, index) => (
              <div
                key={member.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-fade-in ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover rounded-2xl shadow-card"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/50 to-transparent rounded-2xl"></div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <h3 className="font-serif text-2xl font-bold text-dark-brown mb-2">
                      {member.name}
                    </h3>
                    <p className="text-golden font-semibold mb-2">{member.role}</p>
                    <p className="text-chocolate text-sm mb-4">{member.experience}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="font-semibold text-dark-brown text-sm">Wykształcenie:</h4>
                        <p className="text-chocolate text-sm">{member.education}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-dark-brown text-sm">Specjalizacja:</h4>
                        <p className="text-chocolate text-sm">{member.specialization}</p>
                      </div>
                    </div>
                    
                    <p className="text-chocolate mb-6 leading-relaxed">
                      {member.bio}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-dark-brown text-sm mb-3">Osiągnięcia:</h4>
                      <ul className="space-y-2">
                        {member.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <Star className="h-4 w-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-chocolate text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
    </div>
  );
};

export default AboutUs;