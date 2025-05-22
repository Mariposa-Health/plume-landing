export const addUtmToPath = (path: string, utmSource: string | null): string => {
  if (!utmSource) return path;

  const separator = path.includes('?') ? '&' : '?';
  return `${path}${separator}utm-source=${utmSource}`;
};
