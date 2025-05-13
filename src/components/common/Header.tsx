'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full">
      <div className="hidden lg:block w-full max-w-[1440px] h-[169px] mx-auto px-[174px] py-12">
        <div className="flex items-center justify-between">
          <a href="https://getplume.co/" className="w-[153px] h-[52px]">
            <Image
              src="/logo.svg"
              alt="Plume logo"
              width={153}
              height={52}
              className="w-full h-full"
            />
          </a>

          <div className="flex items-center gap-[45px]">
            <Button variant="outline" href="https://auth.getplume.co/oauth/account/login">
              Login
            </Button>
            
            <Button variant="primary" href="https://getplume.co/get-started">
              Get Started
            </Button>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex items-center justify-between px-4 py-3">
        <a href="https://getplume.co/" className="w-[106px] h-[36px]">
          <Image
            src="/logo.svg"
            alt="Plume logo"
            width={106}
            height={36}
            className="w-full h-full"
          />
        </a>

        <div className="flex items-center gap-3">
          <Button variant="primary" href="https://getplume.co/get-started" className="inline-flex">
            Get Started
          </Button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-6 h-6 flex-shrink-0"
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3.6001 6.00078C3.6001 5.33804 4.13736 4.80078 4.8001 4.80078H19.2001C19.8628 4.80078 20.4001 5.33804 20.4001 6.00078C20.4001 6.66352 19.8628 7.20078 19.2001 7.20078H4.8001C4.13736 7.20078 3.6001 6.66352 3.6001 6.00078Z" fill="#0F172A"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.6001 12.0008C3.6001 11.338 4.13736 10.8008 4.8001 10.8008H19.2001C19.8628 10.8008 20.4001 11.338 20.4001 12.0008C20.4001 12.6635 19.8628 13.2008 19.2001 13.2008H4.8001C4.13736 13.2008 3.6001 12.6635 3.6001 12.0008Z" fill="#0F172A"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M3.6001 18.0008C3.6001 17.338 4.13736 16.8008 4.8001 16.8008H19.2001C19.8628 16.8008 20.4001 17.338 20.4001 18.0008C20.4001 18.6635 19.8628 19.2008 19.2001 19.2008H4.8001C4.13736 19.2008 3.6001 18.6635 3.6001 18.0008Z" fill="#0F172A"/>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="px-4 py-3">
            <a href="https://auth.getplume.co/oauth/account/login" className="block w-full text-left py-2 px-4 hover:bg-gray-100 rounded">
              <span className="text-[#6816AF] font-fibra text-base font-semibold">Login</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}