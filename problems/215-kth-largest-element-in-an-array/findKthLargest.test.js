const { findKthLargest } = require('./findKthLargest');

describe('findKthLargest', () => {
    it('finds largest k', () => {
        const nums = [3, 2, 1, 5, 6, 4];
        const k = 2;
        expect(findKthLargest(nums, k)).toBe(5);
    });
});
