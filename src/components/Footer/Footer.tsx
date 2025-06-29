'use client';

import { useLanguageStore } from '@/stores/Language';
import { Coffee, Facebook, Instagram, Mail, Twitter } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguageStore();

  return (
    <footer className='bg-gray-900 dark:bg-gray-950 text-white border-t border-gray-800'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2 group'>
              <Coffee className='h-8 w-8 text-amber-400 transition-transform duration-300 group-hover:rotate-12' />
              <span className='text-2xl font-bold text-white'>My Bakery</span>
            </div>
            <p className='text-gray-400'>{t('footer.description')}</p>
            <div className='flex space-x-4'>
              {[Facebook, Instagram, Twitter, Mail].map((Icon, index) => (
                <Icon
                  key={index}
                  className='h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12'
                />
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>{t('footer.quickLinks')}</h3>
            <ul className='space-y-2'>
              {[
                { href: '#inicio', key: 'nav.home' },
                { href: '#productos', key: 'nav.products' },
                { href: '#nosotros', key: 'nav.about' },
                { href: '#contacto', key: 'nav.contact' }
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className='text-gray-400 hover:text-amber-400 transition-all duration-300 hover:translate-x-1 inline-block'
                  >
                    {t(item.key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>{t('footer.products')}</h3>
            <ul className='space-y-2'>
              {[
                'products.artisanBread',
                'products.homemadeCakes',
                'products.premiumCoffee',
                'products.croissants',
                'products.muffins'
              ].map((key, index) => (
                <li key={index}>
                  <span className='text-gray-400'>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white'>{t('footer.contact')}</h3>
            <div className='space-y-2 text-gray-400'>
              <p>
                Calle Principal 123
                <br />
                Centro, Ciudad 12345
              </p>
              <p>(555) 123-4567</p>
              <p>info@mybakery.com</p>
            </div>
            <div className='space-y-1 text-sm text-gray-400'>
              <p>{t('contact.hoursWeekdays')}</p>
              <p>{t('contact.hoursSaturday')}</p>
              <p>{t('contact.hoursSunday')}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400'>
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
