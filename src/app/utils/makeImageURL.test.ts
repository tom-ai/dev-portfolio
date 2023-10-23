import { makeImageURL } from './makeImageURL';

describe('makeImageURL', () => {
  it('returns null if domain is undefined', () => {
    // something
    const url = makeImageURL('/uploads/test.jpg', undefined);

    expect(url).toBeNull();
  });

  //   it('should return a URL with Strapi domain at the beginning', () => {
  //     const strapiDomain = 'http://127.1.2.3:5555';
  //     const url = makeImageURL('/uploads/test.jpg', strapiDomain);

  //     expect(url).toBe('http://127.1.2.3:5555/uploads/test.jpg');
  //   });
});
