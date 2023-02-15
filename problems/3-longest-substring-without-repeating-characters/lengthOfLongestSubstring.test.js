const { lengthOfLongestSubstring } = require('./lengthOfLongestSubstring');

describe('lengthOfLongestSubstring', () => {
    it('finds length of longest substring', () => {
        expect(lengthOfLongestSubstring('aabcc')).toBe(3);
    });
});
