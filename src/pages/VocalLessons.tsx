import React, { useEffect, useRef } from 'react';
import { Clock, CheckCircle, Calendar } from 'lucide-react';

declare global {
  interface Window {
    WzkWidget?: { init?: () => void } | any;
  }
}

const VocalHero = () => (
  <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <div className="w-full h-full bg-gradient-to-r from-chocolate/80 via-chocolate/40 to-transparent">
        <img 
          src="https://images.pexels.com/photos/7078662/pexels-photo-7078662.jpeg"
          alt="Vocal lessons"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 backdrop-blur bg-gradient-to-br from-white/10 via-transparent to-black/20 border-white/20"></div>
    </div>
    <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
      <h1 className="font-serif text-h1-mobile lg:text-h1-desktop font-bold text-white mb-6 animate-fade-in">
        Lekcje Wokalne
      </h1>
      <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up">
        Zajęcia wokalne dla dzieci od 8 lat, młodzieży i dorosłych.
        Nauka prawidłowego oddychania, emisji, dykcji i pracy z mikrofonem.
      </p>
      <a
        href="https://nextvisit.pl/spiewolandia-naxvav1smnyhcizq"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-golden hover:bg-sunset text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
      >
        Umów Pierwszą Lekcję
      </a>
    </div>
  </section>
);




