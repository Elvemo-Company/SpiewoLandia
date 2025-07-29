
import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { playCTASound } from '../utils/audioUtils';

const Hero = () => {
  return (
    <section className="relative h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
          <img 
            src="https://images.pexels.com/photos/8293657/pexels-photo-8293657.jpeg"
            alt="Children singing happily"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
          Odkryj Radość Muzyki
        </h1>
        <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
          Profesjonalne zajęcia muzyczne dla dzieci i dorosłych. 
          Rozwijamy talenty, budujemy pewność siebie, tworzymy niezapomniane chwile.
        </p>
        
        <div className="flex flex-col gap-y-4 sm:flex-row sm:flex-nowrap sm:gap-x-6 sm:justify-center sm:items-center sm:w-full sm:max-w-2xl sm:mx-auto sm:overflow-x-auto animate-slide-up">
          <a
            href="/vocal-lessons"
            onClick={playCTASound}
            className="w-full sm:w-auto bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-card-hover text-center min-w-[180px]"
          >
            Zobacz Zajęcia
          </a>
          <Link
            to="/book-classes"
            className="w-full sm:w-auto group flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-chocolate px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 min-w-[220px]"
          >
            <Play className="h-5 w-5 mr-2 group-hover:text-golden transition-colors" />
            Umów Próbną Lekcję
          </Link>
        </div>

        {/* Stats Preview */}
        <div className="grid grid-cols-2 gap-8 mt-16 max-w-lg mx-auto">
          {/* <div className="text-center animate-fade-in">
            <div className="text-2xl lg:text-3xl font-bold text-golden">500+</div>
            <div className="text-sm text-white/80">Szczęśliwych Uczniów</div>
          </div> */}
          <div className="text-center animate-fade-in">
            <div className="text-2xl lg:text-3xl font-bold text-golden">10</div>
            <div className="text-sm text-white/80">Lat Doświadczenia</div>
          </div>
          <div className="text-center animate-fade-in">
            <div className="text-2xl lg:text-3xl font-bold text-golden">50+</div>
            <div className="text-sm text-white/80">Występy</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <ChevronDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;