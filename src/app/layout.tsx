import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';

export const metadata: Metadata = {
  title: 'Abelohost Shop',
  description: 'Shop interface built with DummyJSON API',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
