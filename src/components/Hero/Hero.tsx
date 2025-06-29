'use client';

import { useLanguageStore } from '@/stores/Language';
import { Button } from '@/ui/Button';
import { ArrowRight, Clock, Coffee, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const { t } = useLanguageStore();

  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='inicio'
      className='pt-16 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 min-h-screen flex items-center'
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className='space-y-4'>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight'>
                {t('hero.title')}
                <span className='text-amber-600 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent animate-pulse'>
                  {t('hero.titleHighlight')}
                </span>
              </h1>
              <p className='text-xl text-gray-600 dark:text-gray-400 leading-relaxed'>
                {t('hero.description')}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='transition-all duration-300 hover:scale-105 hover:shadow-lg group'
              >
                {t('hero.viewMenu')}
                <ArrowRight className='ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='transition-all duration-300 hover:scale-105 bg-transparent'
              >
                {t('hero.makeOrder')}
              </Button>
            </div>

            {/* Quick Info */}
            <div className='grid sm:grid-cols-3 gap-4 pt-8'>
              {[
                { icon: Clock, text: t('hero.openHours') },
                { icon: MapPin, text: t('hero.location') },
                { icon: Phone, text: t('hero.phone') }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 transition-all duration-500 hover:text-amber-600 hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ animationDelay: `${(index + 1) * 200}ms` }}
                >
                  <item.icon className='h-5 w-5 text-amber-600' />
                  <span className='text-sm'>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className='aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105'>
              <img
                src='/placeholder.svg?height=600&width=600'
                alt='Panadería My Bakery con productos frescos'
                className='w-full h-full object-cover transition-transform duration-700 hover:scale-110'
              />
            </div>
            {/* Floating Card */}
            <div className='absolute -bottom-6 -left-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-xl shadow-lg p-6 max-w-xs border border-gray-200 dark:border-gray-700 transition-all duration-500 hover:scale-105 hover:shadow-xl'>
              <div className='flex items-center space-x-3'>
                <div className='w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center'>
                  <Coffee className='h-6 w-6 text-amber-600 animate-bounce' />
                </div>
                <div>
                  <p className='font-semibold text-gray-900 dark:text-gray-100'>
                    {t('hero.statsProducts')}
                  </p>
                  <p className='text-sm text-gray-600 dark:text-gray-400'>
                    {t('hero.statsDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
