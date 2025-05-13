import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Fibra+One:wght@400;600&display=swap" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.cdnfonts.com/css/cooper-tl" 
          rel="stylesheet" 
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}