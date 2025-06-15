import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folletos Para emprendedores',
  description: 'Una forma de publicar tu negocio con imágenes, textos y contacto sin tener que enviar siempre las mismas fotos. Dandote la posibilidad de mostrar tu emprendimiento de forma profesional y atractiva. Haciendo aparecer tu negocio en los buscadores.',
  keywords: ['folletos', 'emprendimientos', 'La Plata', 'negocios locales', 'barrio el hipódromo', 'difusión local', 'catálogos', 'flyers digitales'],
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
    title: 'Folletos Para emprendedores',
    description: 'Conectá con tus clientes mostrando tu negocio con estilo, desde una sola página fácil de compartir.',
    url: 'https://folletos.vercel.app',
    siteName: 'Folletos Para emprendedores',
    images: [
      {
        url: 'https://res.cloudinary.com/dd8syliu4/image/upload/v1749956973/fotos-aereas-hipodromojpg_o7glrl.jpg',
        width: 1200,
        height: 630,
        alt: 'Vista aérea del Barrio El Hipódromo',
      },
    ],
    type: 'website',
    locale: 'es_AR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Folletos Para emprendedores',
    description: 'Conectá con tus clientes mostrando tu negocio con estilo, desde una sola página fácil de compartir.',
    images: ['https://res.cloudinary.com/dd8syliu4/image/upload/v1749956973/fotos-aereas-hipodromojpg_o7glrl.jpg'],
    creator: '@latronico96',
  },
  verification: {
    google: 'LPSt3_sjFJfq1Qv7_ISCHgBPvXt41xcRKK2Nzk_kRfU',
    other: {
      'facebook-domain-verification': '0acxud42bjeaeadspdvtrs1uuqq5p9',
    },
  },
};
