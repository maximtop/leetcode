const { longestPalindrome } = require('./longestPalindrome');

describe('longestPalindrome', () => {
    it('finds longer palindrome', () => {
        expect(longestPalindrome('babad')).toBe('bab');
    });
});
