'use client';

import { ThemeProvider } from '@/components/ThemeProvider';
import { FC, PropsWithChildren, useEffect, useState } from 'react';

type LayoutProps = PropsWithChildren;

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className='flex items-center justify-center min-h-screen bg-background text-foreground'>
        {' '}
        <div className='text-xl font-semibold animate-bounce-gentle'>
          Cargando My Bakery...
        </div>{' '}
      </div>
    );
  }

  return <ThemeProvider>{children}</ThemeProvider>;
};
