const { firstUniqChar } = require('./firstUniqChar');

describe('firstUniqChar', () => {
    it('finds first uniq char', () => {
        expect(firstUniqChar('abc')).toBe(0);
        expect(firstUniqChar('abab')).toBe(-1);
        expect(firstUniqChar('ababd')).toBe(4);
    });
});
