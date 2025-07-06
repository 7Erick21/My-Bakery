'use client';

import { useLanguageStore } from '@/stores/Language';
import { Button } from '@/ui/Button';
import { Coffee, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { LanguageToggle } from '../LanguageToggle';
import { ThemeToggle } from '../ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguageStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 ease-out rounded-2xl ${
        isScrolled
          ? 'bg-white/20 dark:bg-gray-900/20 backdrop-blur-xl border border-white/30 dark:border-gray-700/30 shadow-2xl shadow-black/10'
          : 'bg-white/10 dark:bg-gray-900/10 backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-xl shadow-black/5'
      }`}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {/* Efecto de nube flotante */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/15 to-white/5 dark:from-gray-900/5 dark:via-gray-900/15 dark:to-gray-900/5 rounded-2xl" />
      
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <div className='flex items-center space-x-2 group'>
            <Coffee className='h-8 w-8 text-amber-600 transition-transform duration-300 group-hover:rotate-12 drop-shadow-lg' />
            <span className='text-2xl font-bold text-amber-900 dark:text-amber-100 transition-colors duration-300 drop-shadow-sm'>
              My Bakery
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            {[
              { href: '#inicio', key: 'nav.home' },
              { href: '#productos', key: 'nav.products' },
              { href: '#nosotros', key: 'nav.about' },
              { href: '#testimonios', key: 'nav.testimonials' },
              { href: '#contacto', key: 'nav.contact' }
            ].map(item => (
              <a
                key={item.href}
                href={item.href}
                className='text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-all duration-300 relative group font-medium drop-shadow-sm'
              >
                {t(item.key)}
                <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full rounded-full shadow-lg shadow-amber-600/50'></span>
              </a>
            ))}
          </nav>

          {/* Controls */}
          <div className='flex items-center space-x-2'>
            <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-full p-1 border border-white/20 dark:border-gray-700/20">
              <ThemeToggle />
            </div>
            <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 rounded-full p-1 border border-white/20 dark:border-gray-700/20">
              <LanguageToggle />
            </div>
            <div className='hidden md:block'>
              <Button className='transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm bg-amber-600/90 hover:bg-amber-700/90 border border-amber-500/20 shadow-xl'>
                {t('nav.order')}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden'>
              <Button
                variant='ghost'
                size='icon'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='transition-transform duration-300 hover:scale-110 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10 border border-white/20 dark:border-gray-700/20'
              >
                {isMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl bg-white/20 dark:bg-gray-900/20 border border-white/20 dark:border-gray-700/20 rounded-2xl mt-2 shadow-2xl'>
            {[
              { href: '#inicio', key: 'nav.home' },
              { href: '#productos', key: 'nav.products' },
              { href: '#nosotros', key: 'nav.about' },
              { href: '#testimonios', key: 'nav.testimonials' },
              { href: '#contacto', key: 'nav.contact' }
            ].map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className='block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-amber-600 transition-all duration-300 hover:bg-white/20 dark:hover:bg-gray-800/20 rounded-xl backdrop-blur-sm font-medium'
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {t(item.key)}
              </a>
            ))}
            <div className='px-3 py-2'>
              <Button className='w-full transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-amber-600/90 hover:bg-amber-700/90 border border-amber-500/20 shadow-xl'>
                {t('nav.order')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}