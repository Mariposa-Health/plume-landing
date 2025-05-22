/**
 * Checks if a URL is external (starts with http://, https://, or //)
 * @param url The URL to check
 * @returns boolean indicating if the URL is external
 */
export const isExternalUrl = (url: string): boolean => {
  if (!url) return false;

  return /^(https?:\/\/|\/\/)/i.test(url);
};
