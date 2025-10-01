import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DDC - Digital Defence Club | CBIT Cybersecurity Community',
  description: 'Empowering the next generation of cybersecurity professionals and blockchain innovators at CBIT. Join our premier student organization dedicated to digital security excellence.',
  keywords: ['cybersecurity', 'blockchain', 'digital defence', 'CBIT', 'hacking', 'security', 'cryptocurrency', 'ethical hacking', 'web3', 'student organization'],
  authors: [{ name: 'Digital Defence Club CBIT' }],
  creator: 'Digital Defence Club CBIT',
  publisher: 'Digital Defence Club CBIT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://cbitddc.vercel.app'),
  openGraph: {
    title: 'DDC - Digital Defence Club | CBIT Cybersecurity Community',
    description: 'Empowering the next generation of cybersecurity professionals and blockchain innovators at CBIT.',
    url: '/',
    siteName: 'Digital Defence Club CBIT',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'Digital Defence Club CBIT Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDC - Digital Defence Club | CBIT Cybersecurity Community',
    description: 'Empowering the next generation of cybersecurity professionals and blockchain innovators at CBIT.',
    images: ['/logo.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script async src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
        <script async src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}