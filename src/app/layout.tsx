import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const cooper = localFont({
  src: [
    {
      path: './fonts/coopertl-light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-cooper',
  display: 'swap',
});

const fibra = localFont({
  src: [
    {
      path: './fonts/fibraone-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/fibraone-semibold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-fibra',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Plume Health - Transform Healthcare for Every Trans Life',
  description:
    'Virtual gender-affirming care and dedicated source of community, wellness resources, and support for the trans and gender community.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cooper.variable} ${fibra.variable} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
