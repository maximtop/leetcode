const { encode, decode } = require('./encode');

describe('encode and decode tinyurl', () => {
    it('encodes and decodes urls', () => {
        const longUrl = 'https://example.org/long_url';
        const shortUrl = encode(longUrl);
        expect(decode(shortUrl)).toBe(longUrl);
    });
});
