const { longestOnes } = require('./longestOnes');

describe('longestOnes', () => {
    it('determines longest ones', () => {
        expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
    });
});
