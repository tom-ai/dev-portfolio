export function makeImageURL(url: string, domain: string | undefined): string {
  if (domain === undefined) return '';
  return domain + url;
}
