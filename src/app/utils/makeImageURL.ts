export function makeImageURL(url: string, domain: string | undefined) {
  if (domain === undefined) return null;
  return domain + url;
}
