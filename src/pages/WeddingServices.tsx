import React, { useState, useEffect } from 'react';
import { Heart, Music, Star, CheckCircle, Calendar, MapPin, Youtube, Church, Sparkles } from 'lucide-react';
import { playCTASound } from '../utils/audioUtils';
import AudioPreview from '../components/AudioPreview';

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
        Profesjonalna oprawa ceremonii i przyjęć okolicznościowych.
      </p>
      <a
        href="https://www.weselezklasa.pl/ogloszenia-weselne/wiktoria-kicinska,60060/#timetable-section"
        target="_blank"
        rel="noopener noreferrer"
        // onClick={playCTASound}
        className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
      >
        Sprawdź Dostępność
      </a>
    </div>
  </section>
);

const WeddingServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('church');
  // removed unused selectedSubCategory
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['wejscie', 'cywilny']));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  // const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [videoTouchStart, setVideoTouchStart] = useState<number | null>(null);
  const [videoTouchEnd, setVideoTouchEnd] = useState<number | null>(null);

  const offerIncludes = [
    'Profesjonalni i wykształceni muzycy oraz wokaliści',
    'Kompletny zestaw nagłośnieniowy',
    'Konsultacja repertuaru przed ceremonią',
    'Próba dźwięku na miejscu',
    'Backup instrumentalny w razie potrzeby',
    'Możliwość specjalnych życzeń muzycznych',
    'Profesjonalny wygląd i ubiór',
    'Doświadczenie w oprawie ślubów'
  ];

  const pricingRegions = [
    {
      region: 'Łódź (+ dojazd do 30 km)',
      price: '500 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE',
      popular: true
    },
    {
      region: 'Województwo łódzkie',
      price: '550 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE + DOJAZD'
    },
    {
      region: 'Województwo mazowieckie',
      price: '600 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE + DOJAZD'
    }
  ];

  const additionalMusicians = [
    { instrument: 'Organista', price: '450 zł' },
    { instrument: 'Skrzypaczka', price: '450 zł' },
    { instrument: 'Pianista', price: '450 zł' }
  ];

  const repertoire = {
    church: {
      wejscie: [
        { title: 'Ave Maria', artist: 'Franz Schubert' },
        { title: 'Ave Maria', artist: 'Giulio Caccini' },
        { title: 'Takie jest prawo miłości', artist: '' },
        { title: 'Oblubieniec', artist: '' },
        { title: 'Przykazanie nowe daję Wam', artist: '' },
        { title: 'Schowaj mnie', artist: '' },
        { title: 'Gdy się łączą ręce dwie', artist: '' },
        { title: 'Twoja miłość jak ciepły deszcz', artist: '' },
        { title: 'Ty tylko mnie poprowadź', artist: '' },
        { title: 'Nic nas nie zdoła odłączyć od Ciebie', artist: '' },
        { title: 'Nie bójcie się żyć dla miłości', artist: '' },
        { title: 'Powietrzem moim jesteś', artist: '' },
        { title: 'Hymn o miłości', artist: '' }
      ],
      ofiarowanie: [
        { title: 'Rękę Ci daję', artist: '' },
        { title: 'Niepojęty', artist: '' },
        { title: 'Ofiaruję Tobie Panie mój', artist: '' },
        { title: 'Tak mnie skrusz', artist: '' },
        { title: 'Powietrzem moim jest', artist: '' },
        { title: 'Schowaj mnie', artist: '' }
      ],
      komunia: [
        { title: 'Nie musisz mówić nic', artist: '' },
        { title: 'Unoszę wzrok', artist: '' },
        { title: 'Pan mnie strzeże', artist: '' },
        { title: 'Stoję dziś', artist: '' },
        { title: 'Schowaj mnie', artist: '' },
        { title: 'Chlebie najcichszy', artist: '' },
        { title: 'Panie dobry jak chleb', artist: '' }
      ],
      wyjscie: [
        { title: 'Marsz Mendelssohna', artist: 'Felix Mendelssohn' },
        { title: 'Marsz Wagnera', artist: 'Richard Wagner' },
        { title: 'Ave Verum', artist: 'Wolfgang Amadeus Mozart' },
        { title: 'Gabriel’s Oboe', artist: 'Ennio Morricone' }
      ]
    },
    civil: {
      cywilny: [
        { "title": "I Don't Want to Miss a Thing", "artist": "Aerosmith" },
        { "title": "Cztery pory roku – Wiosna", "artist": "Antonio Vivaldi" },
        { "title": "I Do It For You", "artist": "Bryan Adams" },
        { "title": "Love Me Like You Do", "artist": "Ellie Goulding" },
        { "title": "Can You Feel the Love Tonight", "artist": "Elton John" },
        { "title": "Perfect", "artist": "Ed Sheeran" },
        { "title": "Gabriel's Oboe", "artist": "Ennio Morricone" },
        { "title": "Tears in Heaven", "artist": "Eric Clapton" },
        { "title": "Can't Help Falling in Love", "artist": "Elvis Presley" },
        { "title": "Always on My Mind", "artist": "Elvis Presley" },
        { "title": "The Way You Look Tonight", "artist": "Frank Sinatra" },
        { "title": "You Raise Me Up", "artist": "Josh Groban" },
        { "title": "Aria na strunie G", "artist": "Johann Sebastian Bach" },
        { "title": "Ave Maria", "artist": "Johann Sebastian Bach" },
        { "title": "Memories", "artist": "Maroon 5" },
        { "title": "Niech mówią, że to nie jest miłość", "artist": "Piotr Rubik" },
        { "title": "Every Breath You Take", "artist": "Sting" },
        { "title": "You Are the Sunshine of My Life", "artist": "Stevie Wonder" },
        { "title": "All You Need Is Love", "artist": "The Beatles" },
        { "title": "Eine kleine Nachtmusik", "artist": "W. A. Mozart" },
        { "title": "I Will Always Love You", "artist": "Whitney Houston" },
        { "title": "Hallelujah", "artist": "Leonard Cohen" },
        { "title": "Love Is In The Air", "artist": "John Paul Young" },
        { "title": "Serce Matki", "artist": "Mieczysław Fogg" },
        { "title": "I'm Kissing You", "artist": "Des'ree" },
        { "title": "A Thousand Years", "artist": "Christina Perri" },
        { "title": "The One", "artist": "Kodaline" },
        { "title": "Unchained Melody", "artist": "The Righteous Brothers" },
        { "title": "What The World Needs Now Is Love", "artist": "Jackie DeShannon" },
        { "title": "Just the Way You Are", "artist": "Bruno Mars" },
        { "title": "Marry You", "artist": "Bruno Mars" },
        { "title": "Make You Feel My Love", "artist": "Adele" },
        { "title": "All Of Me", "artist": "John Legend" },
        { "title": "Beneath Your Beautiful", "artist": "Labrinth ft. Emeli Sandé" }
      ],
      polskie: [
        { title: 'Niech mówią, że to nie jest miłość', artist: 'Piotr Rubik' },
        { title: 'Przetańczyć z Tobą chcę całą noc', artist: 'Anna Jantar' },
        { title: 'Oczarowanie', artist: 'Zbigniew Wodecki' },
        { title: 'Kocham Cię kochanie moje', artist: 'Maanam' },
        { title: 'Kołysanka dla nieznajomej', artist: 'Perfect' },
        { title: 'Zawsze tam gdzie Ty', artist: 'Lady Pank' }
      ],
      bajkowe: [
        { title: 'La La Land', artist: 'Ryan Gosling'},
        { title: 'City of Stars', artist: 'Emma Stone'},
        { title: 'The Greatest Showman', artist: 'Rebecca Ferguson'},
        { title: 'Never Enough', artist: 'Loren Allred'},
        { title: 'Król Lew', artist: 'Elton John'},
        { title: 'Can You Feel The Love Tonight', artist: 'Kristle Edwards'},
        { title: 'Zaplątani', artist: 'Mandy Moore'},
        { title: 'I See the Light', artist: 'Zachary Levi'}
      ]
    }
  };

  const churchCategories = [
    { id: 'wejscie', name: 'Wejście', icon: Church },
    { id: 'ofiarowanie', name: 'Ofiarowanie', icon: Heart },
    { id: 'komunia', name: 'Komunia', icon: Star },
    { id: 'wyjscie', name: 'Wyjście', icon: Sparkles }
  ];

  const civilCategories = [
    { id: 'cywilny', name: 'Cywilny', icon: Heart },
    { id: 'polskie', name: 'Polskie', icon: Music },
    { id: 'bajkowe', name: 'Z bajek', icon: Sparkles }
  ];

  const youtubeVideos = [
    {
      id: 'Y1jZKL3S3n0',
      title: 'Chwalę Ciebie Panie',
      thumbnail: 'https://img.youtube.com/vi/Y1jZKL3S3n0/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=Y1jZKL3S3n0'
    },
    {
      id: '8JVN8E8zK8U',
      title: 'Ty tylko mnie poprowadź',
      thumbnail: 'https://img.youtube.com/vi/8JVN8E8zK8U/maxresdefault.jpg',
      url: 'https://youtu.be/8JVN8E8zK8U?si=X4YMjvrzi7p3PfpX'
    },
    {
      id: 'wb-1xedOI04',
      title: 'Schowaj mnie',
      thumbnail: 'https://img.youtube.com/vi/wb-1xedOI04/maxresdefault.jpg',
      url: 'https://www.youtube.com/watch?v=wb-1xedOI04'
    }
  ];

  // Example gallery (currently not displayed)
  /* const gallery = [
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
  ]; */

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

  // Removed mobile gallery swipe handlers (not used)

  // Swipe handling for video carousel
  const onVideoTouchStart = (e: React.TouchEvent) => {
    setVideoTouchEnd(null);
    setVideoTouchStart(e.targetTouches[0].clientX);
  };

  const onVideoTouchMove = (e: React.TouchEvent) => {
    setVideoTouchEnd(e.targetTouches[0].clientX);
  };

  const onVideoTouchEnd = () => {
    if (!videoTouchStart || !videoTouchEnd) return;
    
    const distance = videoTouchStart - videoTouchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentVideoSlide < youtubeVideos.length - 1) {
      setCurrentVideoSlide(currentVideoSlide + 1);
    }
    if (isRightSwipe && currentVideoSlide > 0) {
      setCurrentVideoSlide(currentVideoSlide - 1);
    }
  };

  // Usunięto lokalny odtwarzacz utworów – używamy komponentu AudioPreview

  const getCategoryKey = (categoryId: string) => {
    return categoryId as keyof typeof repertoire.church | keyof typeof repertoire.civil;
  };

  const getCurrentCategories = () => {
    return selectedCategory === 'church' ? churchCategories : civilCategories;
  };

  const getCurrentRepertoire = () => {
    return selectedCategory === 'church' ? repertoire.church : repertoire.civil;
  };

  const getTracksForCategory = (categoryId: string) => {
    const currentRepertoire = getCurrentRepertoire();
    const key = getCategoryKey(categoryId);
    return (currentRepertoire as any)[key] || [];
  };

  const toggleCategoryExpansion = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const handleCategoryChange = (newCategory: string) => {
    setSelectedCategory(newCategory);
    // Rozwiń pierwszą kategorię przy zmianie typu ślubu
    const firstCategory = newCategory === 'church' ? 'wejscie' : 'cywilny';
    setExpandedCategories(new Set([firstCategory]));
  };

  const WzkWidget: React.FC = () => {
    useEffect(() => {
      const id = 'wzk-widget-script';
      const containerId = 'wzk-container-60060';

      const tryInit = () => {
        const win = window as any;
        // common heuristics for widget init functions
        if (typeof win.WzkInit === 'function') {
          win.WzkInit();
          return true;
        }
        if (typeof win.wzkInit === 'function') {
          win.wzkInit();
          return true;
        }
        if (win.wzkWidgets && typeof win.wzkWidgets.init === 'function') {
          win.wzkWidgets.init();
          return true;
        }
        if (typeof win.initWzk === 'function') {
          win.initWzk();
          return true;
        }
        // fallback: dispatch event that some widgets listen for
        try {
          document.dispatchEvent(new CustomEvent('wzk:script:loaded'));
        } catch (e) {
          // ignore
        }
        return false;
      };

      const existing = document.getElementById(id) as HTMLScriptElement | null;
      if (!existing) {
        const s = document.createElement('script');
        s.src = 'https://widgets.4wzk.pl/dist/js/widget.js';
        s.defer = true;
        s.id = id;
        s.onload = () => {
          // small delay to let script process DOM
          console.debug('[WZK] script loaded');
          setTimeout(() => {
            const ok = tryInit();
            console.debug('[WZK] init attempted, success=', ok);
          }, 50);
        };
        s.onerror = () => console.error('[WZK] script failed to load');
        document.body.appendChild(s);
      } else {
        // script already present — try init after short delay
        setTimeout(() => {
          const ok = tryInit();
          console.debug('[WZK] script present, init attempted, success=', ok);
        }, 50);
      }

      return () => {
        // do not remove the script; leave global widget available
      };
    }, []);

    return (
      <div id="wzk-container-60060" style={{ width: '1000px', maxWidth: '100%', borderRadius: '8px', boxShadow: '0 1px 6px #B8C5D366', overflow: 'hidden' }} className="wzk-widget iframe-height" data-wzk-widget-type="type1" data-wzk-notice="60060">
        <div style={{ backgroundColor: '#F5F6FA', textAlign: 'center', padding: '16px', fontSize: '12px', lineHeight: '12px' }}>
          <a className="wzk-accent-color" title="Wiktoria Kicińska" href="https://www.weselezklasa.pl/ogloszenia-weselne/wiktoria-kicinska,60060/#timetable-section" rel="nofollow" target="_blank" style={{ color: 'currentColor', textDecoration: 'none' }}>
            Wiktoria Kicińska
          </a>
          <img style={{ margin: '8px auto 0', display: 'block' }} src="https://widgets.4wzk.pl/dist/img/footer-logo.svg" alt="Wesele z klasą" />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <WeddingHero />

      {/* Offer Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Nasza Oferta
            </h2>
            <p className="text-lg text-chocolate max-w-3xl mx-auto">
              Oferujemy profesjonalną oprawę muzyczną ślubów w różnych formach - od kameralnych ceremonii 
              po większe przyjęcia okolicznościowe. Nasze doświadczenie i pasja sprawią, że Wasz ślub będzie wyjątkowy 
              i zapadnie w pamięć na długo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-dark-brown mb-6">
                Dlaczego warto nas wybrać?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-chocolate">Ponad 5 lat doświadczenia w branży ślubnej</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-chocolate">Dzięsiątki zadowolonych par młodych w całej Polsce</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-chocolate">Indywidualne podejście do każdej ceremonii</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-chocolate">Profesjonalny sprzęt najwyższej jakości</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg"
                alt="Para młoda podczas ceremonii"
                className="w-full h-80 object-cover rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Co Zawiera Nasza Oferta
            </h2>
            <p className="text-lg text-chocolate">
              Kompleksowa oprawa muzyczna dostosowana do Waszych potrzeb
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {offerIncludes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-3 md:p-6 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="h-5 w-5 md:h-8 md:w-8 text-soft-green mb-2 md:mb-4" />
                <p className="text-chocolate font-medium text-xs md:text-base leading-tight md:leading-normal">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Oferta Cenowa 2026
            </h2>
            <p className="text-lg text-chocolate">
              Przejrzyste ceny bez ukrytych kosztów
            </p>
          </div>

                     {/* Regional Pricing */}
           <div className="mb-12">
             <div className="overflow-x-auto scrollbar-hide px-4 -mx-4 md:px-6 md:mx-0 py-4 md:py-6">
               <div className="flex space-x-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 min-w-max md:min-w-0">
                           {pricingRegions.map((region, index) => (
                 <div
                   key={index}
                   className={`relative bg-cream rounded-2xl p-5 transition-all duration-300 hover:shadow-card-hover animate-fade-in flex-shrink-0 w-72 md:w-auto md:p-6 ${
                     region.popular ? 'ring-2 ring-golden scale-105' : ''
                   }`}
                   style={{ animationDelay: `${index * 0.1}s` }}
                 >
                   {region.popular && (
                     <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                       <span className="bg-golden text-white px-3 py-1 rounded-full text-xs font-medium">
                         Najpopularniejsze
                       </span>
                     </div>
                   )}
                   
                   <MapPin className="h-6 w-6 md:h-8 md:w-8 text-golden mb-3 md:mb-4" />
                   <h3 className="font-bold text-dark-brown mb-2 text-base md:text-base">{region.region}</h3>
                   <p className="text-xl md:text-2xl font-bold text-golden mb-3">{region.price}</p>
                   <p className="text-sm md:text-sm text-chocolate leading-relaxed">{region.includes}</p>
                 </div>
                 ))}
               </div>
             </div>
           </div>

           {/* Additional Musicians */}
          <div className="bg-gradient-to-r from-cream to-white rounded-2xl p-8">
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-dark-brown mb-6 text-center">
              Dodatkowi Muzycy
            </h3>
                                      {/* Mobile: Simple list */}
             <div className="block md:hidden space-y-3">
               {additionalMusicians.map((musician, index) => (
                 <div key={index} className="flex justify-between items-center py-2 border-b border-cream">
                   <span className="text-dark-brown font-medium">{musician.instrument}</span>
                   <span className="text-golden font-bold">{musician.price}</span>
                 </div>
               ))}
             </div>
             
             {/* Desktop: Grid with cards */}
             <div className="hidden md:grid md:grid-cols-3 md:gap-6">
               {additionalMusicians.map((musician, index) => (
                 <div
                   key={index}
                   className="text-center p-4 bg-white rounded-lg shadow-card"
                 >
                   <Music className="h-8 w-8 text-golden mx-auto mb-3" />
                   <h4 className="font-semibold text-dark-brown mb-2">{musician.instrument}</h4>
                   <p className="text-golden font-bold">{musician.price}</p>
                 </div>
               ))}
             </div>
            <p className="text-center text-chocolate mt-6 text-sm">
              * Ceny mogą się różnić w zależności od długości występu i lokalizacji
            </p>
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

          {/* Church/Civil Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 shadow-card">
              <button
                onClick={() => handleCategoryChange('church')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'church'
                    ? 'bg-golden text-white shadow-lg'
                    : 'text-chocolate hover:text-golden'
                }`}
              >
                <Church className="h-4 w-4 mr-2 inline" />
                Ślub Kościelny
              </button>
              <button
                onClick={() => handleCategoryChange('civil')}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === 'civil'
                    ? 'bg-golden text-white shadow-lg'
                    : 'text-chocolate hover:text-golden'
                }`}
              >
                <Heart className="h-4 w-4 mr-2 inline" />
                Ślub Cywilny
              </button>
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

                    {/* Repertoire Content */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-4">
              {getCurrentCategories().map((category) => {
                const tracks = getTracksForCategory(category.id);
                const isExpanded = expandedCategories.has(category.id);
                 const visibleTracks = isExpanded ? tracks : [];
                
                return (
                  <div key={category.id} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300">
                    <button
                      onClick={() => toggleCategoryExpansion(category.id)}
                      className="w-full flex items-center justify-between mb-4 group"
                    >
                      <div className="flex items-center">
                        <category.icon className="h-6 w-6 text-golden mr-3" />
                        <h3 className="font-semibold text-dark-brown text-lg">{category.name}</h3>
                        <span className="ml-3 text-sm text-chocolate bg-cream px-2 py-1 rounded-full">
                          {tracks.length} utworów
                        </span>
                      </div>
                      <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-golden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-none' : 'max-h-80'}`}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {visibleTracks.map((track: any, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-cream transition-all duration-300 border border-cream"
                          >
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <div className="flex-shrink-0">
                                <AudioPreview title={track.title} artist={track.artist} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-dark-brown text-sm truncate">{track.title}</h4>
                                <p className="text-xs text-chocolate truncate">
                                  {track.artist}{' '}
                                  {('duration' in track && (track as any).duration) ? `• ${(track as any).duration}` : ''}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      

                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-chocolate mb-4">
                To tylko przykłady z naszego repertuaru. Dostosowujemy muzykę do Waszych preferencji!
              </p>
              <a
                href="/repertuar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden hover:bg-sunset text-white px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block"
              >
                Pełny Repertuar (PDF)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
              Zobacz Nas w Akcji
            </h2>
            <p className="text-lg text-chocolate">
              Przykłady naszych występów na żywo
            </p>
          </div>

          {/* Mobile: Carousel with pagination */}
          <div className="md:hidden">
            <div className="relative">
              <div 
                className="overflow-hidden rounded-2xl"
                onTouchStart={onVideoTouchStart}
                onTouchMove={onVideoTouchMove}
                onTouchEnd={onVideoTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentVideoSlide * 100}%)` }}
                >
                  {youtubeVideos.map((video, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0"
                    >
                      <div className="relative mx-4">
                        <div className="aspect-video relative">
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <a
                              href={video.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer"
                            >
                              <Youtube className="h-8 w-8 text-white ml-1" />
                            </a>
                          </div>
                        </div>
                        <div className="p-4 bg-white rounded-b-lg">
                          <h3 className="font-semibold text-dark-brown mb-2">{video.title}</h3>
                          <p className="text-sm text-chocolate">Kliknij aby obejrzeć na YouTube</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {youtubeVideos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideoSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentVideoSlide 
                        ? 'bg-golden scale-125' 
                        : 'bg-chocolate/30 hover:bg-chocolate/50'
                    }`}
                    aria-label={`Przejdź do filmu ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {youtubeVideos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-16 h-16 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      <Youtube className="h-8 w-8 text-white ml-1" />
                    </a>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-dark-brown mb-2">{video.title}</h3>
                  <p className="text-sm text-chocolate">Kliknij aby obejrzeć na YouTube</p>
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

          <div className="flex justify-center">
            <WzkWidget />
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
            <a
              href="https://www.weselezklasa.pl/ogloszenia-weselne/wiktoria-kicinska,60060/#timetable-section"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <Calendar className="h-5 w-5 mr-2" />
              Sprawdź Dostępność
            </a>
            <a 
              href="tel:+48517666426"
              className="text-white hover:text-cream font-medium text-lg flex items-center transition-colors duration-300"
            >
              lub zadzwoń: +48 517 666 426
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