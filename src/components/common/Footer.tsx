'use client';

import Image from 'next/image';
import Wrapper from './Wrapper';
import Link from 'next/link';
import { useUtm } from '@/hooks/useUtm';

export default function Footer() {
  const { getPathWithUtm } = useUtm();

  return (
    <footer className="bg-[#340B65] py-[60px]">
      <Wrapper className="flex flex-col md:flex-row md:flex-wrap items-center md:items-start md:content-between gap-[24px]">
        <Link href={getPathWithUtm('/')} className="w-fit">
          <Image src="/logo-white.svg" alt="Plume logo" width={156} height={53} />
        </Link>

        <ul className="flex flex-wrap justify-center md:justify-end gap-4 md:flex-1">
          <li>
            <a
              href="https://www.facebook.com/getplume"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@Plume_Clinic/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="YouTube"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/plume_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8499 0H7.15014C5.25425 0.00144464 3.43642 0.755191 2.09582 2.09573C0.755225 3.43627 0.00144471 5.25401 0 7.14982V16.8491C0.00115577 18.7451 0.754809 20.5631 2.09544 21.9039C3.43607 23.2447 5.25406 23.9986 7.15014 24H16.8499C18.7459 23.9983 20.5637 23.2443 21.9042 21.9036C23.2448 20.5629 23.9986 18.745 24 16.8491V7.14982C23.9991 5.25383 23.2455 3.43575 21.9048 2.09509C20.5641 0.754428 18.7459 0.000867264 16.8499 0ZM21.5868 16.8491C21.5865 18.1053 21.0873 19.3099 20.1991 20.1981C19.3108 21.0864 18.1061 21.5855 16.8499 21.5858H7.15014C6.52813 21.5858 5.91221 21.4633 5.33756 21.2252C4.76291 20.9872 4.24078 20.6383 3.801 20.1984C3.36123 19.7585 3.01241 19.2364 2.77447 18.6617C2.53654 18.087 2.41415 17.4711 2.41429 16.8491V7.14982C2.41415 6.52788 2.53655 5.91202 2.77449 5.3374C3.01244 4.76278 3.36128 4.24067 3.80107 3.8009C4.24086 3.36112 4.763 3.01231 5.33764 2.77437C5.91229 2.53643 6.52818 2.41404 7.15014 2.41418H16.8499C18.1058 2.41447 19.3102 2.9135 20.1983 3.80154C21.0864 4.68958 21.5854 5.89394 21.5857 7.14982L21.5868 16.8491Z"
                  fill="white"
                />
                <path
                  d="M12 5.79461C8.57674 5.79461 5.79492 8.57752 5.79492 11.9997C5.79492 15.4219 8.57783 18.2048 12 18.2048C15.4222 18.2048 18.2051 15.4219 18.2051 11.9997C18.2051 8.57752 15.4233 5.79461 12 5.79461ZM12 15.7906C10.9946 15.7908 10.0303 15.3915 9.31928 14.6807C8.60824 13.9698 8.2087 13.0057 8.20856 12.0002C8.20841 10.9948 8.60767 10.0305 9.3185 9.31951C10.0293 8.60847 10.9935 8.20893 11.9989 8.20879C13.0043 8.20864 13.9686 8.6079 14.6797 9.31873C15.3907 10.0296 15.7902 10.9937 15.7904 11.9992C15.7905 13.0046 15.3913 13.9689 14.6804 14.6799C13.9696 15.3909 13.0054 15.7905 12 15.7906ZM18.2182 4.35352C18.5122 4.35373 18.7995 4.44109 19.0439 4.60456C19.2882 4.76803 19.4786 5.00026 19.591 5.27191C19.7034 5.54356 19.7328 5.84244 19.6754 6.13077C19.618 6.4191 19.4764 6.68395 19.2685 6.89183C19.0606 7.09971 18.7958 7.2413 18.5075 7.29871C18.2191 7.35612 17.9202 7.32676 17.6486 7.21436C17.3769 7.10195 17.1447 6.91154 16.9812 6.66719C16.8178 6.42283 16.7304 6.1355 16.7302 5.84151C16.7302 5.02115 17.2866 4.35352 18.2182 4.35352Z"
                  fill="white"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/plumeclinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/@plume_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="TikTok"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </li>
        </ul>

        <ul className="flex flex-wrap content-center md:content-start gap-[24px] md:w-full">
          <li>
            <Link
              href={getPathWithUtm('/privacy')}
              className="text-white text-[14px] leading-[22px] underline decoration-current hover:decoration-transparent transition-colors duration-300"
            >
              Privacy
            </Link>
          </li>
        </ul>
      </Wrapper>
    </footer>
  );
}
