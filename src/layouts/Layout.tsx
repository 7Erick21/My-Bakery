'use client';

import { useThemeStore } from '@/stores/Theme';
import type { Theme } from '@/toolbox/interfaces';
import { FC, PropsWithChildren, useLayoutEffect } from 'react';

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { mounted, changeMounted } = useThemeStore();

  useLayoutEffect(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'dark';
    const initial = saved || system;

    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(initial);
    useThemeStore.setState({ theme: initial });
    changeMounted(true);
  }, [changeMounted]);

  if (!mounted) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-background text-foreground'>
        <div className='text-xl font-semibold animate-bounce-gentle'>Cargando My Bakery...</div>
      </div>
    );
  }

  return <>{children}</>;
};
