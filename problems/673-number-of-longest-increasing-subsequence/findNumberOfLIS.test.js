const { findNumberOfLIS } = require('./findNumberOfLIS');

describe('findNumberOfLIS', () => {
    it('finds number of longest increasing subsequences', () => {
        expect(findNumberOfLIS([1, 3, 5, 4, 7])).toBe(2);
    });
});
