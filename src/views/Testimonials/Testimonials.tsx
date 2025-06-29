'use client';

import { useLanguageStore } from '@/stores/Language';
import { Card, CardContent } from '@/ui/Cards';
import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Testimonials() {
  const { t } = useLanguageStore();

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const testimonials = [
    {
      name: 'María González',
      role: t('testimonials.maria.role'),
      content: t('testimonials.maria.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: 'Carlos Rodríguez',
      role: t('testimonials.carlos.role'),
      content: t('testimonials.carlos.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    },
    {
      name: 'Ana Martínez',
      role: t('testimonials.ana.role'),
      content: t('testimonials.ana.content'),
      rating: 5,
      avatar: '/placeholder.svg?height=60&width=60'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.testimonial-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='testimonios' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-4 mb-16 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
            {t('testimonials.title')}
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`testimonial-card hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className='p-6'>
                <div className='space-y-4'>
                  {/* Rating */}
                  <div className='flex space-x-1'>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 fill-amber-400 text-amber-400 transition-all duration-300 hover:scale-125`}
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className='text-gray-600 dark:text-gray-400 italic'>
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author */}
                  <div className='flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700'>
                    <img
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover transition-transform duration-300 hover:scale-110'
                    />
                    <div>
                      <div className='font-semibold text-gray-900 dark:text-gray-100'>
                        {testimonial.name}
                      </div>
                      <div className='text-sm text-gray-500 dark:text-gray-400'>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
