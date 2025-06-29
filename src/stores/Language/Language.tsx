import { TRANSLATIONS } from '@/toolbox/defaults';
import { Language } from '@/toolbox/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type LanguageStates = {
  language: Language;
};

type LanguageActions = {
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

type LanguageStore = LanguageStates & LanguageActions;

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: 'es',
      changeLanguage: (lang: Language) => {
        set({ language: lang });
      },
      t: (key: string) => {
        const lang = get().language;
        return TRANSLATIONS[lang][key as keyof (typeof TRANSLATIONS)[typeof lang]] || key;
      }
    }),
    {
      name: 'language-storage'
    }
  )
);
