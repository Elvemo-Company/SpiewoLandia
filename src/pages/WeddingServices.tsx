
import React, { useState } from 'react';
import { Heart, Music, Camera, Users, Clock, Star, CheckCircle, Calendar, Award, Phone, Play, Pause, Volume2, MapPin, Euro, Youtube, Church, Sparkles } from 'lucide-react';
// Import pliku audio
import notaAudio from '../assets/audio/nuta.mp3';
import { playCTASound } from '../utils/audioUtils';

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
      <button 
        onClick={playCTASound}
        className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105">
        Sprawdź Dostępność
      </button>
    </div>
  </section>
);

const WeddingServices = () => {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('church');
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['wejscie', 'milosne']));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryTouchStart, setGalleryTouchStart] = useState<number | null>(null);
  const [galleryTouchEnd, setGalleryTouchEnd] = useState<number | null>(null);
  const [currentVideoSlide, setCurrentVideoSlide] = useState(0);
  const [videoTouchStart, setVideoTouchStart] = useState<number | null>(null);
  const [videoTouchEnd, setVideoTouchEnd] = useState<number | null>(null);

  const offerIncludes = [
    'Profesjonalny duet wokalny (kobieta + mężczyzna)',
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
      region: 'Wrocław',
      price: '500 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE',
      popular: true
    },
    {
      region: 'Województwo dolnośląskie',
      price: '550 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE + DOJAZD'
    },
    {
      region: 'Województwo opolskie',
      price: '550 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE + DOJAZD'
    },
    {
      region: 'Województwo łódzkie',
      price: '600 zł',
      includes: 'WOKAL + NAGŁOŚNIENIE + DOJAZD'
    }
  ];

  const additionalMusicians = [
    { instrument: 'Organista', price: '450 zł' },
    { instrument: 'Skrzypaczka', price: '500 zł' },
    { instrument: 'Pianista', price: '500 zł' }
  ];

  const repertoire = {
    church: {
      wejscie: [
        { title: 'Ave Maria', artist: 'Schubert', duration: '4:32', category: 'Klasyczna' },
        { title: 'Canon in D', artist: 'Pachelbel', duration: '3:45', category: 'Klasyczna' },
        { title: 'Jezu ufam Tobie', artist: 'Tradycyjna', duration: '3:20', category: 'Religijna' },
        { title: 'Bridal Chorus', artist: 'Wagner', duration: '4:15', category: 'Klasyczna' },
        { title: 'Air on G String', artist: 'Bach', duration: '5:20', category: 'Klasyczna' },
        { title: 'Czuła Matko', artist: 'Tradycyjna', duration: '3:50', category: 'Religijna' },
        { title: 'Veni Creator', artist: 'Tradycyjna', duration: '4:05', category: 'Religijna' },
        { title: 'Spring', artist: 'Vivaldi', duration: '3:30', category: 'Klasyczna' },
        { title: 'Salve Regina', artist: 'Tradycyjna', duration: '4:25', category: 'Religijna' },
        { title: 'Trumpet Voluntary', artist: 'Clarke', duration: '3:15', category: 'Klasyczna' }
      ],
      ofiarowanie: [
        { title: 'Magnificat', artist: 'Tradycyjna', duration: '4:15', category: 'Religijna' },
        { title: 'Ave Verum Corpus', artist: 'Mozart', duration: '3:45', category: 'Klasyczna' },
        { title: 'Panis Angelicus', artist: 'Franck', duration: '4:00', category: 'Klasyczna' },
        { title: 'O Salutaris Hostia', artist: 'Tradycyjna', duration: '3:35', category: 'Religijna' },
        { title: 'Pie Jesu', artist: 'Lloyd Webber', duration: '4:20', category: 'Współczesna' },
        { title: 'Veni Sancte Spiritus', artist: 'Tradycyjna', duration: '3:55', category: 'Religijna' },
        { title: 'Meditation', artist: 'Massenet', duration: '5:10', category: 'Klasyczna' },
        { title: 'Adagio', artist: 'Albinoni', duration: '8:30', category: 'Klasyczna' },
        { title: 'Laudate Dominum', artist: 'Mozart', duration: '4:35', category: 'Klasyczna' }
      ],
      komunia: [
        { title: 'Chleb żywy', artist: 'Tradycyjna', duration: '3:30', category: 'Religijna' },
        { title: 'Ubi Caritas', artist: 'Tradycyjna', duration: '4:10', category: 'Religijna' },
        { title: 'Tantum Ergo', artist: 'Tradycyjna', duration: '3:15', category: 'Religijna' },
        { title: 'Pange Lingua', artist: 'Tradycyjna', duration: '4:25', category: 'Religijna' },
        { title: 'O Come All Ye Faithful', artist: 'Tradycyjna', duration: '3:40', category: 'Religijna' },
        { title: 'Adoramus Te Christe', artist: 'Palestrina', duration: '3:20', category: 'Klasyczna' },
        { title: 'Kyrie Eleison', artist: 'Tradycyjna', duration: '4:15', category: 'Religijna' },
        { title: 'Sanctus', artist: 'Tradycyjna', duration: '3:50', category: 'Religijna' },
        { title: 'Agnus Dei', artist: 'Tradycyjna', duration: '4:05', category: 'Religijna' },
        { title: 'Ave Regina Coelorum', artist: 'Tradycyjna', duration: '3:45', category: 'Religijna' }
      ],
      uwielbienie: [
        { title: 'Te Deum', artist: 'Tradycyjna', duration: '4:45', category: 'Religijna' },
        { title: 'Gloria in Excelsis', artist: 'Tradycyjna', duration: '3:50', category: 'Religijna' },
        { title: 'Alleluia', artist: 'Tradycyjna', duration: '3:25', category: 'Religijna' },
        { title: 'Magnificat', artist: 'Bach', duration: '5:20', category: 'Klasyczna' },
        { title: 'Hosanna in Excelsis', artist: 'Tradycyjna', duration: '3:35', category: 'Religijna' },
        { title: 'O Holy Night', artist: 'Adam', duration: '4:30', category: 'Klasyczna' },
        { title: 'How Great Thou Art', artist: 'Tradycyjna', duration: '4:15', category: 'Religijna' },
        { title: 'Be Thou My Vision', artist: 'Tradycyjna', duration: '3:55', category: 'Religijna' },
        { title: 'Holy Holy Holy', artist: 'Tradycyjna', duration: '4:10', category: 'Religijna' }
      ],
      wyjscie: [
        { title: 'Oda do radości', artist: 'Beethoven', duration: '4:20', category: 'Klasyczna' },
        { title: 'Wedding March', artist: 'Mendelssohn', duration: '3:35', category: 'Klasyczna' },
        { title: 'Hallelujah', artist: 'Cohen', duration: '4:50', category: 'Współczesna' },
        { title: 'Recessional', artist: 'Guilmant', duration: '3:45', category: 'Klasyczna' },
        { title: 'Prince of Denmark March', artist: 'Clarke', duration: '3:20', category: 'Klasyczna' },
        { title: 'Te Deum', artist: 'Charpentier', duration: '4:35', category: 'Klasyczna' },
        { title: 'Gloria', artist: 'Vivaldi', duration: '5:15', category: 'Klasyczna' },
        { title: 'Crown Imperial', artist: 'Walton', duration: '4:05', category: 'Współczesna' },
        { title: 'Orb and Sceptre', artist: 'Walton', duration: '3:50', category: 'Współczesna' },
        { title: 'Rejoice the Lord is King', artist: 'Handel', duration: '4:25', category: 'Klasyczna' }
      ]
    },
    civil: {
      milosne: [
        { title: 'A Thousand Years', artist: 'Christina Perri', duration: '4:45', category: 'Pop' },
        { title: 'Perfect', artist: 'Ed Sheeran', duration: '4:23', category: 'Pop' },
        { title: 'All of Me', artist: 'John Legend', duration: '4:29', category: 'Pop' },
        { title: 'Make You Feel My Love', artist: 'Bob Dylan', duration: '3:32', category: 'Ballada' },
        { title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', category: 'Pop' },
        { title: 'Marry Me', artist: 'Train', duration: '4:15', category: 'Pop' },
        { title: 'The Way You Look Tonight', artist: 'Sinatra', duration: '3:20', category: 'Jazz' },
        { title: 'Can\'t Help Myself', artist: 'Four Tops', duration: '2:50', category: 'Soul' },
        { title: 'At Last', artist: 'Etta James', duration: '3:01', category: 'Soul' },
        { title: 'L-O-V-E', artist: 'Nat King Cole', duration: '2:35', category: 'Jazz' },
        { title: 'Fly Me to the Moon', artist: 'Sinatra', duration: '2:48', category: 'Jazz' },
        { title: 'La Vie En Rose', artist: 'Édith Piaf', duration: '3:28', category: 'Chanson' }
      ],
      duchowe: [
        { title: 'Amazing Grace', artist: 'Tradycyjna', duration: '3:45', category: 'Duchowa' },
        { title: 'How Great Thou Art', artist: 'Tradycyjna', duration: '4:15', category: 'Duchowa' },
        { title: 'Blessed Assurance', artist: 'Tradycyjna', duration: '3:30', category: 'Duchowa' },
        { title: 'What a Wonderful World', artist: 'Louis Armstrong', duration: '2:20', category: 'Jazz' },
        { title: 'Somewhere Over the Rainbow', artist: 'Judy Garland', duration: '2:45', category: 'Musical' },
        { title: 'Bridge Over Troubled Water', artist: 'Simon & Garfunkel', duration: '4:55', category: 'Folk' },
        { title: 'Lean on Me', artist: 'Bill Withers', duration: '4:20', category: 'Soul' },
        { title: 'You\'ve Got a Friend', artist: 'Carole King', duration: '5:08', category: 'Pop' },
        { title: 'Stand by Me', artist: 'Ben E. King', duration: '2:55', category: 'Soul' },
        { title: 'Imagine', artist: 'John Lennon', duration: '3:03', category: 'Rock' }
      ],
      ballady: [
        { title: 'Unchained Melody', artist: 'The Righteous Brothers', duration: '3:36', category: 'Ballada' },
        { title: 'At Last', artist: 'Etta James', duration: '3:01', category: 'Soul' },
        { title: 'Thinking Out Loud', artist: 'Ed Sheeran', duration: '4:41', category: 'Pop' },
        { title: 'The First Time Ever I Saw Your Face', artist: 'Roberta Flack', duration: '5:20', category: 'Soul' },
        { title: 'Something', artist: 'The Beatles', duration: '3:03', category: 'Rock' },
        { title: 'Wonderful Tonight', artist: 'Eric Clapton', duration: '3:43', category: 'Rock' },
        { title: 'Your Song', artist: 'Elton John', duration: '4:01', category: 'Pop' },
        { title: 'Just the Way You Are', artist: 'Billy Joel', duration: '4:50', category: 'Pop' },
        { title: 'Let It Be', artist: 'The Beatles', duration: '4:03', category: 'Rock' },
        { title: 'Fields of Gold', artist: 'Sting', duration: '3:42', category: 'Pop' },
        { title: 'Sweet Caroline', artist: 'Neil Diamond', duration: '3:21', category: 'Pop' }
      ],
      bajkowe: [
        { title: 'A Whole New World', artist: 'Aladdin OST', duration: '2:45', category: 'Disney' },
        { title: 'Beauty and the Beast', artist: 'Disney', duration: '4:10', category: 'Disney' },
        { title: 'Can You Feel the Love Tonight', artist: 'Elton John', duration: '4:00', category: 'Disney' },
        { title: 'Tale as Old as Time', artist: 'Disney', duration: '3:58', category: 'Disney' },
        { title: 'Colors of the Wind', artist: 'Pocahontas OST', duration: '3:34', category: 'Disney' },
        { title: 'When You Wish Upon a Star', artist: 'Disney', duration: '3:15', category: 'Disney' },
        { title: 'Some Day My Prince Will Come', artist: 'Disney', duration: '4:20', category: 'Disney' },
        { title: 'Part of Your World', artist: 'The Little Mermaid', duration: '3:15', category: 'Disney' },
        { title: 'So This Is Love', artist: 'Cinderella OST', duration: '2:40', category: 'Disney' },
        { title: 'Once Upon a Dream', artist: 'Sleeping Beauty', duration: '2:45', category: 'Disney' },
        { title: 'Bibbidi-Bobbidi-Boo', artist: 'Cinderella OST', duration: '1:25', category: 'Disney' }
      ]
    }
  };

  const churchCategories = [
    { id: 'wejscie', name: 'Wejście', icon: Church },
    { id: 'ofiarowanie', name: 'Ofiarowanie', icon: Heart },
    { id: 'komunia', name: 'Komunia', icon: Star },
    { id: 'uwielbienie', name: 'Uwielbienie', icon: Music },
    { id: 'wyjscie', name: 'Wyjście', icon: Sparkles }
  ];

  const civilCategories = [
    { id: 'milosne', name: 'Miłosne', icon: Heart },
    { id: 'duchowe', name: 'Duchowe', icon: Star },
    { id: 'ballady', name: 'Ballady', icon: Music },
    { id: 'bajkowe', name: 'Bajkowe', icon: Sparkles }
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

  const handlePlayTrack = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
      // Zatrzymaj odtwarzanie audio
    } else {
      setPlayingTrack(trackId);
      // Odtwórz dźwięk nuta.mp3
      try {
        const audio = new Audio(notaAudio);
        audio.volume = 0.5; // Ustaw głośność na 50%
        audio.play().catch(error => {
          console.log('Nie można odtworzyć dźwięku:', error);
        });
      } catch (error) {
        console.log('Błąd przy odtwarzaniu audio:', error);
      }
    }
  };

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
    setSelectedSubCategory(null);
    // Rozwiń pierwszą kategorię przy zmianie typu ślubu
    const firstCategory = newCategory === 'church' ? 'wejscie' : 'milosne';
    setExpandedCategories(new Set([firstCategory]));
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
              po wielkie wesela. Nasze doświadczenie i pasja sprawią, że Wasz ślub będzie wyjątkowy 
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
                  <p className="text-chocolate">Ponad 10 lat doświadczenia w branży ślubnej</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-chocolate">Setki zadowolonych par młodych w całej Polsce</p>
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
                                                  const showLimit = 3; // Pokazuj tylko 3 pierwsze utwory, resztę po rozwinięciu
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
                              <button
                                onClick={() => handlePlayTrack(`${selectedCategory}-${category.id}-${index}`)}
                                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
                                  playingTrack === `${selectedCategory}-${category.id}-${index}`
                                    ? 'bg-sunset text-white'
                                    : 'bg-golden text-white hover:bg-sunset'
                                }`}
                              >
                                {playingTrack === `${selectedCategory}-${category.id}-${index}` ? (
                                  <Pause className="h-3 w-3" />
                                ) : (
                                  <Play className="h-3 w-3 ml-0.5" />
                                )}
                              </button>
                              <div className="min-w-0 flex-1">
                                <h4 className="font-medium text-dark-brown text-sm truncate">{track.title}</h4>
                                <p className="text-xs text-chocolate truncate">
                                  {track.artist} • {track.duration}
                                </p>
                              </div>
                            </div>
                            <Volume2 className="h-4 w-4 text-chocolate flex-shrink-0 ml-2" />
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
              <button className="bg-golden hover:bg-sunset text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                Pełny Repertuar (PDF)
              </button>
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