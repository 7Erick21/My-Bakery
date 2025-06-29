'use client';

import { useLanguageStore } from '@/stores/Language';
import { Badge } from '@/ui/Badge';
import { Card, CardContent } from '@/ui/Cards';
import { useEffect, useState } from 'react';

export function Products() {
  const { t } = useLanguageStore();

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const products = [
    {
      name: t('products.artisanBread'),
      description: t('products.artisanBreadDesc'),
      price: `${t('products.from')} $3.50`,
      image: '/placeholder.svg?height=300&width=300',
      badge: t('products.mostPopular')
    },
    {
      name: t('products.homemadeCakes'),
      description: t('products.homemadeCakesDesc'),
      price: `${t('products.from')} $15.00`,
      image: '/placeholder.svg?height=300&width=300',
      badge: t('products.specialty')
    },
    {
      name: t('products.premiumCoffee'),
      description: t('products.premiumCoffeeDesc'),
      price: `${t('products.from')} $4.00`,
      image: '/placeholder.svg?height=300&width=300',
      badge: t('products.new')
    },
    {
      name: t('products.croissants'),
      description: t('products.croissantsDesc'),
      price: `${t('products.from')} $2.50`,
      image: '/placeholder.svg?height=300&width=300',
      badge: ''
    },
    {
      name: t('products.muffins'),
      description: t('products.muffinsDesc'),
      price: `${t('products.from')} $3.00`,
      image: '/placeholder.svg?height=300&width=300',
      badge: ''
    },
    {
      name: t('products.gourmetCookies'),
      description: t('products.gourmetCookiesDesc'),
      price: `${t('products.from')} $1.50`,
      image: '/placeholder.svg?height=300&width=300',
      badge: t('products.favorite')
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

    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id='productos' className='py-20 bg-white dark:bg-gray-900'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center space-y-4 mb-16 animate-fade-in'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100'>
            {t('products.title')}
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto'>
            {t('products.description')}
          </p>
        </div>

        {/* Products Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {products.map((product, index) => (
            <Card
              key={index}
              className={`product-card group hover:shadow-xl transition-all duration-500 overflow-hidden shadow-md hover:scale-105 ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              data-index={index}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className='relative overflow-hidden'>
                <img
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  className='w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1'
                />
                {product.badge && (
                  <Badge className='absolute top-4 left-4 animate-pulse'>{product.badge}</Badge>
                )}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
              </div>
              <CardContent className='p-6'>
                <div className='space-y-3'>
                  <div className='flex items-center justify-between'>
                    <h3 className='text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-amber-600 transition-colors duration-300'>
                      {product.name}
                    </h3>
                    <span className='text-lg font-bold text-amber-600 animate-pulse'>
                      {product.price}
                    </span>
                  </div>
                  <p className='text-gray-600 dark:text-gray-400'>{product.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
