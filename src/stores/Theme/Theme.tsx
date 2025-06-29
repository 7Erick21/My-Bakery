import { Theme } from '@/toolbox/interfaces';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ThemeState = {
  theme: Theme;
  mounted: boolean;
};

type ThemeActions = {
  toggleTheme: () => void;
  changeMounted: (v: boolean) => void;
};

type ThemeStore = ThemeState & ThemeActions;

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      mounted: false,
      toggleTheme: () => {
        const newTheme: Theme = get().theme === 'light' ? 'dark' : 'light';
        set({ theme: newTheme });
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(newTheme);
      },
      changeMounted: (v: boolean) => set({ mounted: v })
    }),
    {
      name: 'theme-storage'
    }
  )
);
