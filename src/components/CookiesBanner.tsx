import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';

const CookiesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem('cookies-accepted', 'necessary-only');
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-cream shadow-lg">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1 mr-4">
            <div className="flex items-center mb-3">
              <Cookie className="h-6 w-6 text-golden mr-3" />
              <h3 className="font-serif text-lg font-bold text-dark-brown">
                Pliki Cookies
              </h3>
            </div>
            
            {!showDetails ? (
              <div className="space-y-3">
                <p className="text-chocolate text-sm">
                  Używamy plików cookies, aby zapewnić najlepsze doświadczenia na naszej stronie. 
                  Możesz zaakceptować wszystkie cookies lub wybrać tylko niezbędne.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptCookies}
                    className="bg-golden hover:bg-sunset text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                  >
                    Akceptuj wszystkie
                  </button>
                  <button
                    onClick={acceptNecessaryOnly}
                    className="bg-cream hover:bg-golden/20 text-dark-brown px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 border border-golden/30"
                  >
                    Tylko niezbędne
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-golden hover:text-sunset font-medium text-sm underline"
                  >
                    Więcej informacji
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-cream rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Shield className="h-4 w-4 text-golden mr-2" />
                      <span className="font-semibold text-dark-brown">Niezbędne</span>
                    </div>
                    <p className="text-chocolate text-xs">
                      Wymagane do działania strony. Nie można ich wyłączyć.
                    </p>
                  </div>
                  <div className="bg-cream rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <Settings className="h-4 w-4 text-golden mr-2" />
                      <span className="font-semibold text-dark-brown">Funkcjonalne</span>
                    </div>
                    <p className="text-chocolate text-xs">
                      Poprawiają komfort korzystania ze strony.
                    </p>
                  </div>
                  <div className="bg-cream rounded-lg p-3">
                    <div className="flex items-center mb-2">
                      <span className="w-4 h-4 bg-golden rounded text-white text-xs flex items-center justify-center mr-2">📊</span>
                      <span className="font-semibold text-dark-brown">Analityczne</span>
                    </div>
                    <p className="text-chocolate text-xs">
                      Google Analytics - statystyki odwiedzin.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={acceptCookies}
                    className="bg-golden hover:bg-sunset text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300"
                  >
                    Akceptuj wszystkie
                  </button>
                  <button
                    onClick={acceptNecessaryOnly}
                    className="bg-cream hover:bg-golden/20 text-dark-brown px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 border border-golden/30"
                  >
                    Tylko niezbędne
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="text-golden hover:text-sunset font-medium text-sm underline"
                  >
                    Ukryj szczegóły
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={closeBanner}
            className="bg-cream hover:bg-golden/20 p-2 rounded-lg transition-colors duration-300 flex-shrink-0"
          >
            <X className="h-5 w-5 text-dark-brown" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesBanner; 