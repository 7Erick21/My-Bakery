'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';

type ThemeProviderProps = PropsWithChildren;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  return (
    <NextThemesProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </NextThemesProvider>
  );
};
