import { Metadata } from 'next';
import { Barlow } from 'next/font/google';

import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/sonner';

//Styles Import
import './globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

export const metadata: Metadata = {
  title: {
    default: 'Logs',
    template: '%s | Logs',
  },
};

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='scroll-smooth' lang='en'>
      <SessionProvider>
        <body
          className={`min-full-screen flex w-full flex-col ${barlow.className}`}
        >
          {children}

          {/* Toast Container */}
          <Toaster position='top-right' />
        </body>
      </SessionProvider>
    </html>
  );
}
