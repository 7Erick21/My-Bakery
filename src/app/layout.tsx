import { Layout } from '@/layouts';
import type { Metadata } from 'next';
import type React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Bakery - Horneado fresco todos los días',
  description:
    'Descubre el sabor auténtico de nuestros panes artesanales, pasteles caseros y café recién molido.',
  generator: 'v0.dev'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
