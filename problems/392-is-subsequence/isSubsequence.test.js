const { isSubsequence } = require('./isSubsequence');

describe('isSubsequence', () => {
    it('detects if string is subsequence', () => {
        // expect(isSubsequence('abc', 'ahbgdc')).toBe(true);
        expect(isSubsequence('b', 'c')).toBe(true);
    });
});
