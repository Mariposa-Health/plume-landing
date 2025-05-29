'use client';

import { addUtmToPath } from '@/utils/utm';
import { useEffect, useState } from 'react';

export const useUtm = () => {
  const [utmSource, setUtmSource] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const source = urlParams.get('utm_source');
      setUtmSource(source);
    }
  }, []);

  const getPathWithUtm = (path: string) => {
    return addUtmToPath(path, utmSource);
  };

  return {
    utmSource,
    getPathWithUtm,
  };
};
