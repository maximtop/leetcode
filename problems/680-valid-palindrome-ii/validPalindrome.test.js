const { validPalindrome } = require('./validPalindrome');

describe('validPalindrome', () => {
    it('detects if palindrome is valid', () => {
        expect(validPalindrome('aba')).toBe(true);
        expect(validPalindrome('abca')).toBe(true);
        expect(validPalindrome('abc')).toBe(false);
    });
});