const VocalLessons = () => {
  // (testimonials removed — external widget used instead)


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <VocalHero />

      {/* Informacje o zajęciach (ogólne) */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-3">
              Ogólne informacje
            </h2>
            <p className="text-lg text-chocolate max-w-2xl mx-auto">
              Zajęcia wokalne bez podziału na zaawansowanie — zapraszamy wszystkich, którzy
              chcą śpiewać i rozwijać swoje umiejętności.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-cream rounded-2xl p-6 lg:p-8">
              <h3 className="font-serif text-2xl font-bold text-dark-brown mb-4">Dla kogo</h3>
              <p className="text-chocolate leading-relaxed mb-4">
                Zajęcia wokalne są dla każdego, kto lubi śpiewać – niezależnie od wieku czy doświadczenia.
                Zapraszamy zarówno tych, którzy dopiero zaczynają swoją przygodę z muzyką, jak i osoby,
                które już od dawna śpiewają i chcą rozwijać swój talent. Do naszych zajęć można dołączyć od 8. roku życia – i nie ma górnej granicy! 🎶
              </p>

              <h4 className="font-semibold text-dark-brown mb-2">Jak wyglądają zajęcia?</h4>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Uczymy się prawidłowej emisji głosu i oddychania</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Ćwiczymy intonację, dykcję i rytmikę</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Rozwijamy słuch muzyczny i poczucie rytmu</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Interpretujemy utwory w różnych stylach i pracujemy nad występami scenicznymi</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Zajęcia mogą być indywidualne lub grupowe – dostosowujemy formę do potrzeb</span>
                </li>
              </ul>

              <h4 className="font-semibold text-dark-brown mb-2">Korzyści z zajęć wokalnych</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Rozwój muzyczny i artystyczny</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Wzmocnienie pewności siebie i swobody wyrażania emocji</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Poprawa dykcji i pracy głosem</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Ćwiczenie koncentracji i pamięci</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-soft-green mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-chocolate">Świetna zabawa i nowe znajomości</span>
                </li>
              </ul>
            </div>

            <aside className="bg-white rounded-2xl p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <a
                    href="https://nextvisit.pl/spiewolandia-naxvav1smnyhcizq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-golden hover:bg-sunset text-white px-6 py-3 rounded-full font-medium text-base w-full inline-block text-center transition-all duration-300">
                    Umów Pierwszą Lekcję
                  </a>
                </div>
                
                <h4 className="font-serif text-lg font-bold text-dark-brown mb-3">Godziny</h4>
                <div className="flex items-center text-chocolate mb-2">
                  <Clock className="h-5 w-5 text-golden mr-3" />
                  <div>
                    <div>Pon–Pt: 8:00 – 21:30</div>
                    <div>Sob: 8:00 – 14:00</div>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-bold text-dark-brown mt-6 mb-3">Kontakt</h4>
                <a href="mailto:spiewolandia.info@gmail.com" className="text-chocolate underline">spiewolandia.info@gmail.com</a>
              </div>

                
            </aside>
          </div>
        </div>
      </section>

      {/* External reviews widget */}
      <ExternalReviews />

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-golden to-sunset">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-4">
            Rozpocznij Swoją Muzyczną Podróż
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Umów się na bezpłatną lekcję próbną i odkryj potencjał swojego głosu
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="https://nextvisit.pl/spiewolandia-naxvav1smnyhcizq"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-dark-brown hover:bg-cream px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="inline-block h-5 w-5 mr-2" />
              Zarezerwuj Lekcję
            </a>
            <a 
              href="tel:+48517666426"
              className="text-white hover:text-cream font-medium text-lg flex items-center transition-colors duration-300"
            >
              lub zadzwoń: +48 517 666 426
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};


const ExternalReviews = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  useEffect(() => {
    const id = 'wzk-widget-script';
    const baseSrc = 'https://widgets.4wzk.pl/dist/js/widget.js';

    const cleanWidgetNodes = () => {
      // remove iframes and dynamically added nodes inside widget container
      try {
        const containers = document.querySelectorAll('.wzk-widget');
        containers.forEach((c) => {
          const iframes = c.querySelectorAll('iframe');
          iframes.forEach((f) => f.remove());
          // also remove children except the header anchor/img we render statically
          Array.from(c.children).forEach((child) => {
            if (child !== containerRef.current?.firstElementChild) {
              // leave our static header (first child), remove others
              child.remove();
            }
          });
        });
      } catch (e) {
        // ignore
      }
    };

    const removeScript = () => {
      const prev = document.getElementById(id);
      if (prev) prev.remove();
      if (scriptRef.current && scriptRef.current.parentNode) {
        scriptRef.current.parentNode.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };

    const waitForIframe = (timeout = 2500) =>
      new Promise<boolean>((resolve) => {
        if (!containerRef.current) return resolve(false);
        const c = containerRef.current;
        // quick check
        if (c.querySelector('iframe')) return resolve(true);

        const obs = new MutationObserver(() => {
          if (c.querySelector('iframe')) {
            resolve(true);
            obs.disconnect();
          }
        });
        observerRef.current = obs;
        obs.observe(c, { childList: true, subtree: true });

        // timeout fallback
        setTimeout(() => {
          try {
            obs.disconnect();
          } catch {}
          resolve(!!c.querySelector('iframe'));
        }, timeout);
      });

    const tryInitGlobal = () => {
      try {
        if ((window as any).WzkWidget && typeof (window as any).WzkWidget.init === 'function') {
          (window as any).WzkWidget.init();
        }
      } catch (e) {
        // ignore
      }
    };

    const loadScript = async (cacheBust = false) => {
      // If widget global exists, try to init first instead of reloading script
      if (!cacheBust && (window as any).WzkWidget) {
        tryInitGlobal();
        // wait a moment for DOM changes
        let ok = await waitForIframe(1000);
        if (!ok) {
          // retry init a few times
          for (let i = 0; i < 3 && !ok; i++) {
            await new Promise((r) => setTimeout(r, 700));
            tryInitGlobal();
            ok = !!(containerRef.current && containerRef.current.querySelector('iframe'));
            if (ok) break;
          }
        }
        if (ok) return;
        // fallthrough to reload script with cacheBust
        cacheBust = true;
      }

      // remove previous script and widget nodes before loading
      removeScript();
      cleanWidgetNodes();

      const src = cacheBust ? `${baseSrc}?ts=${Date.now()}` : baseSrc;
      const s = document.createElement('script');
      s.src = src;
      s.defer = true;
      s.id = id;
      scriptRef.current = s;
      document.body.appendChild(s);

      // wait for script load or short timeout
      await new Promise((res) => {
        const t = setTimeout(res, 2000);
        s.onload = () => {
          clearTimeout(t);
          res(undefined);
        };
        s.onerror = () => {
          clearTimeout(t);
          res(undefined);
        };
      });

      // attempt to init if widget exposes API
      tryInitGlobal();

      // wait shortly for iframe to be inserted
      const ok = await waitForIframe(2000);
      if (!ok && !cacheBust) {
        // retry once with cache-busting
        await loadScript(true);
      }
    };

    // kick off loader
    loadScript(false).catch(() => {});

    return () => {
      // cleanup
      try {
        if (observerRef.current) observerRef.current.disconnect();
      } catch {}
      removeScript();
      // remove any iframes added
      try {
        const containers = document.querySelectorAll('.wzk-widget');
        containers.forEach((c) => {
          const iframes = c.querySelectorAll('iframe');
          iframes.forEach((f) => f.remove());
        });
      } catch {}
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <div
        ref={containerRef}
        style={{
          width: '1000px',
          maxWidth: '100%',
          borderRadius: 8,
          boxShadow: '0 1px 6px #B8C5D366',
          overflow: 'hidden',
        }}
        className="wzk-widget iframe-height"
        data-wzk-widget-type="type1"
        data-wzk-notice="60060"
      >
        <div
          style={{
            backgroundColor: '#F5F6FA',
            textAlign: 'center',
            padding: 16,
            fontSize: 12,
            lineHeight: '12px',
          }}
        >
          <a
            className="wzk-accent-color"
            title="Wiktoria Kicińska"
            href="https://www.weselezklasa.pl/ogloszenia-weselne/wiktoria-kicinska,60060/#opinie"
            rel="nofollow"
            target="_blank"
            style={{ color: 'currentColor', textDecoration: 'none' }}
          >
            Wiktoria Kicińska
          </a>
          <img
            style={{ margin: '8px auto 0', display: 'block' }}
            src="https://widgets.4wzk.pl/dist/img/footer-logo.svg"
            alt="Wesele z klasą"
          />
        </div>
      </div>
    </div>
  );
};

export default VocalLessons;