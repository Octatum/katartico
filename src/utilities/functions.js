import { useLocation } from 'react-use';

export function hasLanguagePrefix(string) {
  return !!string && (string.startsWith('/en/') || string === '/en');
}

export function getLanguage() {
  const locationState = useLocation();
  const { pathname } = locationState;
  const hasPrefix = hasLanguagePrefix(pathname);

  if (!hasPrefix) return '';

  return 'en';
}

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
