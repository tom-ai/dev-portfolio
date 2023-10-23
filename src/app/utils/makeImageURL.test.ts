import { makeImageURL } from './makeImageURL';

describe('makeImageURL', () => {
  it('returns empty string if domain is undefined', () => {
    const url = makeImageURL('/uploads/test.jpg', undefined);

    expect(url).toBeNull();
  });

  it('should return a URL with Strapi domain at the beginning', () => {
    const domain = 'http://127.1.2.3:5555';
    const url = makeImageURL('/uploads/test.jpg', domain);

    expect(url).toBe('http://127.1.2.3:5555/uploads/test.jpg');
  });
});
