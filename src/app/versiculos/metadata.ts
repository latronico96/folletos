import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Versículos de la Biblia',
  description: 'Encuentra consuelo y fortaleza en versículos bíblicos para diferentes emociones. Desde la tristeza hasta la felicidad, estos versículos te acompañarán en cada momento de tu vida.',
  keywords: ['versículos', 'Biblia', 'tristeza', 'felicidad', 'esperanza', 'consolación', 'fortaleza'],
  authors: [
    {
      name: 'Ignacio Latronico',
      url: 'https://folletos.vercel.app/',
    },
  ],
  creator: 'Ignacio Latronico',
  publisher: 'Ignacio Latronico',
  metadataBase: new URL('https://folletos.vercel.app'),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  openGraph: {
    title: 'Versículos de la Biblia',
    description: 'Encuentra consuelo y fortaleza en versículos bíblicos para diferentes emociones. Desde la tristeza hasta la felicidad, estos versículos te acompañarán en cada momento de tu vida.',
    url: 'https://folletos.vercel.app/versiculos',
    siteName: 'Versículos de la Biblia',
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Versículos de la Biblia',
    description: 'Encuentra consuelo y fortaleza en versículos bíblicos para diferentes emociones. Desde la tristeza hasta la felicidad, estos versículos te acompañarán en cada momento de tu vida.',
    creator: '@latronico96',
  },
  verification: {
    google: 'LPSt3_sjFJfq1Qv7_ISCHgBPvXt41xcRKK2Nzk_kRfU',
    other: {
      'facebook-domain-verification': '0acxud42bjeaeadspdvtrs1uuqq5p9',
    },
  },
};

