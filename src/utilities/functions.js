import { useLocation } from 'react-use';

export function hasLanguagePrefix(pathname) {
  return !!pathname && (pathname.startsWith('/en/') || pathname === '/en');
}

export function getCurrentLanguage() {
  const locationState = useLocation();
  const { pathname } = locationState;
  const hasPrefix = hasLanguagePrefix(pathname);

  if (!hasPrefix) return '';

  return 'en';
}

export function stripPrefix(string) {
  return !!string && string.startsWith('/en') ? string.substr(0, 3) : string;
}

export function changeLanguageForCurrentLocation() {
  const { pathname } = useLocation();
  const cleanLink = pathname && pathname.startsWith('/en') ? pathname.substr(3) : pathname;
  const routePrefix = hasLanguagePrefix(pathname) ? '' : '/en';
  const newLocation = routePrefix + cleanLink;

  return newLocation;
}

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}
