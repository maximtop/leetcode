const { countPalindromicSubsequence } = require('./countPalindromicSubsequence');

describe('countPalindromicSubsequence', () => {
    it('counts palindromic subsequences', () => {
        expect(countPalindromicSubsequence('aabca')).toBe(3);
    });
});
