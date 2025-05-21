import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Plume Health - Transform Healthcare for Every Trans Life",
  description: "Virtual gender-affirming care and dedicated source of community, wellness resources, and support for the trans and gender community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cooper.variable} ${fibra.variable}`}>
        {children}
      </body>
    </html>
  );
}