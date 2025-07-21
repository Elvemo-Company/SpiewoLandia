import React, { useState, useEffect, useRef } from 'react';
import { Users, Calendar, Award, Star } from 'lucide-react';

const TrustIndicators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: '+',
      label: 'Szczęśliwych Uczniów',
      color: 'text-golden'
    },
    {
      icon: Calendar,
      number: 10,
      suffix: '',
      label: 'Lat Doświadczenia',
      color: 'text-sunset'
    },
    {
      icon: Award,
      number: 50,
      suffix: '+',
      label: 'Występów Rocznie',
      color: 'text-soft-green'
    },
    {
      icon: Star,
      number: 98,
      suffix: '%',
      label: 'Zadowolenie Klientów',
      color: 'text-golden'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const Counter = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000;
        const increment = number / (duration / 16);
        let currentCount = 0;

        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(currentCount));
          }
        }, 16);

        return () => clearInterval(timer);
      }
    }, [isVisible, number]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-h2-mobile lg:text-h2-desktop font-bold text-dark-brown mb-4">
            Zaufało Nam
          </h2>
          <p className="text-lg text-chocolate">
            Liczby, które mówią same za siebie
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cream rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <div className={`text-3xl lg:text-4xl font-bold ${stat.color} mb-2`}>
                <Counter number={stat.number} suffix={stat.suffix} isVisible={isVisible} />
              </div>
              <p className="text-sm lg:text-base text-chocolate font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="mt-20 text-center">
          <h3 className="font-serif text-xl lg:text-2xl font-bold text-dark-brown mb-8">
            Nasi Partnerzy
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Partner logos would go here */}
            <div className="bg-golden/20 border border-golden/30 rounded-lg px-8 py-4 text-dark-brown font-medium shadow-card hover:shadow-card-hover hover:bg-golden/30 transition-all duration-300">
              Przedszkole Słoneczko
            </div>
            <div className="bg-soft-green/20 border border-soft-green/30 rounded-lg px-8 py-4 text-dark-brown font-medium shadow-card hover:shadow-card-hover hover:bg-soft-green/30 transition-all duration-300">
              Hotel Belvedere
            </div>
            <div className="bg-sunset/20 border border-sunset/30 rounded-lg px-8 py-4 text-dark-brown font-medium shadow-card hover:shadow-card-hover hover:bg-sunset/30 transition-all duration-300">
              Pałac Romantyczny
            </div>
            <div className="bg-muted-red/20 border border-muted-red/30 rounded-lg px-8 py-4 text-dark-brown font-medium shadow-card hover:shadow-card-hover hover:bg-muted-red/30 transition-all duration-300">
              Centrum Kultury
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;