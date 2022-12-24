const { maxSubArray } = require('./maxSubArray');

describe('maxSubArray', () => {
    it('finds max sub array', () => {
        const arr = [1, -4, 2, -2, 3, -1, 5];
        expect(maxSubArray(arr)).toBe(7)
    });
});

