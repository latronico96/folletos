"use client";

import './globals.css';
import { ReactNode } from 'react';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/lib/emotionCache';
import { Geist, Geist_Mono } from 'next/font/google';

const clientSideEmotionCache = createEmotionCache();

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
         <meta name="facebook-domain-verification" content="iuwgsjg1d8rx9jllng6gjeni9lykt2" />
         <meta name="google-site-verification" content="LPSt3_sjFJfq1Qv7_ISCHgBPvXt41xcRKK2Nzk_kRfU" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CacheProvider value={clientSideEmotionCache}>
          {children}
        </CacheProvider>
      </body>
    </html>
  );
}
