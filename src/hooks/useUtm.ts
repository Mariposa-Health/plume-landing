import { useSearchParams } from 'next/navigation';
import { getUtmSource, addUtmToPath } from '@/utils/utm';

export const useUtm = () => {
  const searchParams = useSearchParams();
  const utmSource = getUtmSource(searchParams);

  const getPathWithUtm = (path: string) => {
    return addUtmToPath(path, utmSource);
  };

  return {
    utmSource,
    getPathWithUtm,
  };
};
