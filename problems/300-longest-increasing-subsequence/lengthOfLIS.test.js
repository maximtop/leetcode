const { lengthOfLIS } = require('./lengthOfLIS');

describe('lengthOfLIS', () => {
    it('finds length of longest increasing substring', () => {
        expect(lengthOfLIS([1, 2, 4, 3])).toBe(3); // 1, 2, 4 || 1, 2, 3
    });
});
