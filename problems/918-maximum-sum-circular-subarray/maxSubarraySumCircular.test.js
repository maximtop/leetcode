const { maxSubarraySumCircular } = require('./maxSubarraySumCircular');

describe('maxSubarraySumCircular', () => {
    it('finds max sub array', () => {
        expect(maxSubarraySumCircular([5, -3, 5])).toBe(10);
        expect(maxSubarraySumCircular([-3, -2, -3])).toBe(-2);
    });
});
