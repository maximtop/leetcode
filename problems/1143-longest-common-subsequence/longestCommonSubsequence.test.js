const { longestCommonSubsequence } = require('./longestCommonSubsequence');

describe('longestCommonSubsequence', () => {
    it('finds length of the longest common subsequence', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });
});
