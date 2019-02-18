export function hasLanguagePrefix(string) {
  return !!string && (string.startsWith('/en/') || string === "/en");
}