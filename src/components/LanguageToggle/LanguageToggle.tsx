'use client';

import { useLanguageStore } from '@/stores/Language';
import { Button } from '@/ui/Button';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguageStore();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ca', name: 'Català', flag: '🏴󠁥󠁳󠁣󠁴󠁿' }
  ];

  return (
    <div className='relative'>
      <Button
        variant='ghost'
        size='icon'
        onClick={() => setIsOpen(!isOpen)}
        className='transition-all duration-300 hover:scale-110'
      >
        <Globe className='h-4 w-4' />
        <span className='sr-only'>Change language</span>
      </Button>

      {isOpen && (
        <div className='absolute right-0 top-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50 min-w-[120px]'>
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code as 'es' | 'en' | 'ca');
                setIsOpen(false);
              }}
              className={`w-full px-3 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center space-x-2 ${
                language === lang.code
                  ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-600'
                  : 'text-gray-700 dark:text-gray-300'
              }`}
            >
              <span>{lang.flag}</span>
              <span className='text-sm'>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
