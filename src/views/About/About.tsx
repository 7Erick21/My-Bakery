'use client';

import { useLanguageStore } from '@/stores/Language';
import { Card, CardContent } from '@/ui/Cards';
import { Award, Clock, Heart, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export const About = () => {
  const { t } = useLanguageStore();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [counters, setCounters] = useState({ years: 0, products: 0, clients: 0, days: 0 });

  const features = [
    {
      icon: Heart,
      title: t('about.madeWithLove'),
      description: t('about.madeWithLoveDesc')
    },
    {
      icon: Award,
      title: t('about.premiumQuality'),
      description: t('about.premiumQualityDesc')
    },
    {
      icon: Users,
      title: t('about.familyTradition'),
      description: t('about.familyTraditionDesc')
    },
    {
      icon: Clock,
      title: t('about.freshDaily'),
      description: t('about.freshDailyDesc')
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate counters
            const targets = { years: 20, products: 50, clients: 1000, days: 365 };
            const duration = 2000;
            const steps = 60;
            const stepTime = duration / steps;

            Object.keys(targets).forEach(key => {
              const target = targets[key as keyof typeof targets];
              const increment = target / steps;
              let current = 0;

              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
              }, stepTime);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('nosotros');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id='nosotros' className='py-20 bg-amber-50 dark:bg-amber-950/10'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className='space-y-4'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
                {t('about.title')}
              </h2>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                {t('about.description1')}
              </p>
              <p className='text-lg text-gray-600 dark:text-gray-400 leading-relaxed'>
                {t('about.description2')}
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-2 gap-6'>
              {[
                { value: counters.years, label: t('about.yearsExperience'), suffix: '+' },
                { value: counters.products, label: t('about.uniqueProducts'), suffix: '+' },
                { value: counters.clients, label: t('about.happyClients'), suffix: '+' },
                { value: counters.days, label: t('about.daysYear'), suffix: '' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 hover:scale-110 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className='text-3xl font-bold text-amber-600 animate-pulse'>
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div className='text-gray-600 dark:text-gray-400'>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div
            className={`grid gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`border-none shadow-md hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${(index + 4) * 200}ms` }}
              >
                <CardContent className='p-6'>
                  <div className='flex items-start space-x-4'>
                    <div className='w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 hover:rotate-12'>
                      <feature.icon className='h-6 w-6 text-amber-600' />
                    </div>
                    <div className='space-y-2'>
                      <h3 className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-600 dark:text-gray-400'>{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
