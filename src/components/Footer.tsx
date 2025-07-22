import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, Phone, Mail, MapPin, Facebook, Instagram, Youtube, ArrowUp, X } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
  const [showTermsModal, setShowTermsModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-chocolate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <img src={logo} alt="ŚpiewoLandia Logo" className="h-8 w-8 mr-3 object-contain" />
                <span className="font-serif text-2xl font-bold">ŚpiewoLandia</span>
              </div>
              <p className="text-white/80 mb-4 leading-relaxed text-sm lg:text-base">
                Odkrywamy radość muzyki od 10 lat. Profesjonalne zajęcia dla dzieci i dorosłych
                w przyjaznej, inspirującej atmosferze.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="bg-white/10 hover:bg-golden p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-golden p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-golden p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <Youtube className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services & Contact Combined - Mobile responsive */}
            <div className="col-span-1">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {/* Services */}
                <div>
                  <h3 className="font-serif text-base lg:text-lg font-bold mb-3 lg:mb-4 text-golden">Nasze Usługi</h3>
                  <ul className="space-y-1 lg:space-y-2">
                    <li><Link to="/book-classes" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">Zajęcia dla Dzieci</Link></li>
                    <li><Link to="/vocal-lessons" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">Lekcje Wokalne</Link></li>
                    <li><Link to="/preschool-programs" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">Programy dla Przedszkoli</Link></li>
                    <li><Link to="/wedding-services" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">Oprawa Ślubu</Link></li>
                    <li><Link to="/about" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">O Mnie</Link></li>
                    <li><Link to="/contact" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">Kontakt</Link></li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div>
                  <h3 className="font-serif text-base lg:text-lg font-bold mb-3 lg:mb-4 text-golden">Kontakt</h3>
                  <div className="space-y-2 lg:space-y-3">
                    <div className="flex items-start">
                      <Phone className="h-3 w-3 lg:h-4 lg:w-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="tel:+48123456789" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm">
                          +48 123 456 789
                        </a>
                        <p className="text-xs text-white/60">Pon-Pt: 9:00-20:00</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-3 w-3 lg:h-4 lg:w-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                      <a href="mailto:info@spiewolandia.pl" className="text-white/80 hover:text-golden transition-colors duration-300 text-xs lg:text-sm break-all">
                        info@spiewolandia.pl
                      </a>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-golden mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <a
                          href="https://maps.google.com/?q=Piotrkowska+1+Łódź"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/80 text-xs lg:text-sm hover:text-golden transition-colors duration-300 block"
                        >
                          Piotrkowska 1<br />Łódź
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 mt-4 lg:mt-6 pt-3 lg:pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center justify-center text-white/60 text-xs lg:text-sm mb-2 md:mb-0 space-x-2">
                <span>© 2025 ŚpiewoLandia. Wszelkie prawa zastrzeżone.</span>
                <span className="hidden md:inline">|</span>
                <a
                  href="https://elvemo.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center group hover:text-golden transition-colors duration-300"
                  aria-label="Elvemo - strona firmy"
                >
                  <img
                    src="https://elvemo.netlify.app/logo.svg"
                    alt="Elvemo logo"
                    className="h-5 w-5 mr-1 opacity-80 group-hover:opacity-100"
                    style={{ display: 'inline-block' }}
                  />
                  <span className="underline underline-offset-2">Elvemo</span>
                </a>
              </div>
              <div className="text-white/60 text-xs flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-4">
                <span>Strona wykorzystuje pliki cookies</span>
                <button 
                  onClick={() => setShowTermsModal(true)}
                  className="text-white/60 hover:text-golden transition-colors duration-300 underline"
                >
                  Regulamin
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>


      {/* Terms Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowTermsModal(false)}
          />
          <div className="relative bg-white rounded-2xl p-6 max-w-md md:max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl animate-fade-in">
            <button
              onClick={() => setShowTermsModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-cream transition-colors duration-200"
            >
              <X className="h-5 w-5 text-chocolate" />
            </button>
            
            <div className="pr-8">
              <h2 className="font-serif text-2xl font-bold text-dark-brown mb-6">Regulamin</h2>
              
              <div className="space-y-4 text-sm text-chocolate">
                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§1 Postanowienia ogólne</h3>
                  <p>
                    Niniejszy Regulamin określa zasady korzystania z usług oferowanych przez ŚpiewoLandię, 
                    prowadzoną przez Annę Kowalską, zwaną dalej "Organizatorem".
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§2 Zajęcia dla dzieci</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Zajęcia odbywają się według ustalonego harmonogramu</li>
                    <li>Opłaty uiszczane są z góry za cały miesiąc</li>
                    <li>Możliwość odrobienia zajęć w przypadku usprawiedliwionej nieobecności</li>
                    <li>Rodzic/opiekun zobowiązany jest do punktualnego odbierania dzieci</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§3 Lekcje indywidualne</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Lekcje odbywają się w uzgodnionych terminach</li>
                    <li>Możliwość przełożenia lekcji z 24h wyprzedzeniem</li>
                    <li>Brak możliwości zwrotu za niestawiennictwo bez usprawiedliwienia</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§4 Zasady płatności</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Płatności dokonywane są przelewem lub gotówką</li>
                    <li>Opłaty za zajęcia uiszczane są z góry</li>
                    <li>W przypadku rezygnacji, zwrot następuje proporcjonalnie za niewykorzystane zajęcia</li>
                  </ul>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§5 Odpowiedzialność</h3>
                  <p>
                    Organizator nie ponosi odpowiedzialności za rzeczy pozostawione przez uczestników 
                    w miejscu prowadzenia zajęć. Rodzice/opiekunowie odpowiadają za zachowanie dzieci 
                    podczas zajęć.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§6 Ochrona danych osobowych</h3>
                  <p>
                    Dane osobowe uczestników przetwarzane są zgodnie z RODO, wyłącznie w celu realizacji 
                    usług edukacyjnych i komunikacji z uczestnikami.
                  </p>
                </section>

                <section>
                  <h3 className="font-bold text-lg text-dark-brown mb-2">§7 Postanowienia końcowe</h3>
                  <p>
                    Regulamin wchodzi w życie z dniem publikacji. Organizator zastrzega sobie prawo 
                    do wprowadzania zmian w regulaminie po wcześniejszym poinformowaniu uczestników.
                  </p>
                </section>
              </div>

              <div className="mt-6 pt-4 border-t border-cream">
                <p className="text-xs text-chocolate/60 text-center">
                  Ostatnia aktualizacja: 15 stycznia 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;