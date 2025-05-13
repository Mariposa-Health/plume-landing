import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#340B65] min-h-[358px] flex flex-col justify-between px-4 lg:px-[174px] py-12">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-0">
        <a href="https://getplume.co/" className="w-[204px] h-[102.302px]">
          <Image
            src="/logo-white.svg" 
            alt="Plume logo"
            width={204}
            height={102.302}
            className="w-full h-full"
          />
        </a>

        <div className="flex gap-4">
          <a 
            href="https://www.facebook.com/getplume" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Facebook"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          <a 
            href="https://www.youtube.com/@Plume_Clinic/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

          <a 
            href="https://www.instagram.com/plume_clinic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017 0zM11.99 17.98c-3.316 0-6.002-2.686-6.002-6.002s2.686-6.002 6.002-6.002c3.315 0 6.002 2.686 6.002 6.002s-2.687 6.002-6.002 6.002z"/>
              <path d="M11.99 8.982c-1.654 0-2.996 1.341-2.996 2.996s1.343 2.996 2.996 2.996 2.996-1.341 2.996-2.996-1.343-2.996-2.996-2.996z"/>
              <circle cx="15.228" cy="8.772" r="1.373"/>
            </svg>
          </a>

          <a 
            href="https://www.linkedin.com/company/plumeclinic/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a 
            href="https://www.tiktok.com/@plume_clinic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
          </a>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12 mt-8 lg:mt-0">
        <a 
          href="https://getplume.co/about-us/" 
          className="text-white font-fibra text-sm font-normal leading-[22px] underline hover:opacity-80 transition-opacity"
        >
          About Us
        </a>
        <a 
          href="https://getplume.co/terms/" 
          className="text-white font-fibra text-sm font-normal leading-[22px] underline hover:opacity-80 transition-opacity"
        >
          Terms of Use
        </a>
        <a 
          href="https://getplume.co/privacy/" 
          className="text-white font-fibra text-sm font-normal leading-[22px] underline hover:opacity-80 transition-opacity"
        >
          Privacy
        </a>
      </div>
    </footer>
  );
}