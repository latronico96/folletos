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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CacheProvider value={clientSideEmotionCache}>
          {children}
        </CacheProvider>
      </body>
    </html>
  );
}
