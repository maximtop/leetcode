const { longestCommonPrefix } = require('./longestCommonPrefix');

describe('longestCommonPrefix', () => {
    it('finds longest common prefix', () => {
        expect(longestCommonPrefix(['ab', 'abcd', 'abde'])).toBe('ab');
        expect(longestCommonPrefix(['ab', 'a'])).toBe('a');
    });
});
