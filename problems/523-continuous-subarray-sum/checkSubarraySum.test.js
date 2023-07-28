const { checkSubarraySum } = require('./checkSubarraySum');

describe('checkSubarraySum', () => {
    it('finds if array has subarray that is divisible by k', () => {
        expect(checkSubarraySum([23, 2, 4, 6, 7], 6)).toBe(true);
    });
});
