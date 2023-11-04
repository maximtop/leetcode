const { canPartition } = require('./canPartition');

describe('canPartition', () => {
    it('checks if array can be divided to two subarrays with same sum', () => {
        expect(canPartition([1, 5, 11, 5])).toBe(true);
        expect(canPartition([1, 2, 3, 5])).toBe(false);
        expect(canPartition([2, 2, 1, 1])).toBe(true);
    });
});
