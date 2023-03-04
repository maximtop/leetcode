const { longestPalindrome } = require('./longestPalindrome');

describe('longestPalindrome', () => {
    it('finds', () => {
        expect(longestPalindrome('abccccdd')).toBe(7);
    });
});
