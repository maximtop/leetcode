const { findTargetSumWays } = require('./findTargetSumWays');

describe('findTargetSumWays', () => {
    it('finds target sum', () => {
        expect(findTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
    });
});
