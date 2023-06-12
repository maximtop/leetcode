const { isInterleave } = require('./isInterleave');

describe('isInterleave', () => {
    it('checks if strings are interleaving to the third', () => {
        expect(isInterleave('aabcc', 'dbbca', 'aadbbcbcac')).toBe(true);
        expect(isInterleave('aabcc', 'dbbca', 'aadbbbaccc')).toBe(false);
    });
});
